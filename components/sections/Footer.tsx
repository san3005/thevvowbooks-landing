import { Container } from '@/components/ui/Container';

const linkColumns = [
  {
    label: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: 'mailto:hello@thevowbooks.com' },
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
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--surface)] py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_2fr]">
          <div className="flex items-start gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[var(--text-primary)] text-[14px] font-semibold text-[var(--surface)]"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              V
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                the
                <span
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontStyle: 'italic',
                    fontWeight: 500,
                  }}
                >
                  Vow
                </span>
                Books
              </span>
              <span
                className="mt-2 max-w-[280px] italic text-[14px] leading-[1.5] text-[var(--text-tertiary)]"
                style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
              >
                Staffing operations, reimagined for lean teams.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((col) => (
              <div key={col.label} className="flex flex-col gap-3.5">
                <h4 className="t-meta">{col.label}</h4>
                <ul className="flex flex-col gap-2.5">
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

        <hr className="rule-double mt-12" />

        <div className="mt-5 flex flex-col gap-3 text-[11px] tracking-[0.04em] text-[var(--text-quiet)] sm:flex-row sm:items-center sm:justify-between">
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
            }}
          >
            © {year} theVowBooks · Made with care
          </span>
          <div
            className="flex items-center gap-4"
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
            }}
          >
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
