require('dotenv').config();
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Crée le PDF du formulaire
function createAdmissionPDF(data) {
  const filePath = path.join(__dirname, `Admission_${data.fname}_${Date.now()}.pdf`);
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text('Formulaire d’Admission IFP Polytechnique', { align: 'center' });
  doc.moveDown();

  for (const [key, value] of Object.entries(data)) {
    doc.fontSize(12).text(`${key}: ${value}`);
  }

  doc.end();
  return filePath;
}

// Mail candidat premium
exports.sendCandidateMail = async (data) => {
  const pdfLink = `https://tonbackend.com/download/${data.fname}_${Date.now()}.pdf`; // si tu stockes PDF sur cloud

  const mailOptions = {
    from: `"IFP Polytechnique" <${process.env.MAIL_USER}>`,
    to: data.email,
    subject: '🎓 Confirmation de votre admission IFP Polytechnique',
    html: `
    <div style="font-family: Arial, sans-serif; color:#333;">
      <div style="text-align:center; margin-bottom:20px;">
        <img src="cid:logo" alt="IFP Polytechnique" width="150"/>
      </div>
      <h2 style="color:#0D6EFD;">Bonjour ${data.fname},</h2>
      <p>Nous avons bien reçu votre formulaire d’admission pour le programme <strong>${data.program}</strong>.</p>
      <p>Notre équipe vous contactera très prochainement pour la suite du processus.</p>

      <div style="text-align:center; margin:20px 0;">
        <a href="${pdfLink}" style="background-color:#0D6EFD; color:#fff; padding:10px 20px; text-decoration:none; border-radius:5px;">
          Télécharger votre PDF
        </a>
      </div>

      <hr style="border:none; border-top:1px solid #eee; margin:20px 0;">
      <p>Merci de votre confiance.</p>
      <p><em>IFP Polytechnique</em></p>
    </div>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: path.join(__dirname, 'assets/logo.png'),
        cid: 'logo' // permet d’afficher l’image dans le mail
      }
    ]
  };

  return transporter.sendMail(mailOptions);
};

// Mail admin avec PDF en pièce jointe
exports.sendAdminMail = async (data) => {
  const pdfPath = createAdmissionPDF(data);

  const mailOptions = {
    from: `"IFP Polytechnique" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `📌 Nouvelle admission : ${data.fname}`,
    html: `
      <h3>Nouvelle admission reçue</h3>
      <ul>
        <li><strong>Programme :</strong> ${data.program}</li>
        <li><strong>Concours :</strong> ${data.concours}</li>
        <li><strong>Nom :</strong> ${data.fname}</li>
        <li><strong>Email :</strong> ${data.email}</li>
        <li><strong>Téléphone :</strong> ${data.phone}</li>
        <li><strong>Ville :</strong> ${data.ville}</li>
        <li><strong>Sexe :</strong> ${data.sexe}</li>
        <li><strong>Âge :</strong> ${data.age}</li>
        <li><strong>Diplôme :</strong> ${data.diplome}</li>
        <li><strong>Centre :</strong> ${data.center}</li>
        <li><strong>Consentement CF :</strong> ${data.cF ? 'Oui' : 'Non'}</li>
        <li><strong>Date de soumission :</strong> ${data.dateCreation}</li>
      </ul>
      <hr>
      <p>PDF joint avec toutes les informations.</p>
    `,
    attachments: [
      {
        filename: `Admission_${data.fname}.pdf`,
        path: pdfPath
      },
      {
        filename: 'logo.png',
        path: path.join(__dirname, 'assets/logo.png'),
        cid: 'logo'
      }
    ]
  };

  const info = await transporter.sendMail(mailOptions);

  // Supprime le PDF local après envoi
  fs.unlink(pdfPath, (err) => {
    if (err) console.error('Erreur suppression PDF :', err);
  });

  return info;
};
