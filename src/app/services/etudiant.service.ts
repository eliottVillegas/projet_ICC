import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiants:Array<object>=[];
  promos:Array<object>=[];
  options:Array<object>=[];
  constructor(private http:HttpClient){
    
    this.http.get<Array<object>>("/assets/utilisateurs.json").subscribe(
      user=>{
        this.etudiants=user.filter(k=>(!k["statut"]));
        this.reset_graph();
      }
    )
  }

  reset_graph(){
    this.promos=[];
    this.options=[];
    for (let k=0;k<this.etudiants.length;k++){
      let id=-1
      let ide=-1
      for (let i=0;i<this.promos.length;i++){
        if (this.promos[i]["x"]==parseInt(this.etudiants[k]["promo"])){
            id=i;
        }
      }
      for (let i=0;i<this.options.length;i++){
        if (this.options[i]["name"]==this.etudiants[k]["option"]){
            ide=i;
        }
      }
      if (id==-1){
        this.promos.push({x:parseInt(this.etudiants[k]["promo"]),y:1,name:this.etudiants[k]["promo"]})
      }else{
        this.promos[id]["y"]+=1
      }
      if (ide==-1){
        this.options.push({name:this.etudiants[k]["option"],y:1})
      }else{
        this.options[id]["y"]+=1
      }
    }
  }
}
