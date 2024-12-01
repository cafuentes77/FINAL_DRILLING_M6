import { createFile, readFile } from "../services/fileService.js"


export const createDataFile = async (data, dataPath) => {
    try {
        const dataFile = await readFile(dataPath)
        let dataJson = null

        !dataFile || dataFile.length === 0 ? (dataJson = [data]) : dataJson = [...dataFile, data]

        await createFile(dataJson, dataPath)
    } catch (error) {
        throw new Error('Error managing the creation of the file with the data', error)
    }
}

export const getAllDataAnime = async (pathData) => {
    try {
        const data = await readFile(pathData)
        return data
    } catch (error) {
        throw new Error('We were unable to access the data', error)
    }
}

export const updateAnime = async (id, newData, pathData) => {
    try {
        const data = await readFile(pathData)
        const indexData = data.findIndex(dataFound => dataFound.id === id);

        if (indexData === -1) console.error('We couldnt find the data you were looking for')

        const oldData = { ...data[indexData] }
        data[indexData] = { ...data[indexData], ...newData }

        data[indexData] = { id, ...newData }; 
        await createFile(data, pathData)

        return oldData
    } catch (error) {
        throw new Error('We couldnt update the anime', error)
    }
}

export const deleteAnime = async(id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex( dataFound => dataFound.id === id );

        if(indexData === -1) throw new Error("We couldnt find the data");

        const dataDelete = data[indexData]
        data.splice(indexData, 1)

        await createFile(data, pathData )

        return dataDelete
    } catch (error) {
        throw new Error("We were unable to update the data", error);
    }
}

export const getAnimeById = async(id, pathData) => {
    try {
        const data = await readFile(pathData);

        const dataFound = data.find(dataFound => dataFound.id === id)

        if(!dataFound) throw new Error("We couldnt find the data");

        const dataId = dataFound;
        return dataId

    }catch (error) {
        throw new Error("We could not find the data", error);
    }
}

export const getAnimeByName = async (nombre, pathData) => {
    try {
        const data = await readFile(pathData);

        const nameNormalized = nombre.toLocaleLowerCase().replace(/\s+/g, '')

        const animeName = data.filter(
            (anime) =>
                anime.nombre.toLocaleLowerCase().replace(/\s+/g, '') === nameNormalized
        );
        return animeName
    } catch (error) {
        throw new Error("We couldnt find the data for the name of the anime", error)
    }

}