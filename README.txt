CONNECT WITH WRITER - ALL UPDATES (Step 2 se Step 8 + AI client)
=================================================================

KAISE USE KARNA HAI
1. Is zip ko extract karein.
2. "connect-with-writer-updates" folder ke ANDAR ke folders (app, components, lib)
   ko apne project ke root par copy karein aur "Replace" / "Overwrite" choose karein.
   (Folder structure bilkul project jaisa hai, isliye sab apni jagah par chali jayengi.)
3. Naya package install nahi karna. package.json aur login/OTP/session/proxy waghera
   ko is zip ne chhua hi nahi.
4. Terminal mein:   rm -rf .next   phir   npm run dev

ZAROORI WARNING
- Ye zip us version par bani hai jo aap ne mujhe upload ki thi. Agar aap ne usi zip ke baad
  koi file khud badli hai (khaas tor par app/globals.css ya app/dashboard-globals.css),
  to unhe overwrite karne se pehle apni copy se compare kar lein.
- Homepage (Step 1), Navbar, Exit-intent popup, homepage circle hover aur saari
  Firebase/OTP/session/proxy logic files IDENTICAL hain (maine verify kiya).
  Sirf "AuthShell.jsx" visual badli hai (Step 8a).

ENV (.env.local)
- .env.example mein sab variables ke placeholders hain. Isko ".env.local" ke naam se copy
  karke apni keys daalein. GEMINI_API_KEY ke liye PASTE_YOUR_GEMINI_API_KEY_HERE wala
  placeholder hai. ".env.local" kabhi commit nahi karni.
- Optional: _optional/gitignore.txt ko ".gitignore" bana kar rakh sakte hain, agar aap ke
  paas pehle se .gitignore nahi hai. Agar hai to is file ko ignore karein.

KAUN SA STEP KAHAN
- Step 2.2  Book Editing        : Editor's Desk hero + interactive 4-level Before/After
- Step 2.3  Proofreading        : proof-sheet hero + interactive marks, fake stats hataye
- Step 2.4  Book Publishing     : roadmap hero + interactive route chooser, fake stats hataye
- Step 2.5  Children's Publication : picture-book spread hero + age-band explorer
- Step 2.6  Children's Illustration: character-sheet hero + art-style explorer
- Step 2.7  Book Cover Design   : genre / typography / composition / reader-expectation guide
  (2.1 Book Writing aur 2.8 Book Marketing: aap ki zip mein cleanup pehle se tha, verify kiya,
   koi naya badlav nahi.)
- Step 3 About | Step 4 Case Studies | Step 5 Blog | Step 6 Contact (real Resend API)
- Step 7 Privacy, Terms, Services, Sitemap, robots, 404
- Step 8a Login/Signup/Verify visuals | 8b Dashboard shell | 8c baqi dashboard pages
- Step A1 Secure Gemini client (lib/ai/gemini.js)

SHARED NAYE COMPONENTS (Step 2): components/services/DetailTabs.jsx, SampleEdit.jsx, ProofMarks.jsx
