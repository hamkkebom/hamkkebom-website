import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "AI로 사업을 한 단계 성장시키세요",
  description = "지금 무료 상담을 신청하시면 전문 컨설턴트가 맞춤 솔루션을 제안해드립니다.",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-primary-foreground/80">{description}</p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-6 font-semibold"
        >
          <Link href="/contact">무료 상담 신청</Link>
        </Button>
      </div>
    </section>
  );
}
