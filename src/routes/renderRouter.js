import express from 'express';
import { Recipe } from '../../db/models';

const router = express.Router();

router.get('/recipes', async (req, res) => {
  const initState = {};
  try {
    const recipes = await Recipe.findAll();
    initState.recipes = recipes;
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  res.render('Layout', initState);
});

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    res.render('Layout', {recipe});
  } catch (error) {
    console.log(error);
  }
});

router.get('/login', (req, res) => {
  res.render('Layout');
});
router.get('/signup', (req, res) => {
  res.render('Layout');
});
router.get('/account', (req, res) => {
  res.render('Layout');
});

export default router;
