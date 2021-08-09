import { makeAutoObservable } from "mobx";

export class StoreMB{
   constructor(){
      makeAutoObservable(this)
   }

   title: string = "Paweł"
   setTitle(title: string){
      this.title = title
   }
}