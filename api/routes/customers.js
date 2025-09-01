const express = require('express');
const router = express.Router();

// Exemple de route pour l'inscription d'un client
router.post('/register', (req, res) => {
  // Logique pour inscrire un client
  res.json({ message: 'Client inscrit' });
});

module.exports = router;