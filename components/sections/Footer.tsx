import { Container } from '@/components/ui/Container';

const linkColumns = [
  {
    label: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--surface)] py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex items-start gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[var(--text-primary)] text-[var(--surface)] text-[13px] font-bold">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                theVvowBooks
              </span>
              <span className="mt-1 max-w-[260px] text-[12px] leading-[1.5] text-[var(--text-tertiary)]">
                Staffing operations, reimagined for lean teams.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((col) => (
              <div key={col.label} className="flex flex-col gap-3">
                <h4
                  className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text-tertiary)]"
                  style={{
                    fontFamily:
                      'var(--font-geist-mono), ui-monospace, monospace',
                  }}
                >
                  {col.label}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13px] text-[var(--text-secondary)] transition-colors duration-[140ms] hover:text-[var(--text-primary)]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t border-[var(--border-hairline)] pt-6 text-[11px] tracking-[0.04em] text-[var(--text-quiet)] sm:flex-row sm:items-center sm:justify-between"
          style={{
            fontFamily:
              'var(--font-geist-mono), ui-monospace, monospace',
          }}
        >
          <span>© {year} theVvowBooks · Made with care</span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors duration-[140ms] hover:text-[var(--text-primary)]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors duration-[140ms] hover:text-[var(--text-primary)]"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
