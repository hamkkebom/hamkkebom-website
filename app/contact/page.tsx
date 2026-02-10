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
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { BUDGET_OPTIONS } from "@/lib/constants";
import { CheckCircle, Loader2, Mail, Phone, Clock, MapPin } from "lucide-react";

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
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-hanji" />
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-seal-500/[0.08] rounded-full blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-lg px-4 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-lg shadow-brand-500/30">
            <CheckCircle className="h-12 w-12" />
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
            문의가 접수되었습니다
          </h1>
          <p className="mt-5 text-ink-500 leading-relaxed text-lg">
            빠른 시일 내에 담당자가 연락드리겠습니다.
            <br />
            감사합니다.
          </p>
          <Button
            asChild
            className="mt-10 rounded-full bg-brand-500 hover:bg-brand-600 px-10 py-3 text-base shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
          >
            <a href="/">홈으로 돌아가기</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-ink-900 to-ink-950" />
        <div className="absolute inset-0 dot-pattern opacity-[0.07]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-seal-500/15 rounded-full blur-[100px]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-brand-400 font-bold tracking-wider uppercase text-sm border border-brand-500/30 rounded-full px-4 py-1.5 bg-brand-500/10 backdrop-blur-sm">
              문의하기
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              무료 상담을 <span className="text-gradient">신청하세요</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
              프로젝트에 대해 알려주시면 전문 컨설턴트가 맞춤 솔루션을 제안해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-hanji to-white">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">연락처 정보</h2>
                <p className="mt-3 text-ink-500 leading-relaxed">
                  편하신 방법으로 문의해주세요. 최대한 빠르게 답변드리겠습니다.
                </p>
              </div>

              <div className="space-y-5">
                <div className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-md shadow-brand-500/20 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">이메일</p>
                    <p className="mt-1 text-sm text-ink-500">
                      hello@hamkkebom.com
                    </p>
                  </div>
                </div>
                <div className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-md shadow-brand-500/20 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">전화</p>
                    <p className="mt-1 text-sm text-ink-500">
                      문의 폼으로 연락처를 남겨주시면<br />전화 상담을 드립니다.
                    </p>
                  </div>
                </div>
                <div className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-md shadow-brand-500/20 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">영업시간</p>
                    <p className="mt-1 text-sm text-ink-500">
                      평일 09:00 ~ 18:00
                    </p>
                  </div>
                </div>
                <div className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-md shadow-brand-500/20 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">오시는 길</p>
                    <p className="mt-1 text-sm text-ink-500">
                      서울특별시 강남구
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 rounded-3xl border border-ink-100 bg-white p-8 sm:p-10 shadow-xl shadow-ink-900/5">
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">프로젝트 문의</h3>
              <p className="mt-2 text-sm text-ink-400 mb-8">
                <span className="text-seal-500">*</span> 표시는 필수 입력 항목입니다.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-ink-700 font-medium">
                      이름 <span className="text-seal-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      {...register("name")}
                      className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-seal-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-ink-700 font-medium">
                      이메일 <span className="text-seal-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      {...register("email")}
                      className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-seal-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="text-ink-700 font-medium">전화번호</Label>
                    <Input
                      id="phone"
                      placeholder="010-1234-5678"
                      {...register("phone")}
                      className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-ink-700 font-medium">회사명</Label>
                    <Input
                      id="company"
                      placeholder="회사명"
                      {...register("company")}
                      className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label className="text-ink-700 font-medium">
                      서비스 유형 <span className="text-seal-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("serviceType", val as ContactFormData["serviceType"])
                      }
                    >
                      <SelectTrigger className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200">
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
                      <p className="mt-1 text-sm text-seal-500">
                        {errors.serviceType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-ink-700 font-medium">예산 범위</Label>
                    <Select
                      onValueChange={(val) => setValue("budget", val)}
                    >
                      <SelectTrigger className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200">
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
                  <Label htmlFor="message" className="text-ink-700 font-medium">
                    메시지 <span className="text-seal-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="프로젝트에 대해 간단히 설명해주세요..."
                    rows={5}
                    {...register("message")}
                    className="mt-2 bg-hanji rounded-xl border-ink-200 focus:border-brand-500 focus:ring-brand-500/20 transition-colors duration-200 resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-seal-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <div className="rounded-xl bg-seal-50 border border-seal-200 p-4">
                    <p className="text-sm text-seal-500">{serverError}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-xl py-3.5 text-base shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
