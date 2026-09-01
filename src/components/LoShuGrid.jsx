export default function LoShuGrid() {
  // Classic Lo Shu magic square used in Vedic numerology — every row,
  // column and diagonal sums to 15.
  const cells = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ];
  const size = 96;
  const pad = 40;

  const pos = (r, c) => ({
    x: pad + c * size + size / 2,
    y: pad + r * size + size / 2,
  });

  return (
    <div className="grid-motif">
      <svg viewBox="0 0 320 320" fill="none">
        {/* connecting lines along magic-sum diagonals */}
        <line x1={pos(0,0).x} y1={pos(0,0).y} x2={pos(2,2).x} y2={pos(2,2).y} stroke="#C9A24B" strokeOpacity="0.35" strokeWidth="1" />
        <line x1={pos(0,2).x} y1={pos(0,2).y} x2={pos(2,0).x} y2={pos(2,0).y} stroke="#C9A24B" strokeOpacity="0.35" strokeWidth="1" />
        <line x1={pos(1,0).x} y1={pos(1,0).y} x2={pos(1,2).x} y2={pos(1,2).y} stroke="#C9A24B" strokeOpacity="0.2" strokeWidth="1" />
        <line x1={pos(0,1).x} y1={pos(0,1).y} x2={pos(2,1).x} y2={pos(2,1).y} stroke="#C9A24B" strokeOpacity="0.2" strokeWidth="1" />

        {/* outer frame */}
        <rect x={pad} y={pad} width={size*3} height={size*3} stroke="#C9A24B" strokeOpacity="0.5" strokeWidth="1" />

        {cells.map((row, r) =>
          row.map((n, c) => {
            const { x, y } = pos(r, c);
            const isCenter = r === 1 && c === 1;
            return (
              <g key={`${r}-${c}`}>
                <circle
                  cx={x}
                  cy={y}
                  r={isCenter ? 26 : 20}
                  fill={isCenter ? "#C9A24B" : "#1E1338"}
                  stroke="#C9A24B"
                  strokeOpacity={isCenter ? 0 : 0.6}
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={y + 8}
                  textAnchor="middle"
                  fontFamily="'Cormorant Garamond', serif"
                  fontSize={isCenter ? 26 : 22}
                  fill={isCenter ? "#180F2B" : "#F6F1E6"}
                >
                  {n}
                </text>
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
}
