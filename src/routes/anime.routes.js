import { Router } from 'express';
import { createNewAnime, getAllAnime } from '../controllers/anime.controller.js';

const router = Router();

router.post('/animes', createNewAnime)
router.get('/animes', getAllAnime)

export default router;