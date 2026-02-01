const express = require('express');
const router = express.Router();
const { sendAdminMail, sendCandidateMail } = require('../mail');

router.post('/submit', async (req, res) => {
  const data = req.body;

  // Ajouter la date de création côté backend (plus fiable)
  data.dateCreation = new Date().toLocaleString();

  try {
    // Envoi mail candidat
    await sendCandidateMail(data);

    // Envoi mail admin avec PDF
    await sendAdminMail(data);

    res.status(200).json({ message: '✅ Formulaire soumis et mails envoyés' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '❌ Erreur lors de l’envoi des mails' });
  }
});

module.exports = router;
