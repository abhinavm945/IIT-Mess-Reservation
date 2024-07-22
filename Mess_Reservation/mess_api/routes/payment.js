const express = require('express');
const router = express.Router();
const paymentGateway = require('../config/paymentGateway');

router.post('/', (req, res) => {
  const { amount, paymentMethod } = req.body;
  paymentGateway.chargeCard(amount, paymentMethod, (err, confirmation) => {
    if (err) {
      res.status(400).send({ message: 'Error processing payment' });
    } else {
      res.send({ confirmation });
    }
  });
});

module.exports = router;