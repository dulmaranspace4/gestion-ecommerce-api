const express = require('express');
const router = express.Router();

// Exemple de route pour obtenir la liste des produits
router.get('/', (req, res) => {
  // Logique pour récupérer les produits
  res.json({ message: 'Liste des produits' });
});

module.exports = router;