const express = require('express');
const router = express.Router();

// Exemple de route pour passer une commande
router.post('/', (req, res) => {
  // Logique pour créer une commande
  res.json({ message: 'Commande passée' });
});

module.exports = router;