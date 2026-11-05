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

// Small action glyph: the same ∎ core, resting as a diamond and squaring up on hover.
export function TileGlyph() {
  return (
    <svg className="tile-glyph" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect className="tile-glyph-core" x="4" y="4" width="8" height="8" />
      <circle className="tile-glyph-pivot" cx="8" cy="8" r="1.1" />
    </svg>
  );
}
