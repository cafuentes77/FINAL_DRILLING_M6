import { Router } from 'express';
import { createNewAnime, getAllAnime, updateAnime } from '../controllers/anime.controller.js';

const router = Router();

router.post('/animes', createNewAnime)
router.get('/animes', getAllAnime)
router.put('/animes/:id', updateAnime) 

export default router;