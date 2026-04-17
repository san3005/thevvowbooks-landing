'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SIGN_UP_URL } from '@/lib/config';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.9 };

export function CtaFooter() {
  return (
    <section
      className="light-orbs noise-overlay relative overflow-hidden"
      style={{ backgroundColor: 'var(--surface-cream)', minHeight: '520px' }}
    >
      <div className="bg-dotgrid pointer-events-none absolute inset-0 z-0" aria-hidden />

      <Container>
        <div className="relative z-10 py-24 md:py-28">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={spring}
            className="flex items-center gap-4"
          >
            <span className="section-num">Get started</span>
            <hr className="rule flex-1" />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...spring, delay: 0.05 }}
            className="mt-14 max-w-[1100px]"
          >
            <h2
              className="relative"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontWeight: 400,
                fontSize: 'clamp(48px, 8vw, 120px)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
              }}
            >
              Ready to{' '}
              <em
                style={{
                  fontWeight: 450,
                  fontVariationSettings: '"SOFT" 100, "opsz" 144',
                }}
              >
                ship cleaner
              </em>{' '}
              staffing{' '}
              <span className="relative inline-block">
                <em
                  style={{
                    fontWeight: 450,
                    fontVariationSettings: '"SOFT" 100, "opsz" 144',
                  }}
                >
                  ops?
                </em>
                {/* Hand-drawn underline */}
                <motion.svg
                  viewBox="0 0 220 18"
                  preserveAspectRatio="none"
                  className="absolute left-0 right-0 -bottom-2 h-[14px] w-full"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M 4 10 C 40 4, 90 14, 140 8 S 210 6, 216 10"
                    stroke="var(--accent-base)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.35,
                    }}
                  />
                </motion.svg>
              </span>
            </h2>
          </motion.div>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...spring, delay: 0.15 }}
            className="mt-10 max-w-[460px] italic text-[var(--text-secondary)]"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(18px, 1.6vw, 22px)',
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            Spin up a workspace in under a minute. Invite your team when
            you&apos;re ready — no setup call required.
          </motion.p>

          {/* CTA cluster */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...spring, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Button href={SIGN_UP_URL} variant="primary" className="h-12 px-6">
              Start free — no credit card
              <ArrowRight size={16} weight="regular" />
            </Button>
            <a
              href="mailto:hello@thevowbooks.com"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              Talk to founders
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
