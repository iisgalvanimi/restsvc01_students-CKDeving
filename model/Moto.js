const lista = [{id : 0,nome : "KTM",cilindrata : 125 },
               {id : 1,nome : "Yamaha",cilindrata : 250 }]
module.exports = class Moto {

  constructor(moto) { this.moto=moto }

  insert() {
    let nuovoid =lista.length
    this.moto.id=nuovoid
    lista[nuovoid]=this.moto
    return nuovoid;
  }

  static fetchAll() {
    return lista;
  }

  static fetchById(indice) {
    if (lista[indice]) {
      return lista[indice];
    }else{
      return undefined;
    }
  }
  static deleteByID(indice) {
    if (lista[indice] == undefined || lista[indice] == null){
      return 1; // 0 KO
    }else{
      lista[indice]=null;
      return 0; // OK
    }
    
  }

  static updateByID(indice,moto) {
    if (lista[indice] != undefined && lista[indice]!=null){
      lista[indice]=moto;
      console.log(lista[indice]);
      return 0; // 0 OK, 1 KO
    }else{
      return 1; // KO
    }
  }

}