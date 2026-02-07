"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { BUDGET_OPTIONS } from "@/lib/constants";
import { CheckCircle, Loader2, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "문의 접수에 실패했습니다.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "문의 접수에 실패했습니다."
      );
    }
  }

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h1 className="mt-4 text-2xl font-bold">문의가 접수되었습니다</h1>
          <p className="mt-2 text-muted-foreground">
            빠른 시일 내에 담당자가 연락드리겠습니다.
            <br />
            감사합니다.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeader
            badge="문의하기"
            title="무료 상담을 신청하세요"
            description="프로젝트에 대해 알려주시면 전문 컨설턴트가 맞춤 솔루션을 제안해드립니다."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">연락처</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">이메일</p>
                  <p className="text-sm text-muted-foreground">
                    hello@hamkkebom.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">전화</p>
                  <p className="text-sm text-muted-foreground">
                    문의 폼으로 연락처를 남겨주시면
                    <br />
                    전화 상담을 드립니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">영업시간</p>
                  <p className="text-sm text-muted-foreground">
                    평일 09:00 ~ 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">
                      이름 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      {...register("name")}
                      className="mt-1.5"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">
                      이메일 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      {...register("email")}
                      className="mt-1.5"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">전화번호</Label>
                    <Input
                      id="phone"
                      placeholder="010-1234-5678"
                      {...register("phone")}
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">회사명</Label>
                    <Input
                      id="company"
                      placeholder="회사명"
                      {...register("company")}
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label>
                      서비스 유형 <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("serviceType", val as ContactFormData["serviceType"])
                      }
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="서비스를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">영상 제작</SelectItem>
                        <SelectItem value="education">교육</SelectItem>
                        <SelectItem value="marketing">마케팅</SelectItem>
                        <SelectItem value="general">일반 문의</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceType && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.serviceType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label>예산 범위</Label>
                    <Select
                      onValueChange={(val) => setValue("budget", val)}
                    >
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="예산을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">
                    메시지 <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="프로젝트에 대해 간단히 설명해주세요..."
                    rows={5}
                    {...register("message")}
                    className="mt-1.5"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-destructive">{serverError}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      접수 중...
                    </>
                  ) : (
                    "무료 상담 신청"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
