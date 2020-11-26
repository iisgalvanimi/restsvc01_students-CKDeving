const Author=require("../model/author");

//   GET /restituisci_testo
exports.getGetText = (req, res, next) => {
        res
                .status(200)
                .set('Content-Type', 'text/plain')
                .send("Hello (TXT)");
}


//  GET /restituisci_valore/:N
exports.getVal = (req, res, next) => {
        let reqId = req.params.N;
        res
                .status(200)
                .set('Content-Type', 'text/html')
                .send(`<H3>Hello HTML valore=${reqId}</H3>`);
};


//  GET /restituisci_valore/:N
exports.getIndex = (req, res, next) => {
        //let x=new  Author();
        res
        .status(200)
        .set('Content-Type', 'text/html')
        .send(`<H2>Hello HTML</H2>
         <p> <a href="/index.html">/index.html</a> </p>
         <p> <a href="/restituisci_testo">/restituisci_testo</a> </p>
         <p> <a href="/restituisci_valore/3">/restituisci_valore/3</a> </p>
         <p> Autore: ${Author.getName()}</p>
        `);
};