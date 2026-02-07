import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.enum(["video", "education", "marketing", "general"], {
    message: "서비스 유형을 선택해주세요",
  }),
  budget: z.string().optional(),
  message: z.string().min(10, "최소 10자 이상 입력해주세요"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
