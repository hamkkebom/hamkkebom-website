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
      <section className="py-32">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-light text-brand-600">
            <CheckCircle className="h-10 w-10" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-ink-900">
            문의가 접수되었습니다
          </h1>
          <p className="mt-4 text-ink-500 leading-relaxed">
            빠른 시일 내에 담당자가 연락드리겠습니다.
            <br />
            감사합니다.
          </p>
          <Button
            asChild
            className="mt-8 rounded-full bg-brand-500 hover:bg-brand-600 px-8"
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
      <section className="relative bg-ink-900 py-28 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 via-transparent to-ink-900/80" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">
              문의하기
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
              무료 상담을 신청하세요
            </h1>
            <p className="mt-4 text-lg text-ink-300 leading-relaxed">
              프로젝트에 대해 알려주시면 전문 컨설턴트가 맞춤 솔루션을 제안해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-ink-900">연락처 정보</h2>
                <p className="mt-2 text-ink-500">
                  편하신 방법으로 문의해주세요. 최대한 빠르게 답변드리겠습니다.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">이메일</p>
                    <p className="mt-1 text-sm text-ink-500">
                      hello@hamkkebom.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-600 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">전화</p>
                    <p className="mt-1 text-sm text-ink-500">
                      문의 폼으로 연락처를 남겨주시면<br />전화 상담을 드립니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-600 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">영업시간</p>
                    <p className="mt-1 text-sm text-ink-500">
                      평일 09:00 ~ 18:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-600 shrink-0">
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
            <div className="lg:col-span-3 bg-hanji rounded-2xl p-8 sm:p-10">
              <h3 className="text-xl font-bold text-ink-900 mb-6">프로젝트 문의</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-ink-700">
                      이름 <span className="text-seal-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      {...register("name")}
                      className="mt-1.5 bg-white border-ink-200 focus:border-brand-500 focus:ring-brand-500"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-seal-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-ink-700">
                      이메일 <span className="text-seal-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      {...register("email")}
                      className="mt-1.5 bg-white border-ink-200 focus:border-brand-500 focus:ring-brand-500"
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
                    <Label htmlFor="phone" className="text-ink-700">전화번호</Label>
                    <Input
                      id="phone"
                      placeholder="010-1234-5678"
                      {...register("phone")}
                      className="mt-1.5 bg-white border-ink-200 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-ink-700">회사명</Label>
                    <Input
                      id="company"
                      placeholder="회사명"
                      {...register("company")}
                      className="mt-1.5 bg-white border-ink-200 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label className="text-ink-700">
                      서비스 유형 <span className="text-seal-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("serviceType", val as ContactFormData["serviceType"])
                      }
                    >
                      <SelectTrigger className="mt-1.5 bg-white border-ink-200">
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
                    <Label className="text-ink-700">예산 범위</Label>
                    <Select
                      onValueChange={(val) => setValue("budget", val)}
                    >
                      <SelectTrigger className="mt-1.5 bg-white border-ink-200">
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
                  <Label htmlFor="message" className="text-ink-700">
                    메시지 <span className="text-seal-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="프로젝트에 대해 간단히 설명해주세요..."
                    rows={5}
                    {...register("message")}
                    className="mt-1.5 bg-white border-ink-200 focus:border-brand-500 focus:ring-brand-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-seal-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-seal-500">{serverError}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-all duration-300"
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
