const express = require('express');
const router = express.Router();

// Exemple de route pour effectuer un paiement
router.post('/', (req, res) => {
  // Logique pour traiter un paiement
  res.json({ message: 'Paiement effectué' });
});

module.exports = router;