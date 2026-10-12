type Props = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

/** The heading block every inner page opens with. */
export function PageIntro({ eyebrow, title, children }: Props) {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 pb-8 pt-6 sm:px-6">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-ember">{eyebrow}</p>}
      <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {children && <div className="mt-4 max-w-2xl text-lg text-muted">{children}</div>}
    </header>
  );
}
