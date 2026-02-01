require('dotenv').config();
const { sendAdminMail, sendCandidateMail } = require('./mail');

const testData = {
  fname: 'Saïd',
  email: 'tonemaildestest@gmail.com',
  phone: '+237123456789',
};

sendCandidateMail(testData)
  .then(() => console.log('✅ Mail candidat envoyé'))
  .catch(err => console.error('❌ Erreur mail candidat :', err));

sendAdminMail(testData)
  .then(() => console.log('✅ Mail admin envoyé'))
  .catch(err => console.error('❌ Erreur mail admin :', err));
