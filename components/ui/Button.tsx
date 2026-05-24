import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'solid' | 'ghost';
};

export function Button({ children, variant = 'solid', style, ...rest }: Props) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    borderRadius: 'var(--radius-pill)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    border: '1px solid var(--accent)',
    transition: 'transform 200ms ease, background 200ms ease, color 200ms ease',
  } as const;
  const solid = { background: 'var(--accent)', color: 'var(--bg-primary)' };
  const ghost = { background: 'transparent', color: 'var(--ink)' };
  return (
    <button
      {...rest}
      style={{ ...base, ...(variant === 'solid' ? solid : ghost), ...style }}
    >
      {children}
    </button>
  );
}
