'use client';

import { motion } from 'framer-motion';
import { DashboardMockup } from '@/components/mockups/DashboardMockup';
import { TimesheetMockup } from '@/components/mockups/TimesheetMockup';
import { InvoiceToastMockup } from '@/components/mockups/InvoiceToastMockup';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.9 };

export function HeroMockupStack() {
  return (
    <div className="relative">
      {/* Desktop: layered rotated stack with annotations */}
      <div className="relative hidden h-[560px] w-full lg:block">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.25 }}
          className="absolute left-0 top-8 z-10 w-[460px] origin-top-left"
          style={{ rotate: '-2.5deg' }}
        >
          <DashboardMockup compact />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.4 }}
          className="absolute right-[-40px] top-[180px] z-10 w-[360px]"
          style={{ rotate: '2deg' }}
        >
          <TimesheetMockup compact />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.55 }}
          className="absolute right-[60px] top-0 z-10 w-[240px]"
          style={{ rotate: '-1deg' }}
        >
          <InvoiceToastMockup />
        </motion.div>

        {/* Annotations sit on top of cards with a cream pill background */}
        <AnnotationLayer />
      </div>

      {/* Mobile / tablet: vertical stack, no rotation, no annotations */}
      <div className="flex flex-col gap-4 lg:hidden">
        <DashboardMockup compact />
        <TimesheetMockup compact />
        <InvoiceToastMockup className="self-end max-w-[280px]" />
      </div>
    </div>
  );
}

type AnnotationProps = {
  label: string;
  containerClass: string;
  svgClass?: string;
  svgProps: { width: number; height: number };
  path: string;
  dot: { cx: number; cy: number };
  side: 'left' | 'right';
  delay: number;
};

function Annotation({
  label,
  containerClass,
  svgClass = '',
  svgProps,
  path,
  dot,
  side,
  delay,
}: AnnotationProps) {
  const pill = (
    <span
      className="whitespace-nowrap rounded-full border border-[var(--border-hairline)] bg-[var(--surface)] px-2.5 py-1 text-[13px] italic text-[var(--text-secondary)] shadow-[0_2px_6px_-2px_rgba(11,11,12,0.08)]"
      style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
    >
      {label}
    </span>
  );
  const svg = (
    <svg
      className={`pointer-events-none ${svgClass}`}
      width={svgProps.width}
      height={svgProps.height}
      viewBox={`0 0 ${svgProps.width} ${svgProps.height}`}
      fill="none"
      aria-hidden
    >
      <path
        d={path}
        stroke="var(--text-tertiary)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={dot.cx} cy={dot.cy} r="2.25" fill="var(--text-tertiary)" />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-30 flex items-center ${containerClass}`}
    >
      {side === 'left' ? (
        <>
          {pill}
          {svg}
        </>
      ) : (
        <>
          {svg}
          {pill}
        </>
      )}
    </motion.div>
  );
}

function AnnotationLayer() {
  return (
    <>
      {/* "live margin" — pill on the left, gentle arc curving up-right into the dashboard chart */}
      <Annotation
        label="live margin"
        containerClass="left-[-16px] top-[290px]"
        svgClass="-ml-1"
        svgProps={{ width: 110, height: 80 }}
        path="M 0 70 Q 55 70, 100 12"
        dot={{ cx: 100, cy: 12 }}
        side="left"
        delay={0.9}
      />

      {/* "one-click approve" — pill on the right, arc curving down-left into Approve all button */}
      <Annotation
        label="one-click approve"
        containerClass="right-[-24px] top-[130px]"
        svgClass="-mr-1"
        svgProps={{ width: 100, height: 70 }}
        path="M 100 8 Q 50 8, 6 62"
        dot={{ cx: 6, cy: 62 }}
        side="right"
        delay={1.0}
      />

      {/* "auto-numbered" — pill upper-center, arc curving down-right into invoice toast */}
      <Annotation
        label="auto-numbered"
        containerClass="right-[300px] top-[-14px]"
        svgClass="-ml-1"
        svgProps={{ width: 100, height: 70 }}
        path="M 0 12 Q 50 12, 94 62"
        dot={{ cx: 94, cy: 62 }}
        side="left"
        delay={1.1}
      />
    </>
  );
}
