import { Container } from '@/components/ui/Container';

const phrases = [
  'Timesheets that lock themselves',
  'Invoices auto-generated from hours',
  'Live margin, every day',
  'Multi-tenant by design',
  'Audit-ready, by default',
  'AI that quietly helps',
  'Row-level security',
  'No spreadsheet sprawl',
];

export function LogoMarquee() {
  const track = [...phrases, ...phrases];

  return (
    <section
      aria-label="What you get"
      className="relative border-y border-[var(--border-hairline)] bg-[var(--surface)]"
    >
      <Container>
        <div className="flex items-center gap-6 py-5 md:gap-8">
          <div className="flex shrink-0 items-center gap-2.5">
            <span className="section-num whitespace-nowrap">What you get</span>
          </div>
          <div className="marquee flex-1">
            <div className="marquee-track gap-10 md:gap-14">
              {track.map((phrase, i) => (
                <span
                  key={`${phrase}-${i}`}
                  className="flex shrink-0 items-center gap-3 text-[15px] text-[var(--text-secondary)]"
                >
                  <span
                    className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--accent-base)]/50"
                    aria-hidden
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-fraunces), Georgia, serif',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {phrase}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
