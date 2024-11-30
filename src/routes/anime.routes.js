import { Router } from 'express';
import { createNewAnime, getAllAnime, updateAnime, deleteAnime, getAnimeById } from '../controllers/anime.controller.js';

const router = Router();

router.post('/animes', createNewAnime);
router.get('/animes', getAllAnime);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);
router.get('/animes/:id', getAnimeById);

export default router;