'use client';

import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SIGN_IN_URL, SIGN_UP_URL } from '@/lib/config';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 32);
  });

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: 'var(--surface)',
        borderBottom: scrolled
          ? '1px solid var(--border-hairline)'
          : '1px solid transparent',
        transition: 'border-color 200ms var(--ease-notion)',
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[var(--text-primary)] text-[var(--surface)] text-[14px] font-semibold"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              V
            </div>
            <span className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
              the
              <span
                style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 500,
                }}
              >
                Vow
              </span>
              Books
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[8px] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-tertiary)] transition-colors duration-[140ms] ease-[var(--ease-notion)] hover:bg-[var(--surface-subtle)] hover:text-[var(--text-primary)]"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button href={SIGN_IN_URL} variant="ghost" className="h-10 px-4">
              Sign in
            </Button>
            <Button href={SIGN_UP_URL} variant="primary" className="h-10 px-4">
              Get started
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] md:hidden"
          >
            {mobileOpen ? (
              <X size={20} weight="regular" />
            ) : (
              <List size={20} weight="regular" />
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 28,
            mass: 0.9,
          }}
          className="border-t border-[var(--border-hairline)] bg-[var(--surface)] md:hidden"
        >
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[8px] px-3 py-3 text-[14px] font-medium text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 pt-2">
                <Button href={SIGN_IN_URL} variant="ghost">
                  Sign in
                </Button>
                <Button href={SIGN_UP_URL} variant="primary">
                  Get started
                </Button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </motion.header>
  );
}
