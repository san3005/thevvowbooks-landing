import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

type Props = {
  className?: string;
};

export function InvoiceToastMockup({ className = '' }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-[12px] bg-[var(--surface)] shadow-[var(--shadow-lg)] ${className}`.trim()}
    >
      <div className="flex items-center gap-2.5 px-3.5 py-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--success-quiet)]">
          <CheckCircle size={16} weight="fill" className="text-[var(--success)]" />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-[12px] font-semibold text-[var(--text-primary)]">
            Invoice approved
          </span>
          <span
            className="text-[10px] tabular-nums text-[var(--text-tertiary)]"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            INV-2025-0184 · $12,450
          </span>
        </div>
      </div>
      <div className="border-t border-[var(--border-hairline)] px-3.5 py-1.5">
        <span
          className="text-[10px] text-[var(--text-quiet)]"
          style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
        >
          Sent to Acme Corp · just now
        </span>
      </div>
    </div>
  );
}
