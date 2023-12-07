import { defineStore } from "pinia";


export const useHomeStore = defineStore({
    id: 'home',
    state: () => ({
        medicine: ['Лекарственный препорат 1', 'Лекарственный препорат 2', 'Лекарственный препорат 3'],
        currentMedicine: '',
        receptions: ['Перорально', 'Перорально', 'Подкожно'],
        currentReception: '',
        dose:['мкг', 'мл',  'мл/кг'],
        currentDose: '',
        startDate: '',
        endDate: '',
        rangeDate: '',
        times: ['1 раз в день', '2 раза в день', '3 раза в день'],
        currentTime: '',
    }),
    actions: {
        setCurrentMedicine(value: string){
            this.currentMedicine = value
        },
        setCurrentReception(value: string){
            this.currentReception = value
        },
        setCurrentDose(value: string){
            this.currentDose= value
        },
        setStartDate(value: string){
            this.startDate = value
        },
        setEndtDate(value: string){
            this.endDate = value
        },
        setRangeDate(value: string){
            this.rangeDate = value
        },
        setCurrentTime(value: string){
            this.currentTime = value
        },
        handleGenerateTable(){
            return {
                medicine: this.currentMedicine,
                reseption: this.currentReception,
                dose: this.currentDose,
                startDate: this.startDate,
                endDate: this.endDate,
                range: this.rangeDate
            }
        }
    }
});