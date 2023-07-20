import { NextApiRequest, NextApiResponse } from "next";
import util from 'util'
import { Verification } from "@/components/utils/regex";
// import { transporter } from "./utils/utils";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "richardhdpersonalmail@gmail.com",
    pass: process.env.MAIL_TOKEN,
  },
});

const sendMailAsync = util.promisify(transporter.sendMail).bind(transporter);

export default async function mailer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { from, message, reason, email } = req.body;

  try {
    const verificationForm = Verification(email, message, from);
    if (typeof verificationForm !== "string" && reason) {
       await sendMailAsync(
          {
            from: ` "${from}" <richardhdpersonalmail@gmail.com>`, // sender address
            to: "<richardhdjob@gmail.com>", // list of receivers
            subject: `${reason}`, // Subject line
            text: `${message}`, // plain text body
            html: `<b>${message}</b> <br/><br/> email: ${email}`, // html body
          }
            );
            res.status(200).send({error:'', message:"Mail Enviado!, Muchas gracias!"})
        
    } else res.status(400).json({error:verificationForm, message:''});
  } catch (error) {
    console.log(error);
  }
}
