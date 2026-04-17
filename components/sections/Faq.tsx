'use client';

import { Plus } from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';

type FaqItem = {
  q: string;
  a: string;
};

const items: FaqItem[] = [
  {
    q: 'How much does it cost?',
    a: 'Pricing scales with active consultants on your roster. The free tier covers small teams getting started, and paid plans unlock white-label and advanced reporting. Reach out for a quote — no surprises at renewal.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every new workspace gets 14 days on the full plan, no card required. After that you can downgrade to the free tier or pick a paid plan that fits your team size.',
  },
  {
    q: 'Can I export my data?',
    a: 'Always. Every list — consultants, timesheets, invoices, audit logs — exports to CSV or Excel from the same screen you read it on. Your data is never locked in.',
  },
  {
    q: 'Is white-label available?',
    a: 'On paid plans. You can set brand color, logo, and a custom domain so the consultant portal shows up under your name, not ours.',
  },
  {
    q: 'Do you support multiple orgs?',
    a: 'Yes. One login can hold seats in many organizations, and each org keeps its data fully isolated via row-level security in the database.',
  },
  {
    q: 'How do you handle security?',
    a: 'Every mutation is logged to an immutable audit trail. We use Supabase row-level security for tenant isolation and are working toward SOC 2 Type II. Audit log export is available on every plan.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-[var(--surface-subtle)] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Sticky aside */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <span className="section-num">FAQ</span>
              <hr className="rule-double mt-4 w-[80px]" />
              <h2 className="t-h2 mt-6">
                Questions, <em>answered.</em>
              </h2>
              <p className="t-body mt-6 max-w-[380px] text-[var(--text-tertiary)]">
                The things teams ask us most, before they spin up a workspace.
                Still curious?{' '}
                <a
                  href="mailto:hello@thevowbooks.com"
                  className="underline decoration-[var(--border-default)] underline-offset-4 hover:text-[var(--text-primary)]"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
          </aside>

          {/* Q&A list */}
          <div className="lg:col-span-7">
            <hr className="rule-double mb-2" />
            <ol className="flex flex-col">
              {items.map((item, i) => (
                <li
                  key={item.q}
                  className="border-b border-[var(--border-hairline)] last:border-b-0"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-start gap-5 py-6">
                      <span
                        className="mt-1.5 shrink-0 text-[12px] tabular-nums text-[var(--text-quiet)]"
                        style={{
                          fontFamily: 'var(--font-geist-mono), monospace',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="flex-1 text-[20px] leading-[1.35] tracking-[-0.01em] text-[var(--ink)] md:text-[22px]"
                        style={{
                          fontFamily: 'var(--font-fraunces), Georgia, serif',
                          fontStyle: 'italic',
                          fontWeight: 450,
                        }}
                      >
                        {item.q}
                      </span>
                      <span className="faq-icon mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border-default)] text-[var(--text-tertiary)]">
                        <Plus size={12} weight="regular" />
                      </span>
                    </summary>
                    <div className="pb-6 pl-[calc(12px+20px)] pr-10">
                      <p className="t-body max-w-[56ch] text-[var(--text-secondary)]">
                        {item.a}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ol>
            <hr className="rule-double mt-2" />
          </div>
        </div>
      </Container>
    </section>
  );
}
