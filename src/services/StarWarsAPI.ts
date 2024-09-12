import axios from "axios";

const BASE_URL = "https://swapi.thehiveresistance.com/api";


export const getMany = async <T>(endpoint: string, page?: number): Promise<T> => {
    const url = page ? `${BASE_URL}/${endpoint}/?page=${page}` : `${BASE_URL}/${endpoint}`;
    const res = await axios.get<T>(url);
    return res.data
};

export const getOne = async <T>(endpoint: string, id: number): Promise<T> => {
    const res = await axios.get<T>(`${BASE_URL}/${endpoint}/${id}`)
    return res.data
}

export const getSpecific = async <T>(endpoint: string, query: string, page?: number): Promise<T> => {
    const url = page ? `${BASE_URL}/${endpoint}/?search=${query}&page=${page}` : `${BASE_URL}/${endpoint}/?search=${query}`
    const res = await axios.get<T>(url)
    return res.data
}