const express = require("express");
const app = express();

// utiliser le middleware cors pour eviter les conflits d'origin
const cors = require("cors");

// pour les fichiers avec des données json
app.use(express.json({ limit: "5mb" }));
app.use(cors());

// pour les fichiers avec variables d'nevironnement .env
require("dotenv").config();

// stripe
const stripe = require('stripe')(`${process.env.SECRET_KEY}`);



// creation du server 
app.post('/api/create-checkout-session', async (req, res) => {
    // recuperer le tableau de produits achetés
    // console.log(req.body);
    const { products } = req.body;

    // definir mon line_items
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.title,
                images: [product.thumbnail],
            },
            unit_amount: Math.round(product.price) * 100,
        },
        quantity: product.quantity,
    }));



    // creation de la session de stripe
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/payment?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.json({ id: session.id });


})
const PORT = process.env.PORT || 8000
// ecoute du server
app.listen(PORT, () => console.log(`Ecoute du server au port ${PORT}`))
