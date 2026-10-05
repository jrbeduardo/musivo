type MosaicPatternProps = {
  id: string;
  className?: string;
  density?: "regular" | "large";
  variant?: "interlock" | "weave" | "octagon";
};

const TILE = 120;
const CELL = 60;
const CANVAS = 720;
const SHAPE_CLASSES = ["a", "b", "c", "d"];

// Translation tessellation: each notch on one edge is a matching tab on the opposite edge.
const INTERLOCK_CELL = "M0 0H18L30 14 42 0H60V18L74 30 60 42V60H42L30 74 18 60H0V42L14 30 0 18Z";

function shapeClass(index: number) {
  return `mosaic-shape mosaic-shape-${SHAPE_CLASSES[index % SHAPE_CLASSES.length]}`;
}

function InterlockTile() {
  return (
    <g className="mosaic-tile mosaic-interlock">
      {[0, 1].flatMap((row) =>
        [0, 1].map((col) => (
          <path key={`${row}-${col}`} className={shapeClass(col + row * 2)} d={INTERLOCK_CELL} transform={`translate(${col * CELL} ${row * CELL})`} />
        )),
      )}
    </g>
  );
}

function WeaveTile() {
  const blocks = [
    { x: 0, y: 0, horizontal: true },
    { x: CELL, y: 0, horizontal: false },
    { x: 0, y: CELL, horizontal: false },
    { x: CELL, y: CELL, horizontal: true },
  ];
  const bar = CELL / 3;
  return (
    <g className="mosaic-tile mosaic-weave">
      {blocks.flatMap(({ x, y, horizontal }) =>
        [0, 1, 2].map((i) => {
          const colour = horizontal ? (i === 1 ? 1 : 0) : i === 1 ? 3 : 2;
          return horizontal ? (
            <rect key={`${x}-${y}-${i}`} className={shapeClass(colour)} x={x} y={y + i * bar} width={CELL} height={bar} />
          ) : (
            <rect key={`${x}-${y}-${i}`} className={shapeClass(colour)} x={x + i * bar} y={y} width={bar} height={CELL} />
          );
        }),
      )}
    </g>
  );
}

function OctagonTile() {
  // Truncated square tiling: regular octagons of width CELL with 45° squares filling the gaps.
  const half = CELL / 2;
  const k = CELL / (2 * (1 + Math.SQRT2));
  const point = ([x, y]: number[]) => `${x.toFixed(2)} ${y.toFixed(2)}`;
  const octagon = (cx: number, cy: number) =>
    [
      [cx - k, cy - half], [cx + k, cy - half], [cx + half, cy - k], [cx + half, cy + k],
      [cx + k, cy + half], [cx - k, cy + half], [cx - half, cy + k], [cx - half, cy - k],
    ].map(point).join("L");
  const diamond = (cx: number, cy: number) =>
    [[cx, cy - k], [cx + k, cy], [cx, cy + k], [cx - k, cy]].map(point).join("L");

  const centres = [0, CELL];
  return (
    <g className="mosaic-tile mosaic-octagon">
      {[0, 1].flatMap((row) =>
        [0, 1].map((col) => (
          <path key={`o-${row}-${col}`} className={shapeClass((row + col) % 2)} d={`M${octagon(half + col * CELL, half + row * CELL)}Z`} />
        )),
      )}
      {centres.flatMap((cy) =>
        centres.map((cx) => <path key={`d-${cx}-${cy}`} className={shapeClass(2 + ((cx + cy) / CELL) % 2)} d={`M${diamond(cx, cy)}Z`} />),
      )}
    </g>
  );
}

export function MosaicPattern({
  id,
  className = "",
  density = "regular",
  variant = "interlock",
}: MosaicPatternProps) {
  const scale = density === "large" ? 1.5 : 1;
  const tileSize = TILE * scale;
  const tileId = `${id}-tile`;
  const tile = { interlock: <InterlockTile />, weave: <WeaveTile />, octagon: <OctagonTile /> }[variant];
  // One extra ring of tiles so the tabs and diamonds at the canvas edge are complete.
  const steps = Array.from({ length: Math.ceil(CANVAS / tileSize) + 2 }, (_, i) => (i - 1) * tileSize);

  return (
    <svg
      className={`mosaic-pattern mosaic-pattern-${variant} ${className}`}
      viewBox={`0 0 ${CANVAS} ${CANVAS}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <g id={tileId}>{tile}</g>
      </defs>
      {steps.flatMap((y) =>
        steps.map((x) => <use key={`${x}-${y}`} href={`#${tileId}`} transform={`translate(${x} ${y}) scale(${scale})`} />),
      )}
    </svg>
  );
}