export default function PreviewNotice({ children }) {
  return (
    <p className="preview-notice" role="note">
      <strong>Preview.</strong>{" "}
      {children ||
        "This feature isn't live yet. What you enter here isn't saved or sent."}
    </p>
  );
}
