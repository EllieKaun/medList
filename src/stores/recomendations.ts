import { defineStore } from "pinia";

interface IRecomendations{
    recomendations: string[]
}

export const useRecomendationsStore = defineStore({
    id: 'recomendations',
    state: (): IRecomendations => ({
        recomendations: []
    }),
    actions: {
        setRecomendations(value: string[]){
            console.log(1)
            this.recomendations = value
            console.log(this.recomendations)
        },
        handleGenerateTable(){
            console.log(2)
            return {
                recomendations: this.recomendations,
            }   
        }
    }
});