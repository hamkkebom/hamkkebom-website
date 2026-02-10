interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <div className="mb-4 inline-flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-50 text-brand-600 text-sm font-semibold tracking-wider">
            {badge}
          </span>
          <span className="mt-3 block w-8 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-seal-500" />
        </div>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-900 leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-ink-400 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
