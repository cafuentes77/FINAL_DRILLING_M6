import { Anime } from "../models/Anime.model.js";

export const createNewAnime = async (req, res) => {
    try {
        const data = req.body;
        const anime = await Anime.create(data);
        res.status(201).json({
            message: "Anime created successfully",
            status: 201,
            data: anime,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create anime",
            status: 500,
            error
        })
    }
}

export const getAllAnime = async (req, res) => {
    try {
        const data = await Anime.find();
        if (!data)
            throw new Error("No anime found");
        res.status(200).json({
            message: "Animes found successfully",
            status: 200,
            data,
        });
    } catch (error) {
        res.status(404).json({
            message: "data not found",
            status: 404,
            error,

        })
    }
}

export const updateAnime = async (req, res) => {

    try {
        const id  = req.params.id;
        const data = req.body;

        const animeUpdate = await Anime.update(id, data);

        res.status(201).json({
            message: "Update Anime",
            status: 201,
            oldData: animeUpdate,
            newData: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating anime data",
            status: 500,
            error,
        })
    }
}