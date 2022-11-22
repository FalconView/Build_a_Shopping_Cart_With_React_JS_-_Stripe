// sk_test_51M65NIHHymDcgpa7ntrdLjXLyzyHnHT9QClncFIFRbwMJI6bJze9Vvafa4CvG1E6HTnquQBqz5Ldfd0f2oNfuktq00ndXuCB62
// Coffee: price_1M65R0HHymDcgpa79oWjcaXB
// Sunglasses: price_1M65SMHHymDcgpa7H3LaJPop
// Camera: price_1M65TgHHymDcgpa7euzgG8JL
const express = require("express");
var cors = require("cors");
const { json } = require("express");
const stripe = reqiure("stripe")(
  "sk_test_51M65NIHHymDcgpa7ntrdLjXLyzyHnHT9QClncFIFRbwMJI6bJze9Vvafa4CvG1E6HTnquQBqz5Ldfd0f2oNfuktq00ndXuCB62"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /* 
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  
    console.log(req.body)
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });

    const session = await stripe.checkout.sessions.create({
      line.items: lineItems,
      mode: 'payment',
      sucess_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000?cancel"
    })

    res.send(JSON.stringify({
      url: session.url
    }))
  });
});

app.listen(4000, () => console.log("Listening on port 4000"))
