import { createFile, readFile } from "../services/fileService.js"


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile(dataPath)
        let dataJson = null

        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [...datafile, data]

        await createFile(dataJson, dataPath)
    } catch (error) {
        throw new JsonError('Error al gestionar la creación del archivo con la data', error)
    }
}