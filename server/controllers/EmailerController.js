import nodeMailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from "fs";
import path from "path";
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, './emails/template.html');

const source = fs.readFileSync(filePath, 'utf-8').toString();
const template = handlebars.compile(source);


const sendEmail = async (requesters ,subject,html) => {

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


  const options = {
    from: process.env.EMAIL_FROM,
    to: requesters,
    subject,
    html,
  };

  transporter.sendMail(options);
};

const post = async (req,res) => {
  const {generatedGifts} = req.body;

  await Promise.all(generatedGifts.map(async (gift) => {

    const {gifter,receiver} = gift;

    const requesters = gifter.email;
    const subject = `Ducky Secret Santa - Cadeau secret`;
      const replacements = {
        gifter: gifter.name,
        receiver: receiver.name,
    };
    const html = template(replacements);
  
    await sendEmail(requesters,subject,html);
  }));

  res.status(200).send("Emails sent");
  
};


export default {
  post,
} 