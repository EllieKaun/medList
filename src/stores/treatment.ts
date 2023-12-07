import { defineStore } from 'pinia';

export const useTreatmentStore = defineStore({
 id: 'treatment',
 state: () => ({
  program: [
    { title: 'HD', value: '1'},
    { title: 'HDF', value: '2' },
    { title: 'UF', value: '3' }
    ],
  currentProgram: '1',
  diasol: ['Диазолятор'],
  currentDiasol: '',
  concentrator: ['Концентратор'],
  currentConcentrator: '',
  type:[
    { title: 'Игла', value: '1' },
    { title: 'Картер', value: '2' },
    ],
  currentType: '1',
  needlesArr: ['игла размер 1', 'игла размер 2', 'игла размер 3'],
  currNeedles: '',
  needleTypeArr: ['венозные','аретриальные'],
  currNeedlesType: '',
  carterArr: ['картер размер 1', 'картер размер 2', 'картер размер 3'],
  currCarter: '',
  carterTypeArr: ['Картер Фолея', 'Картер Малеко', 'Картер Пиццера', 'Картер Тимана', 'Картер Нелатана', ''],
  currCarterType: '',
  volume: [{value: 'мгр', label: 'Граммов'}, {value: 'мл', label: 'Литров'}],
  currentVolume: '',
  bicarbonate: ['Бикарбанат 1', 'Бикарбанат 2'],
  currBicarbonate: '',
  anticoagulant: ['Антикоагуляция 1', 'Антикоагуляция 2'],
  currAnticoagulant: '',
  humanVolume: '',
  extraVolume: '',
 }),
 actions: {
    setCurrentProgram(value: string){
        this.currentProgram = value;
    },
    setCurrentDiasol(value: string){
      this.currentDiasol = value;
    },
    setCurrentConcentrator(value: string){
      this.currentConcentrator = value;
    },
    setCurrentType(value: string){
        this.currentType = value;
    },
    setNeedle(value: string){
      this.currNeedles = value;
    },
    setNeedleType(value: string){
      this.currNeedlesType = value;
    },
    setCarter(value: string){
      this.currCarter = value;
    },
    setCarterType(value: string){
      this.currCarterType = value;
    },
    setVolume(value: string){
      this.currentVolume = value;
    },
    setCurrentBicarbonate(value: string){
      this.currBicarbonate = value;
    },
    setCurrentAnticoagulant(value: string){
      this.currAnticoagulant = value;
    },
    setHumanVolume(value: string){
      this.humanVolume = value;
    },
    setextraVolume(value: string){
      this.extraVolume = value;
    },
    handleGenerateTable(){
      return{
        program: ( this.program.find((item) => item.value ===  this.currentProgram))?.title,
        diasol: this.currBicarbonate,
        concentrator: this.currentConcentrator,
        volume: this.currentVolume,
        type:  ( this.type.find((item) => item.value ===  this.currentType))?.title,
        bicarbonate: this. bicarbonate,
        anticoagulant: this.anticoagulant,
        humanVolume: this.humanVolume,
      }
    }
 }
});