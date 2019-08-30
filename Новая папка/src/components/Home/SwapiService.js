
export default class SwapiService {

    async getResource (url) {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error (`Error is ${res.status}`)
        }
        return await res.json();
    }

    async getAllRecipes(){
        const res= await this.getResource('https://cookbook.jakubricar.cz/api/recipes/');
        return res.results;
    }
    async getRecipe(_id){
        const res= await this.getResource(`https://cookbook.jakubricar.cz/api/recipes/${_id}/`);
        return res.results;
    }

}
const swapi = new SwapiService();
swapi.getAllRecipes().then(()=>{

});