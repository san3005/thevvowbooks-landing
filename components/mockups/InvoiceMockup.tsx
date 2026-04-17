import { MockupShell } from './MockupShell';

const lineItems = [
  { desc: 'Alex Chen — Senior Engineering', hours: '40.0', rate: '85', amount: '3,400.00' },
  { desc: 'Priya Sharma — Product Design', hours: '38.5', rate: '80', amount: '3,080.00' },
  { desc: 'Maya Patel — Project Management', hours: '29.0', rate: '75', amount: '2,175.00' },
  { desc: 'Jordan Kim — Backend Engineering', hours: '40.0', rate: '85', amount: '3,400.00' },
  { desc: 'Onboarding & QA', hours: '4.0', rate: '60', amount: '240.00' },
];

const subtotal = 12295.0;
const tax = 155.0;
const total = subtotal + tax;

type Props = {
  className?: string;
};

export function InvoiceMockup({ className = '' }: Props) {
  return (
    <MockupShell url="app.thevowbooks.com / invoices / INV-2025-0184" className={className}>
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[var(--text-primary)] text-[13px] font-bold text-[var(--surface)]">
              V
            </div>
            <div>
              <p className="text-[12px] font-semibold text-[var(--text-primary)]">
                theVowBooks
              </p>
              <p
                className="text-[10px] text-[var(--text-quiet)]"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                Workspace · Acme Staffing
              </p>
            </div>
          </div>
          <div className="text-right">
            <p
              className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Invoice
            </p>
            <p
              className="mt-0.5 text-[13px] font-semibold tabular-nums text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              INV-2025-0184
            </p>
          </div>
        </div>

        {/* Bill-to */}
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[var(--border-hairline)] pt-3">
          <div>
            <p
              className="text-[9px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Bill to
            </p>
            <p className="mt-1 text-[11px] font-medium text-[var(--text-primary)]">
              Acme Corp
            </p>
            <p className="text-[10px] leading-[1.4] text-[var(--text-tertiary)]">
              221 Mission St, Suite 400
              <br />
              San Francisco, CA 94105
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-[9px] uppercase tracking-[0.08em] text-[var(--text-quiet)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Period · Due
            </p>
            <p
              className="mt-1 text-[11px] tabular-nums text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Apr 14 – Apr 20
            </p>
            <p
              className="text-[10px] tabular-nums text-[var(--text-tertiary)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Net 14 · May 4
            </p>
          </div>
        </div>

        {/* Line items */}
        <div className="mt-4 overflow-hidden rounded-[8px] border border-[var(--border-hairline)]">
          <div
            className="grid grid-cols-[1fr_60px_60px_80px] bg-[var(--surface-subtle)] px-3 py-1.5 text-[9px] uppercase tracking-[0.08em] text-[var(--text-tertiary)]"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            <span>Description</span>
            <span className="text-right">Hours</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Amount</span>
          </div>
          {lineItems.map((li, i) => (
            <div
              key={li.desc}
              className={`grid grid-cols-[1fr_60px_60px_80px] items-center px-3 py-2 text-[10px] ${
                i > 0 ? 'border-t border-[var(--border-hairline)]' : ''
              }`}
            >
              <span className="text-[var(--text-secondary)]">{li.desc}</span>
              <span
                className="text-right tabular-nums text-[var(--text-secondary)]"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                {li.hours}
              </span>
              <span
                className="text-right tabular-nums text-[var(--text-secondary)]"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                ${li.rate}
              </span>
              <span
                className="text-right font-medium tabular-nums text-[var(--text-primary)]"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                ${li.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-3 ml-auto flex w-full max-w-[260px] flex-col gap-1">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[var(--text-tertiary)]">Subtotal</span>
            <span
              className="tabular-nums text-[var(--text-secondary)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[var(--text-tertiary)]">Tax (1.26%)</span>
            <span
              className="tabular-nums text-[var(--text-secondary)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              ${tax.toFixed(2)}
            </span>
          </div>
          <div className="mt-1 flex items-center justify-between border-t border-[var(--border-default)] pt-2">
            <span
              className="text-[12px] italic text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              Total
            </span>
            <span
              className="text-[16px] font-semibold tabular-nums text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}
