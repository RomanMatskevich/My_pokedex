import axios from "axios";
export default class APIService{
    
    static async getOne(id){
        let onePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return onePokemon.data
    }
    
    
    static async get(url){
        const response = await axios.get(`${url}`)
        return response.data
        
    }
    
    static async getPage(limit, page){
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit*(page-1)}`)
        return response.data
    }

}