import express from 'express'; 
import { productRouter } from './routers/product.router.js'

import dotenv from "dotenv";
dotenv.config();

const app = express(); 

app.use(express.urlencoded({ extended: true }));

app.use(productRouter);

/* app.get("/", (req, res) => {
  res.send("Hej verden fuck!");
});

app.get("/about", (req, res) => {
  res.send("Læs mere om min Node.js app!");
});

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet fuck");
  });
 */
app.listen(process.env.PORT, () => {
    console.log(`Server kører på http://localhost:${process.env.PORT}`);
  });
  