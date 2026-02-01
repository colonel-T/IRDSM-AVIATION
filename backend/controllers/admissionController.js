const fs = require('fs');
const path = require('path');
const mailer = require('../utils/mailer');

const admissionsFile = path.join(__dirname, '../data/admissions.json');

exports.addAdmission = async (req, res) => {
  try {
    const data = req.body;

    // 1️⃣ Sauvegarde dans JSON (pour test)
    let admissions = [];
    if (fs.existsSync(admissionsFile)) {
      admissions = JSON.parse(fs.readFileSync(admissionsFile));
    }
    admissions.push(data);
    fs.writeFileSync(admissionsFile, JSON.stringify(admissions, null, 2));

    // 2️⃣ Envoi mail
    await mailer.sendAdminMail(data);      // To admin
    await mailer.sendCandidateMail(data);  // To candidat

    res.status(200).json({ message: 'Admission reçue avec succès !' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
