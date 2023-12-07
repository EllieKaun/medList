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
            this.recomendations = value
        },
        handleGenerateTable(){
            return {
                recomendations: this.recomendations,
            }   
        }
    }
});