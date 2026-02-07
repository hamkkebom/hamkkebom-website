interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {badge && (
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {badge}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
