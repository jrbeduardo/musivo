// The ∎ (QED) square of a theorem, turned inside its frame: tropos + teorema.
export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect className="brand-mark-frame" x="1.5" y="1.5" width="29" height="29" />
      <rect className="brand-mark-core" x="9.5" y="9.5" width="13" height="13" />
      <circle className="brand-mark-pivot" cx="16" cy="16" r="1.6" />
    </svg>
  );
}
