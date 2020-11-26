const Moto = require("../model/Moto");

exports.getMotos=(req, res, next) => {
        const lista = Moto.fetchAll();
        res.json(lista); 
}


exports.getMoto=(req, res, next) => {
        let jsonr=Moto.fetchById(req.params.id);
        if ( typeof jsonr == 'undefined') {
            jsonr = { "msg": `Risorsa id ${req.params.id} non trovata` }
        }
        res.json(jsonr);
}

exports.insertMoto=(req, res, next) => {
        let jsonr = req.body;
        let jsoni={};
        let moto= new Moto(jsonr) 
        let idMoto=moto.insert();
        jsoni.msg = `Json ricevuto dal client correttamente id=${idMoto}`;
        jsoni.inserted_Obj = { ...jsonr }
        res.json(jsoni);
}

exports.deleteMoto=(req, res, next) => {
        let jsoni;
        let idMoto = req.params.id;
        let risultato = Moto.deleteByID(idMoto)
        if (risultato==0){
            jsoni= { "msg": `id: ${idMoto} cancellato correttamente ` }
        }else{
            jsoni= { "msg": `id: ${idMoto} non trovato in lista ` }
        }
        res.json(jsoni);  
}

exports.updateMoto=(req, res, next) => {
        let idMoto = req.params.id;
        let jsonr = req.body;
        jsonr.id=idMoto;
        let jsoni = {}
        jsoni.ricevuto = { ...jsonr }    
        let risultato = Moto.updateByID(idMoto,jsonr)
        if (risultato==0){
            jsoni.msg = `id: ${idMoto} aggiornato correttamente `
        }else{
            jsoni.msg = `id: ${idMoto} non trovato in lista `
        }
        res.json(jsoni);  
}