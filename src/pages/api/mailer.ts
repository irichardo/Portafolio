import { NextApiRequest, NextApiResponse } from "next";
// import { transporter } from "./utils/utils";
const nodemailer = require('nodemailer');

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'richardhdpersonalmail@gmail.com',
      pass: process.env.MAIL_TOKEN
    }
  });

export default async function mailer(req:NextApiRequest,res:NextApiResponse){
  const { from , message, reason, email} = req.body

  try{
    // if(from && message && reason && email){
    // await 
    transporter.sendMail({
      from: ` "${from}" <richardhdpersonalmail@gmail.com>`, // sender address
      to: "<richardhdjob@gmail.com>", // list of receivers
      subject: `${reason}`, // Subject line
      text: `${message}`, // plain text body
      html: `<b>${message}</b> <br/><br/> email: ${email}`, // html body
    },(err:any,info:any)=>{
        if(err){ console.log(err);
        res.send("error" + JSON.stringify(err))}
        else{
            console.log("Enviado");
            res.send("Enviado")
        }
    });
    // res.send('Mail Enviado!, Muchas gracias!')
//    }
//    else throw new Error;
  }
  catch(error){
    res.send('Faltan Datos')
  }
}