import type { CSSProperties, ReactNode } from 'react';

type Props = {
  id?: string;
  children: ReactNode;
  variant?: 'primary' | 'soft' | 'dark';
  fullBleed?: boolean;
  backgroundImage?: string;
};

export function Section({
  id,
  children,
  variant = 'primary',
  fullBleed = false,
  backgroundImage,
}: Props) {
  const bg: CSSProperties =
    variant === 'dark'
      ? { background: 'var(--ink)', color: '#FAF7F2' }
      : variant === 'soft'
        ? { background: 'var(--bg-soft)' }
        : { background: 'var(--bg-primary)' };

  const bgImage: CSSProperties = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <section
      id={id}
      style={{
        ...bg,
        ...bgImage,
        paddingBlock: fullBleed ? 0 : 'var(--section-pad-y)',
        paddingInline: fullBleed ? 0 : 'var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: fullBleed ? 'none' : 'var(--container-max)',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </section>
  );
}
