import { Router } from "express";
import {
  createPostmatesCart,
  addToPostmatesCart,
  removeFromPostmatesCart,
  getItemDetails,
  getFee,
} from "../api/cart.mjs";

const cartRouter = Router();

cartRouter.post("/createPostmatesCart", async (req, res) => {
  res.json(await createPostmatesCart(req.body));
});

cartRouter.post("/addToPostmatesCart", async (req, res) => {
  res.json(await addToPostmatesCart(req.body));
});

cartRouter.post("/removeFromPostmatesCart", async (req, res) => {
  res.json(await removeFromPostmatesCart(req.body));
});

cartRouter.post("/getItemDetails", async (req, res) => {
  res.json(await getItemDetails(req.body));
});

cartRouter.post("/getFee", async (req, res) => {
  res.json(await getFee(req.body));
});

export default cartRouter;
