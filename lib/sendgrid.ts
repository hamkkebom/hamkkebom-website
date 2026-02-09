import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface ContactEmailParams {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  budget?: string;
  message: string;
}

export async function sendContactNotification(params: ContactEmailParams) {
  const serviceLabels: Record<string, string> = {
    video: "영상 제작",
    education: "교육",
    marketing: "마케팅",
    general: "일반 문의",
  };

  const msg = {
    to: process.env.NOTIFICATION_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `[함께봄] 새 문의: ${serviceLabels[params.serviceType] || params.serviceType}`,
    html: `
      <h2>새로운 문의가 접수되었습니다</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이름</td><td style="padding:8px;border:1px solid #ddd;">${params.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${params.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">전화</td><td style="padding:8px;border:1px solid #ddd;">${params.phone || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">회사</td><td style="padding:8px;border:1px solid #ddd;">${params.company || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">서비스</td><td style="padding:8px;border:1px solid #ddd;">${serviceLabels[params.serviceType] || params.serviceType}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">예산</td><td style="padding:8px;border:1px solid #ddd;">${params.budget || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">메시지</td><td style="padding:8px;border:1px solid #ddd;">${params.message}</td></tr>
      </table>
    `,
  };

  // Check if API key is present. If not, log to console for dev/demo purposes.
  if (!process.env.SENDGRID_API_KEY || process.env.SENDGRID_API_KEY.startsWith("placeholder")) {
    console.log("--- [MOCK EMAIL SEND] ---");
    console.log(`To: ${msg.to}`);
    console.log(`Subject: ${msg.subject}`);
    console.log(`Body: ${params.message}`);
    console.log("-------------------------");
    return;
  }

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error("SendGrid error:", error);
    // Don't throw, just log.
  }
}
