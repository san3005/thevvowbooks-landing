'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SIGN_IN_URL, SIGN_UP_URL } from '@/lib/config';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.9 };

const bars = [38, 52, 44, 60, 48, 70, 58, 64, 72, 68, 80, 96];

const consultants = [
  { name: 'Alex Chen', hours: '40h', initial: 'A' },
  { name: 'Priya Sharma', hours: '38h', initial: 'P' },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[60%_40%] lg:gap-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 }}
            className="flex flex-col"
          >
            <span className="eyebrow mb-5">Staffing operations, reimagined</span>
            <h1 className="font-semibold tracking-[-0.025em] leading-[1.05] text-[var(--text-primary)] text-[36px] md:text-[56px]">
              Run your staffing business with confidence.
            </h1>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[1.55] text-[var(--text-tertiary)]">
              Consultants, timesheets, and invoices in one calm workspace. Approve hours,
              auto-generate invoices, and watch margin in real time — without the
              spreadsheet sprawl.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={SIGN_UP_URL} variant="primary">
                Get started — it&apos;s free
                <ArrowRight size={16} weight="regular" />
              </Button>
              <Button href={SIGN_IN_URL} variant="ghost">
                Sign in
              </Button>
            </div>

            <p
              className="mt-5 text-[12px] tracking-[0.04em] text-[var(--text-quiet)]"
              style={{
                fontFamily:
                  'var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace',
              }}
            >
              No credit card required · 14-day free trial
            </p>
          </motion.div>

          {/* Right column — mesh panel with floating glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.15 }}
            className="relative"
          >
            <div
              className="mesh-backdrop noise-overlay relative h-[460px] w-full overflow-hidden md:h-[520px]"
              style={{ borderRadius: '24px' }}
            >
              {/* Revenue card — top-left, rotated -3deg */}
              <motion.div
                initial={{ opacity: 0, y: 18, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ ...spring, delay: 0.35 }}
                whileHover={{ y: -4, scale: 1.03, rotate: -2 }}
                className="glass-card absolute left-5 top-6 z-10 w-[230px] p-4"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] tracking-[0.08em] uppercase text-white/55"
                    style={{
                      fontFamily:
                        'var(--font-geist-mono), ui-monospace, monospace',
                    }}
                  >
                    Revenue
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-[2px] text-[10px] font-semibold text-emerald-300">
                    +12%
                  </span>
                </div>
                <div className="mt-2 text-[24px] font-semibold tracking-[-0.025em] text-white tabular-nums">
                  $284K
                </div>
                <div className="mt-3 flex h-[42px] items-end gap-[3px]">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-[2px] ${
                        i === bars.length - 1
                          ? 'bg-teal-400'
                          : 'bg-white/20'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Invoice approved pill — top-right */}
              <motion.div
                initial={{ opacity: 0, y: 18, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ ...spring, delay: 0.5 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-card absolute right-4 top-12 z-20 flex items-center gap-2.5 px-3.5 py-2.5"
              >
                <CheckCircle size={18} weight="fill" className="text-emerald-400" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[12px] font-semibold text-white">
                    Invoice approved
                  </span>
                  <span className="text-[11px] text-white/60 tabular-nums">
                    $12,450 · just now
                  </span>
                </div>
              </motion.div>

              {/* Timesheet card — center-right, rotated 3deg */}
              <motion.div
                initial={{ opacity: 0, y: 18, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ ...spring, delay: 0.65 }}
                whileHover={{ y: -4, scale: 1.03, rotate: 2 }}
                className="glass-card absolute right-6 bottom-10 z-10 w-[270px] p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="text-[10px] tracking-[0.08em] uppercase text-white/55"
                    style={{
                      fontFamily:
                        'var(--font-geist-mono), ui-monospace, monospace',
                    }}
                  >
                    Timesheets
                  </span>
                  <span className="text-[10px] text-white/40">Week 16</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {consultants.map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">
                          {c.initial}
                        </div>
                        <div className="flex flex-col leading-tight">
                          <span className="text-[12px] font-medium text-white">
                            {c.name}
                          </span>
                          <span className="text-[10px] text-white/50 tabular-nums">
                            {c.hours}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-[2px] text-[10px] font-semibold text-emerald-300">
                        Approved
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
