import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { MockupShell } from './MockupShell';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const todayIdx = 2; // Wed

type Row = {
  initials: string;
  name: string;
  hours: (string | number)[];
  status: 'Approved' | 'Pending' | 'Locked';
  total: string;
};

const rows: Row[] = [
  {
    initials: 'AC',
    name: 'Alex Chen',
    hours: [8, 8, 8, 8, 8, '—', '—'],
    status: 'Approved',
    total: '40.0',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    hours: [7.5, 8, 7.5, 8, 7.5, '—', '—'],
    status: 'Approved',
    total: '38.5',
  },
  {
    initials: 'MP',
    name: 'Maya Patel',
    hours: [6, 8, 7, 8, '—', '—', '—'],
    status: 'Pending',
    total: '29.0',
  },
  {
    initials: 'JK',
    name: 'Jordan Kim',
    hours: [8, 8, 8, 8, 8, '—', '—'],
    status: 'Locked',
    total: '40.0',
  },
];

const STATUS_STYLES: Record<Row['status'], string> = {
  Approved: 'bg-[var(--accent-quiet)] text-[var(--accent-base)]',
  Pending: 'bg-[var(--warning-quiet)] text-[var(--warning)]',
  Locked: 'bg-[var(--surface-subtle)] text-[var(--text-tertiary)]',
};

type Props = {
  compact?: boolean;
  className?: string;
};

export function TimesheetMockup({ compact = false, className = '' }: Props) {
  const total = rows.reduce((sum, r) => sum + parseFloat(r.total), 0);

  return (
    <MockupShell url="app.thevowbooks.com / timesheets" className={className}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Week 16 · Apr 14–20
            </p>
            <p className="text-[13px] font-semibold text-[var(--text-primary)]">
              Timesheet review
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-[8px] border border-[var(--accent-base)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--accent-base)]"
          >
            <CheckCircle size={12} weight="bold" />
            Approve all
          </button>
        </div>

        {/* Grid */}
        <div className="mt-3 overflow-hidden rounded-[8px] border border-[var(--border-hairline)]">
          {/* Day header */}
          <div className="grid grid-cols-[110px_repeat(7,1fr)_56px] bg-[var(--surface-subtle)]">
            <div className="px-2 py-1.5 text-[9px] font-medium text-[var(--text-tertiary)]">
              Consultant
            </div>
            {days.map((d, i) => (
              <div
                key={d}
                className={`text-center text-[9px] font-medium uppercase tracking-[0.06em] ${
                  i === todayIdx
                    ? 'text-[var(--accent-base)]'
                    : i >= 5
                    ? 'text-[var(--text-quiet)]'
                    : 'text-[var(--text-tertiary)]'
                } px-1 py-1.5`}
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                {d.slice(0, compact ? 1 : 3)}
              </div>
            ))}
            <div className="px-2 py-1.5 text-right text-[9px] font-medium text-[var(--text-tertiary)]">
              Status
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, ri) => (
            <div
              key={r.name}
              className={`grid grid-cols-[110px_repeat(7,1fr)_56px] items-center border-t border-[var(--border-hairline)] bg-[var(--surface)] ${
                ri % 2 === 1 ? 'bg-[var(--page)]' : ''
              }`}
            >
              <div className="flex items-center gap-1.5 px-2 py-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-quiet)] text-[9px] font-semibold text-[var(--accent-base)]">
                  {r.initials}
                </span>
                <span className="truncate text-[10px] font-medium text-[var(--text-primary)]">
                  {compact ? r.name.split(' ')[0] : r.name}
                </span>
              </div>
              {r.hours.map((h, hi) => (
                <div
                  key={hi}
                  className={`relative px-1 py-2 text-center text-[10px] tabular-nums ${
                    hi === todayIdx
                      ? 'border-l-2 border-[var(--accent-base)]'
                      : ''
                  } ${
                    hi >= 5
                      ? 'bg-[var(--surface-subtle)] text-[var(--text-quiet)]'
                      : h === '—'
                      ? 'text-[var(--text-quiet)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {h}
                </div>
              ))}
              <div className="flex items-center justify-end px-2 py-2">
                <span
                  className={`rounded-full px-1.5 py-[1px] text-[8.5px] font-medium ${STATUS_STYLES[r.status]}`}
                >
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total bar */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex flex-1 items-center gap-2">
            <p
              className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Week total
            </p>
            <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-[var(--surface-subtle)]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-[var(--accent-base)]"
                style={{ width: '78%' }}
              />
            </div>
          </div>
          <p
            className="text-[12px] font-semibold tabular-nums text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            {total.toFixed(1)} h
          </p>
        </div>
      </div>
    </MockupShell>
  );
}
