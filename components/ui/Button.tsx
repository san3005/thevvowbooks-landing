import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'invert';

const base =
  'inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[10px] text-[14px] font-semibold transition-colors duration-[140ms] ease-[var(--ease-notion)] btn-press whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--accent-base)] text-[var(--accent-on)] hover:bg-[var(--accent-hover)] shadow-[var(--shadow-md)]',
  ghost:
    'bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] border border-[var(--border-hairline)]',
  invert:
    'bg-white text-[#0B0B0C] hover:bg-white/90 shadow-[var(--shadow-md)]',
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsAnchor | ButtonAsButton) {
  const { variant = 'primary', className = '', children, ...rest } = props;
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
