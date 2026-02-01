// mail.js
require('dotenv').config(); // Charge les variables depuis .env
const nodemailer = require('nodemailer');

// Création du transporter SMTP Brevo
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST, // smtp-relay.brevo.com
  port: process.env.MAIL_PORT, // 587
  secure: false, // true si port 465
  auth: {
    user: process.env.MAIL_USER, // ton email Brevo
    pass: process.env.MAIL_PASS, // clé SMTP Brevo
  },
});

// Envoi mail à l'admin
exports.sendAdminMail = async (data) => {
  const mailOptions = {
    from: `"Admission Polytechnique" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'Nouvelle admission Polytechnique',
    text: `
Nouvelle admission reçue :

Nom : ${data.fname}
Email : ${data.email}
Téléphone : ${data.phone}

Détails complets :
${JSON.stringify(data, null, 2)}
    `,
  };

  return transporter.sendMail(mailOptions);
};

// Envoi mail au candidat
exports.sendCandidateMail = async (data) => {
  const mailOptions = {
    from: `"IFP Polytechnique" <${process.env.MAIL_USER}>`,
    to: data.email,
    subject: 'Confirmation de réception de votre admission',
    text: `Bonjour ${data.fname},

Nous avons bien reçu votre formulaire d’admission à l’IFP Polytechnique.

Notre équipe vous contactera très prochainement.

Cordialement,
IFP Polytechnique`,
  };

  return transporter.sendMail(mailOptions);
};
