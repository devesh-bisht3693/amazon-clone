const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')("sk_test_51KtpHqSE57d3uIXyNwCKlMZGGZfGI2dR9Gm8OKgvg3B4s2vEmBq5aNkbupYxH1ApWmie8r6dMtmt1UmR0c1YLqP300RI4hOt4U");

//API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API route
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request received for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "INR",
    });
    console.log(paymentIntent);

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
// exports.api = functions.https.onRequest(app)
app.listen(4000, () => console.log("server is running"));