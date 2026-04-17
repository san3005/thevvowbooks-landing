'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Palette, Sparkle, ShieldCheck } from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';
import { TimesheetMockup } from '@/components/mockups/TimesheetMockup';
import { InvoiceMockup } from '@/components/mockups/InvoiceMockup';
import { DashboardMockup } from '@/components/mockups/DashboardMockup';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.9 };

type FigureProps = {
  eyebrow: string;
  title: ReactNode;
  body: string;
  captionBody: string;
  mockup: ReactNode;
  reverse?: boolean;
  delay?: number;
};

function FeatureFigure({
  eyebrow,
  title,
  body,
  captionBody,
  mockup,
  reverse = false,
  delay = 0,
}: FigureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...spring, delay }}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12"
    >
      <figure
        className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
      >
        <div>{mockup}</div>
        <figcaption
          className="mt-4 border-t border-[var(--border-hairline)] pt-3 text-[13px] italic text-[var(--text-tertiary)]"
          style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
          }}
        >
          {captionBody}
        </figcaption>
      </figure>

      <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
        <span className="section-num">{eyebrow}</span>
        <h3 className="t-h2 mt-4 max-w-[440px]" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
          {title}
        </h3>
        <p className="t-body mt-4 max-w-[420px] text-[var(--text-tertiary)]">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="noise-overlay relative py-24 md:py-32"
      style={{ backgroundColor: 'var(--surface-cream)' }}
    >
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={spring}
          className="max-w-[720px]"
        >
          <span className="section-num">Capabilities</span>
          <hr className="rule-double mt-4 w-[80px]" />
          <h2 className="t-h2 mt-6">
            What&apos;s in <em>the workspace.</em>
          </h2>
          <p className="t-lead mt-5 max-w-[560px]">
            Six tools, one workspace. Built for lean teams that need to move fast
            without losing the thread.
          </p>
        </motion.div>

        {/* Three primary feature figures */}
        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
          <FeatureFigure
            eyebrow="Timesheet capture"
            title={
              <>
                Submit, approve, <em>lock.</em>
              </>
            }
            body="Submit, approve, and lock timesheets in one flow. No more email threads, no more copy-paste from spreadsheets. Weeks close themselves."
            captionBody="Weekly review, with one-click approval and state-badge per consultant."
            mockup={<TimesheetMockup />}
            delay={0.05}
          />

          <FeatureFigure
            eyebrow="Invoice automation"
            title={
              <>
                Hours to invoice, <em>in one click.</em>
              </>
            }
            body="Auto-generate invoices from approved hours. Send, track, and reconcile — the numbers always tie back to the timesheet they came from."
            captionBody="Invoice INV-2025-0184, generated from Week 16 approved hours."
            mockup={<InvoiceMockup />}
            reverse
            delay={0.1}
          />

          <FeatureFigure
            eyebrow="Multi-tenant by design"
            title={
              <>
                One platform, <em>many teams.</em>
              </>
            }
            body="Org-scoped data with row-level security. One login can hold seats in many organizations, and each one keeps its data fully isolated in the database."
            captionBody="Workspace switcher and live margin, rendered per-org with row-level security."
            mockup={<DashboardMockup />}
            delay={0.15}
          />
        </div>

        {/* Secondary features */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-4">
            <span className="section-num">Also included</span>
            <hr className="rule flex-1" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
            <Marginalia
              ornament={<HalftoneOrnament />}
              icon={Palette}
              title={
                <>
                  White-<em>label.</em>
                </>
              }
              body="Brand the consultant portal in your colors. Logo, palette, custom domain — all on paid plans."
              rightDivider
            />
            <Marginalia
              ornament={<TopoOrnament />}
              icon={Sparkle}
              title={
                <>
                  AI <em>assist.</em>
                </>
              }
              body="Drafts, weekly summaries, and anomaly detection built in. Quietly helpful, never in your face."
              rightDivider
            />
            <Marginalia
              ornament={<BracketOrnament />}
              icon={ShieldCheck}
              title={
                <>
                  Audit <em>trail.</em>
                </>
              }
              body="Every change logged to an immutable audit trail, exportable for SOC 2. Trust by default."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

type MarginaliaProps = {
  ornament: ReactNode;
  icon: typeof Palette;
  title: ReactNode;
  body: string;
  rightDivider?: boolean;
};

function Marginalia({
  ornament,
  title,
  body,
  rightDivider = false,
}: MarginaliaProps) {
  return (
    <div
      className={`flex flex-col px-0 md:px-6 ${
        rightDivider ? 'md:border-r md:border-[var(--border-hairline)]' : ''
      }`}
    >
      <div className="h-[60px] text-[var(--text-tertiary)]">{ornament}</div>
      <h4 className="t-h3 mt-5">{title}</h4>
      <p className="t-body mt-3 max-w-[280px] text-[var(--text-tertiary)]">{body}</p>
    </div>
  );
}

function HalftoneOrnament() {
  const cols = 10;
  const rows = 4;
  return (
    <svg viewBox={`0 0 ${cols * 8} ${rows * 8}`} className="h-full w-[80px]" aria-hidden>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => {
          const size = 1 + (c / cols) * 2.6;
          return (
            <circle
              key={`${r}-${c}`}
              cx={c * 8 + 4}
              cy={r * 8 + 4}
              r={size}
              fill="currentColor"
              opacity={0.6}
            />
          );
        })
      )}
    </svg>
  );
}

function TopoOrnament() {
  return (
    <svg viewBox="0 0 120 40" className="h-full w-[120px]" aria-hidden fill="none">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M 0 ${8 + i * 6} Q 30 ${2 + i * 6}, 60 ${8 + i * 6} T 120 ${8 + i * 6}`}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity={0.6 - i * 0.08}
        />
      ))}
    </svg>
  );
}

function BracketOrnament() {
  return (
    <svg viewBox="0 0 100 40" className="h-full w-[100px]" aria-hidden fill="none">
      <path
        d="M 8 4 L 2 4 L 2 36 L 8 36 M 92 4 L 98 4 L 98 36 L 92 36"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 18 20 L 82 20"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        opacity="0.7"
      />
      <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
