'use client';

import { motion } from 'framer-motion';
import {
  ClipboardText,
  Receipt,
  Buildings,
  Palette,
  Sparkle,
  ShieldCheck,
  type Icon,
} from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';

type Feature = {
  icon: Icon;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: ClipboardText,
    title: 'Timesheet capture',
    body: 'Submit, approve, and lock timesheets in one flow. No more email threads.',
  },
  {
    icon: Receipt,
    title: 'Invoice automation',
    body: 'Auto-generate invoices from approved hours. Send, track, and reconcile.',
  },
  {
    icon: Buildings,
    title: 'Multi-tenant',
    body: 'Org-scoped data with row-level security. One platform, many teams.',
  },
  {
    icon: Palette,
    title: 'White-label',
    body: 'Brand the consultant portal in your colors. Logo, palette, custom domain.',
  },
  {
    icon: Sparkle,
    title: 'AI assist',
    body: 'Drafts, summaries, and anomaly detection built in. Quietly helpful.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit trail',
    body: 'Every change logged, exportable for SOC 2. Trust by default.',
  },
];

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.9 };

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto mb-14 max-w-[640px] text-center md:mb-20">
          <span className="eyebrow">Features</span>
          <h2 className="mt-4 font-semibold tracking-[-0.025em] leading-[1.1] text-[var(--text-primary)] text-[28px] md:text-[40px]">
            Everything you need to run staffing ops.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.55] text-[var(--text-tertiary)]">
            Six tools, one workspace. Built for lean teams that need to move fast without
            losing the thread.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ ...spring, delay: i * 0.06 }}
                className="rounded-[14px] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)]"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-[12px]"
                  style={{
                    background: 'var(--accent-quiet)',
                    color: 'var(--accent-base)',
                  }}
                >
                  <Icon size={28} weight="regular" />
                </div>
                <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-[var(--text-tertiary)]">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
