import express from 'express';
import { Recipe } from '../../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { title, img, description, ingredients, time } = req.body;
  const recipe = await Recipe.create({
    title,
    img,
    description,
    ingredients,
    time
  });
  res.json(recipe);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Recipe.destroy({ where: { id } });
  res.sendStatus(200);
});

export default router;
