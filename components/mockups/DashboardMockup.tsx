import {
  SquaresFour,
  Users,
  ClipboardText,
  Receipt,
  ChartBar,
} from '@phosphor-icons/react/dist/ssr';
import { MockupShell } from './MockupShell';
import { Sparkline } from './Sparkline';

const navItems = [
  { icon: SquaresFour, label: 'Overview', active: true },
  { icon: Users, label: 'Consultants' },
  { icon: ClipboardText, label: 'Timesheets' },
  { icon: Receipt, label: 'Invoices' },
  { icon: ChartBar, label: 'Reports' },
];

const stats = [
  {
    label: 'Active consultants',
    value: '24',
    spark: [12, 14, 13, 16, 18, 17, 20, 22, 24],
  },
  {
    label: 'Hours this week',
    value: '968',
    spark: [820, 880, 870, 910, 940, 930, 968],
  },
  {
    label: 'Outstanding',
    value: '$42.1K',
    spark: [55, 50, 48, 46, 44, 43, 42.1],
  },
];

const activity = [
  { dot: 'var(--accent-base)', name: 'Priya S.', action: 'approved a timesheet', time: '2m' },
  { dot: 'var(--success)', name: 'Alex C.', action: 'submitted hours', time: '14m' },
  { dot: 'var(--warning)', name: 'Maya P.', action: 'flagged an invoice', time: '1h' },
  { dot: 'var(--text-tertiary)', name: 'System', action: 'sent INV-0184', time: '3h' },
  { dot: 'var(--accent-base)', name: 'Jordan L.', action: 'approved Week 16', time: '5h' },
  { dot: 'var(--text-tertiary)', name: 'System', action: 'locked Week 15', time: '1d' },
];

// 12-point revenue chart (months Jan→Dec)
const chartPoints = [42, 48, 46, 54, 58, 56, 64, 70, 68, 76, 82, 88];

type Props = {
  compact?: boolean;
  className?: string;
};

export function DashboardMockup({ compact = false, className = '' }: Props) {
  return (
    <MockupShell url="app.thevowbooks.com / overview" className={className}>
      <div className="flex">
        {/* Left rail */}
        <aside className="flex w-[56px] shrink-0 flex-col items-center gap-1 border-r border-[var(--border-hairline)] bg-[var(--surface-subtle)] py-3">
          <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-[6px] bg-[var(--text-primary)] text-[11px] font-bold text-[var(--surface)]">
            V
          </div>
          {navItems.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              title={label}
              className={`flex h-8 w-8 items-center justify-center rounded-[8px] ${
                active
                  ? 'bg-[var(--accent-base)] text-white'
                  : 'text-[var(--text-tertiary)]'
              }`}
            >
              <Icon size={16} weight={active ? 'fill' : 'regular'} />
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="flex-1 p-4">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                Apr 17 · Wed
              </p>
              <p className="text-[13px] font-semibold text-[var(--text-primary)]">
                Good morning, Priya
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-7 w-[120px] items-center rounded-[6px] border border-[var(--border-hairline)] bg-[var(--surface)] px-2 sm:flex">
                <span className="text-[10px] text-[var(--text-quiet)]">Search…</span>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-quiet)] text-[10px] font-semibold text-[var(--accent-base)]">
                PS
              </div>
            </div>
          </div>

          {/* Stat tiles */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[8px] border border-[var(--border-hairline)] bg-[var(--surface)] p-2.5"
              >
                <p
                  className="text-[9px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {s.label}
                </p>
                <p className="mt-1 text-[16px] font-semibold tabular-nums text-[var(--text-primary)]">
                  {s.value}
                </p>
                <Sparkline values={s.spark} width={72} height={18} className="mt-1" />
              </div>
            ))}
          </div>

          {/* Chart */}
          {!compact && (
            <div className="mt-3 rounded-[8px] border border-[var(--border-hairline)] bg-[var(--surface)] p-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-[var(--text-primary)]">
                  Revenue
                </p>
                <p
                  className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  YTD · USD K
                </p>
              </div>
              <RevenueChart points={chartPoints} />
            </div>
          )}

          {/* Compact: chart inline */}
          {compact && (
            <div className="mt-3 rounded-[8px] border border-[var(--border-hairline)] bg-[var(--surface)] p-2.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-[var(--text-primary)]">
                  Revenue YTD
                </p>
                <p className="text-[10px] tabular-nums text-[var(--accent-base)]">+18%</p>
              </div>
              <RevenueChart points={chartPoints} compact />
            </div>
          )}

          {/* Activity */}
          <div className="mt-3 rounded-[8px] border border-[var(--border-hairline)] bg-[var(--surface)] p-2.5">
            <p
              className="text-[9px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Recent activity
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {activity.map((a) => (
                <li key={a.name + a.time} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: a.dot }}
                  />
                  <span className="text-[10px] font-medium text-[var(--text-primary)]">
                    {a.name}
                  </span>
                  <span className="text-[10px] text-[var(--text-tertiary)]">
                    {a.action}
                  </span>
                  <span
                    className="ml-auto text-[10px] tabular-nums text-[var(--text-quiet)]"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {a.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

function RevenueChart({
  points,
  compact = false,
}: {
  points: number[];
  compact?: boolean;
}) {
  const w = 100;
  const h = compact ? 36 : 56;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);

  const coords = points.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return [x, y] as const;
  });

  // Smooth path via simple bezier
  const path = coords
    .map(([x, y], i) => {
      if (i === 0) return `M ${x} ${y}`;
      const [px, py] = coords[i - 1];
      const cx = (px + x) / 2;
      return `C ${cx} ${py} ${cx} ${y} ${x} ${y}`;
    })
    .join(' ');

  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="mt-2 h-[56px] w-full"
      style={{ height: h }}
      aria-hidden="true"
    >
      {/* gridlines */}
      {!compact && (
        <>
          <line x1="0" y1={h * 0.25} x2={w} y2={h * 0.25} stroke="var(--border-hairline)" strokeWidth="0.4" />
          <line x1="0" y1={h * 0.5} x2={w} y2={h * 0.5} stroke="var(--border-hairline)" strokeWidth="0.4" />
          <line x1="0" y1={h * 0.75} x2={w} y2={h * 0.75} stroke="var(--border-hairline)" strokeWidth="0.4" />
        </>
      )}
      <path d={area} fill="rgba(13, 148, 136, 0.08)" />
      <path
        d={path}
        fill="none"
        stroke="var(--accent-base)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* end dot */}
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r="1.6"
        fill="var(--accent-base)"
      />
    </svg>
  );
}
