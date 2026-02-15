const db = require('./db');
const { sendCandidateMail, sendAdminMail } = require('./mail');

exports.addAdmission = async (req, res) => {
  try {
    const data = req.body;

    // 1️⃣ Sauvegarde en base
    await db.query(
      `INSERT INTO admissions 
      (program, concours, fname, email, phone, ville, sexe, age, diplome, center, cF, dateCreation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.program,
        data.concours,
        data.fname,
        data.email,
        data.phone,
        data.ville,
        data.sexe,
        data.age,
        data.diplome,
        data.center,
        data.cF,
        data.dateCreation
      ]
    );

    // 2️⃣ Envoi des emails
    await sendCandidateMail(data);
    await sendAdminMail(data);

    res.status(200).json({ message: "Formulaire reçu et enregistré avec succès." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
};
