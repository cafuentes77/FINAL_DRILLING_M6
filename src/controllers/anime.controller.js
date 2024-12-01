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
        const id = req.params.id;
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

export const deleteAnime = async (req, res) => {
    try {
        const { id } = req.params

        const animeDelete = await Anime.delete(id)

        res.status(200).json({
            message: `user ${id} successfully deleted`,
            status: 200,
            datadeleted: animeDelete
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting user',
            status: 500,
            error,
        });
    }
}

export const getAnimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const animeId = await Anime.getId(id)
        res.status(200).json({
            message: 'Anime found successfully',
            status: 200,
            data: animeId,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error getting anime',
            status: 500,
            error,
        });
    }
}

export const getAnimeByName = async (req, res) => {

    try {
        const nombre = req.params.nombre;
        const animeName = await Anime.getName(nombre);
        res.status(200).json({
            message: "Anime obtained by name successfully",
            status: 200,
            data: animeName,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error getting anime by name',
            status: 500,
            error,
        });
    }
}