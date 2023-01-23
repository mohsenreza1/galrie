import { Router } from "express";
import * as photos from "../controllers/photo.js"

const router = Router()

router.get("/", photos.getAll);
// router.get("/:id", photos.getOne);
router.put("/:id", photos.replace);
router.patch("/:id", photos.update);
router.delete("/:id", photos.remove);
router.post("/", photos.create);

export default router