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