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
    <section id="faq" className="py-24 md:py-32 bg-[var(--surface-subtle)]">
      <Container>
        <div className="mx-auto mb-14 max-w-[640px] text-center md:mb-20">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-semibold tracking-[-0.025em] leading-[1.1] text-[var(--text-primary)] text-[28px] md:text-[40px]">
            Questions, answered.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-[14px] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
          {items.map((item, i) => (
            <details
              key={item.q}
              className={`group ${i > 0 ? 'border-t border-[var(--border-hairline)]' : ''}`}
            >
              <summary className="flex items-center justify-between gap-6 px-6 py-5 transition-colors duration-[140ms] ease-[var(--ease-notion)] hover:bg-[var(--surface-subtle)]">
                <span className="text-[15px] font-medium text-[var(--text-primary)]">
                  {item.q}
                </span>
                <span className="faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--text-tertiary)]">
                  <Plus size={16} weight="regular" />
                </span>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-[14px] leading-[1.65] text-[var(--text-tertiary)]">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
