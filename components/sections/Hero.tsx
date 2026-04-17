'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Flower, FlowerLotus, FlowerTulip } from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SIGN_IN_URL, SIGN_UP_URL } from '@/lib/config';
import { HeroMockupStack } from './HeroMockupStack';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.9 };

export function Hero() {
  return (
    <section
      id="top"
      className="light-orbs noise-overlay relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32"
    >
      {/* Dotgrid background, masked */}
      <div className="bg-dotgrid pointer-events-none absolute inset-0 z-0" aria-hidden />

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left column — content */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              className="flex flex-col lg:col-span-7"
            >
              <h1 className="t-display max-w-[720px]">
                Run
                <motion.span
                  aria-hidden
                  className="mx-2 inline-block align-middle text-[var(--accent-base)]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                >
                  <Flower size={34} weight="duotone" />
                </motion.span>
                your staffing
                <motion.span
                  aria-hidden
                  className="mx-2 inline-block align-middle text-[var(--accent-hover)]"
                  animate={{ y: [0, -4, 0], rotate: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FlowerTulip size={32} weight="duotone" />
                </motion.span>
                business{' '}
                <em>
                  with
                  <motion.span
                    aria-hidden
                    className="mx-2 inline-block align-middle text-[var(--accent-base)]"
                    animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <FlowerLotus size={32} weight="duotone" />
                  </motion.span>
                  confidence.
                </em>
              </h1>

              <hr className="rule mt-7 w-[56px]" />

              <p className="t-lead mt-7 max-w-[520px]">
                Consultants, timesheets, and invoices in one calm workspace.
                Approve hours, auto-generate invoices, and watch margin in real
                time — without the spreadsheet sprawl.
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

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span
                  className="inline-flex items-center gap-1.5 text-[12px] text-[var(--text-tertiary)]"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-base)]" />
                  No credit card
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[12px] text-[var(--text-tertiary)]"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-base)]" />
                  14-day trial
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[12px] text-[var(--text-tertiary)]"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-base)]" />
                  Cancel anytime
                </span>
              </div>
            </motion.div>

            {/* Right column — layered product mockups */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...spring, delay: 0.18 }}
              className="relative lg:col-span-5 lg:-mr-[80px] xl:-mr-[120px]"
            >
              <HeroMockupStack />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
