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
        const data = await Anime.findAnimes();
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