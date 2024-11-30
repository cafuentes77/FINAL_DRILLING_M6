import { createFile, readFile } from "../services/fileService.js"


export const createDataFile = async (data, dataPath) => {
    try {
        const dataFile = await readFile(dataPath)
        let dataJson = null

        !dataFile || dataFile.length === 0 ? (dataJson = [data]) : dataJson = [...dataFile, data]

        await createFile(dataJson, dataPath)
    } catch (error) {
        throw new Error('Error al gestionar la creación del archivo con la data', error)
    }
}

export const getAllDataAnime = async (pathData) => {
    try {
        const data = await readFile(pathData)
        return data
    } catch (error) {
        throw new Error('No pudimos acceder a los datos', error)
    }
}