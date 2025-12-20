import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const user = await req.json();

    // 👇 ADD msg HERE
    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: "Yeni Namizəd",
      text: `
Name: ${user.name}
DOB: ${user.dob}
BurthPlace:${user.burthplace}
Location:${user.location}
Citizenship: ${user.citizen}
Education: ${user.education}
Occupation: ${user.occupation}
Public Activity: ${user.pactivity}
Contact: ${user.contact}
Membership: ${user.membership}
Signature: ${user.signature}
Date: ${user.date}
      `,
      html: `
        <h2>Namizədin anket ərizəsi</h2>
        <ul>
          <li><strong>Ad, soyad, ata adı:</strong> ${user.name}</li>
          <li><strong>Doğum tarixi:</strong> ${user.dob}</li>
          <li><strong>Doğum yeri:</strong> ${user.burthplace}</li>
          <li><strong>Yaşadıgı ölkə:</strong> ${user.burthplace}</li>
          <li><strong>Vətəndaşlıq:</strong> ${user.citizen}</li>
          <li><strong>Təhsil:</strong> ${user.education}</li>
          <li><strong>İxtisas/peşə:</strong> ${user.occupation}</li>
          <li><strong>İş və ictimai fəaliyyət təcrübəsi:</strong> ${user.pactivity}</li>
          <li><strong>Əlaqə məlumatları (telefon, e-poçt):</strong> ${user.contact}</li>
          <li><strong>Üzv olduğu ictimai-siyasi təşkilatlar (əgər varsa):</strong> ${user.membership}</li>
          <li><strong>Namizədin imzası:</strong> ${user.signature}</li>
          <li><strong>Tarix:</strong> ${user.date}</li>
        </ul>
      `,
    };

    // 👇 SEND EMAIL HERE
    await sgMail.send(msg);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("SendGrid error:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
