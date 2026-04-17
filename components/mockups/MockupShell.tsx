import { ReactNode } from 'react';

type MockupShellProps = {
  url?: string;
  children: ReactNode;
  className?: string;
};

export function MockupShell({
  url = 'app.thevowbooks.com',
  children,
  className = '',
}: MockupShellProps) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] bg-[var(--surface)] shadow-[var(--shadow-lg)] ${className}`.trim()}
    >
      <div className="flex items-center gap-1.5 border-b border-[var(--border-hairline)] bg-[var(--surface-subtle)] px-3 py-2.5">
        <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#FEBC2E]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
        <span
          className="ml-3 truncate text-[10px] text-[var(--text-quiet)]"
          style={{
            fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
          }}
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
