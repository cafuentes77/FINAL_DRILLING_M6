import { Router } from 'express';
import {
    createNewAnime,
    getAllAnime,
    updateAnime,
    deleteAnime,
    getAnimeById,
    getAnimeByName
}
    from '../controllers/anime.controller.js';

const router = Router();

router.post('/animes', createNewAnime);
router.get('/animes', getAllAnime);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);
router.get('/animes/:id', getAnimeById);
router.get('/animes/nombre/:nombre', getAnimeByName)


export default router;