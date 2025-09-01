const express = require('express');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const customersRoutes = require('./routes/customers');
const paymentsRoutes = require('./routes/payments');

const app = express();

// Middleware pour gérer le JSON
app.use(express.json());

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/payments', paymentsRoutes);

module.exports = app;
