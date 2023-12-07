import { defineStore } from 'pinia';

export const useAfterStore = defineStore({
 id: 'after',
 state: () => ({
    medicine: ['Лекарственный препорат 1', 'Лекарственный препорат 2', 'Лекарственный препорат 3'],
    currentMedicine: '',
    nums: [1, 2, 3, 4, 5, 6 ,7],
    currentNum: 0,
    startDate: '',
    endDate: '',
    rangeDate: '',
    receptions: ['Перорально', 'Перорально', 'Подкожно'],
    currentReception: '',
    dose:['мкг', 'мл',  'мл/кг'],
    currentDose: ''
 }),
 actions: {
   setCurrentMedicine(value: string){
      this.currentMedicine = value
   },
   setCurrentNum(value: number){
      this.currentNum = value
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
   createTableRow(){
      return {
         medicine: this.currentMedicine,
         howToUse: this.currentReception,
         dose: this.currentDose,
         startDate: this.startDate,
         endDate: this.endDate,
         session: this.currentNum,
         days: this.rangeDate
      }
   }
 }
});