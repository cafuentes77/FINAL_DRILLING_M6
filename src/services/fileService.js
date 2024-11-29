import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createFile = async (data,pathData) => {
    try {
        const dataFilePath = path.join(__dirname, `../data/${pathData}`);

        await fs.mkdir(path.dirname(dataFilePath), {recursive: true});

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 4 ), "utf8");
    } catch (error) {
        throw new Error("Error al crear el archivo", error) 
    }
};

export const readFile = async (pathData) => {
    try {
        const dataFilePath = path.join(__dirname, `../data/${pathData}`);

        const data = await fs.readFile(dataFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error(`No pudemos leer el archivo: ${error}`);
        throw new JsonError("Error al leer el archivo", error); //tiene que retornar null si no se maneja error
    }
};