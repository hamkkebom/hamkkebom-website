interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {badge && (
        <span className="inline-block text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">
          {badge}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl text-ink-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-500 leading-relaxed text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
