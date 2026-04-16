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
      className="mesh-backdrop noise-overlay relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '480px' }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={spring}
          className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center py-20 text-center"
        >
          <h2 className="font-semibold tracking-[-0.025em] leading-[1.1] text-white text-[32px] md:text-[44px]">
            Ready to run cleaner staffing ops?
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.55] text-white/65">
            Spin up a workspace in under a minute. Invite your team when you&apos;re
            ready — no setup call required.
          </p>
          <div className="mt-8">
            <Button href={SIGN_UP_URL} variant="invert" className="h-12 px-6">
              Start free — no credit card
              <ArrowRight size={16} weight="regular" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
