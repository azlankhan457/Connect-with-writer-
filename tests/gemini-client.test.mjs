import http from "node:http";
import assert from "node:assert/strict";

let mode = "ok";
let last = null;
const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    last = { url: req.url, headers: req.headers, body: body ? JSON.parse(body) : null };
    res.setHeader("Content-Type", "application/json");
    if (mode === "ok") return res.end(JSON.stringify({ candidates: [{ content: { parts: [{ text: "internal thought", thought: true }, { text: "Hello " }, { text: "author!" }] } }] }));
    if (mode === "http500") { res.statusCode = 500; return res.end(JSON.stringify({ error: { message: "secret detail" } })); }
    if (mode === "blocked") return res.end(JSON.stringify({ promptFeedback: { blockReason: "SAFETY" } }));
    if (mode === "empty") return res.end(JSON.stringify({ candidates: [{ finishReason: "MAX_TOKENS", content: { parts: [] } }] }));
    if (mode === "slow") return; // never answers
  });
});
await new Promise((r) => server.listen(0, r));
const base = `http://127.0.0.1:${server.address().port}/v1beta`;

process.env.GEMINI_API_BASE = base;
const { generateText, isGeminiConfigured, GeminiError } = await import("./gemini.mjs");
const args = { systemInstruction: "RULES", messages: [{ role: "user", content: "hi" }, { role: "assistant", content: "yo" }, { role: "user", content: "again" }] };
const results = [];
const check = (name, fn) => fn().then(() => results.push(`PASS ${name}`), (e) => results.push(`FAIL ${name}: ${e.message}`));

delete process.env.GEMINI_API_KEY;
await check("not configured without key", async () => { assert.equal(isGeminiConfigured(), false); });
await check("throws no_key without key", async () => { await assert.rejects(generateText(args), (e) => e instanceof GeminiError && e.code === "no_key"); });

process.env.GEMINI_API_KEY = "TEST_KEY_123";
await check("configured with key", async () => { assert.equal(isGeminiConfigured(), true); });
await check("returns joined text, drops thought parts", async () => { assert.equal(await generateText(args), "Hello author!"); });
await check("default model in path", async () => { assert.match(last.url, /\/v1beta\/models\/gemini-3\.5-flash:generateContent$/); });
await check("key sent in header, NOT in URL", async () => { assert.equal(last.headers["x-goog-api-key"], "TEST_KEY_123"); assert.ok(!last.url.includes("TEST_KEY")); });
await check("system rules separate from user text", async () => { assert.equal(last.body.systemInstruction.parts[0].text, "RULES"); assert.ok(!JSON.stringify(last.body.contents).includes("RULES")); });
await check("history roles mapped user/model", async () => { assert.deepEqual(last.body.contents.map((c) => c.role), ["user", "model", "user"]); });
process.env.GEMINI_MODEL = "custom-model";
await check("GEMINI_MODEL override", async () => { await generateText(args); assert.match(last.url, /models\/custom-model:/); });
delete process.env.GEMINI_MODEL;
mode = "http500";
await check("HTTP 500 -> upstream, body not leaked", async () => { await assert.rejects(generateText(args), (e) => e.code === "upstream" && !e.message.includes("secret detail") && !e.message.includes("TEST_KEY")); });
mode = "blocked";
await check("blocked prompt -> blocked", async () => { await assert.rejects(generateText(args), (e) => e.code === "blocked"); });
mode = "empty";
await check("empty reply -> empty", async () => { await assert.rejects(generateText(args), (e) => e.code === "empty" && e.message.includes("MAX_TOKENS")); });
console.log(results.join("\n"));
console.log(results.every((r) => r.startsWith("PASS")) ? "ALL PASSED" : "SOME FAILED");
server.closeAllConnections?.();
server.close();
process.exit(0);
