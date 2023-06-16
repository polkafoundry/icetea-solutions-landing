import { itsEmail } from "@/constants";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req: any, res: any) {
  const {
    typeOfConsultation,
    firstName,
    lastName,
    phoneNumber,
    email,
    role,
    company,
    message,
  } = req?.body;

  const msg = {
    to: itsEmail,
    from: "tung.do@icetea.io",
    subject: `${firstName} ${lastName} - ${typeOfConsultation}`,
    text: "Message from Website Contact Form",
    html: `<table style="border-collapse: collapse; width: 100%;">
      <tr>
        <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Field</th>
        <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Content</th>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Type Of Consultation</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${typeOfConsultation}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">First Name</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${firstName}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Last Name</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${lastName}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Phone Number</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${phoneNumber}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Email</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Role</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${role}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Company</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${company}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Message</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${message}</td>
      </tr>
    </table>`,
  };
  try {
    await sgMail?.send(msg);
    res?.json({ success: true });
  } catch (e) {
    res?.json({ error: e });
  }
}
