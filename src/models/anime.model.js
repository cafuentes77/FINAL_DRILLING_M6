import { v4 as uuidv4 } from 'uuid';
import { createDataFile, getAllDataAnime } from '../utils/fileUtils.js';

export class Anime {
    #id;
    #nombre;
    #genero;
    #anio;
    #autor;

constructor (nombre, genero, anio, autor) {
    this.#id = uuidv4().slice(0,8);
    this.#nombre = nombre;
    this.#genero = genero;
    this.#anio = anio;
    this.#autor = autor;
}

get id(){
    return this.#id;
}

get nombre(){
    return this.#nombre;
}

get genero(){
    return this.#genero;
}

get anio(){
    return this.#anio;
}

get autor(){
    return this.#autor;
}

setId(newId) {
    this.#id = newId;
}

setNombre(newNombre) {
    this.#nombre = newNombre;
}

setGenero(newGenero) {
    this.#genero = newGenero;
}

setAnio(newAnio) {
    this.#anio = newAnio;
}

setAutor(newAutor) {
    this.#autor = newAutor;
}

getAllProperties() {
    return {
        id: this.#id,
        nombre: this.#nombre,
        genero: this.#genero,
        anio: this.#anio,
        autor: this.#autor
    };
}

static async create(data) {
    try {
        const { nombre, genero, anio, autor} = data;
        const anime = new Anime(nombre, genero, anio, autor);
        const animeObject = anime.getAllProperties();

        await createDataFile(animeObject, 'animes.json');

        return animeObject;
    } catch (error) {
        throw new Error('Failed to create a new anime', error);
    }
}

static async findAnimes() {
    try {
        const anime = await getAllDataAnime('animes.json');
        return anime;
    } catch (error) {
        throw new Error('Error al obtener los datos de las películas', error);
    }
}

}