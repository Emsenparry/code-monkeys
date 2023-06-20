import express from 'express'
import productController from '../controllers/product.controller.js'

const productRouter = express.Router

const product = new productController();

productRouter.get("/song", (req, res) => {
  return product.list(req, res);
});

productRouter.get("/song/:id([0-9]*)", (req, res) => {
  return product.details(req, res);
});

productRouter.post("/song", (req, res) => {
  return product.create(req, res);
});

productRouter.put("/song", (req, res) => {
  return product.update(req, res);
});

productRouter.delete('/song/:id([0-9]*)', (req, res) => {
  return product.delete(req, res)
})

export { productRouter };