
// gestisce le richieste non valide

exports.get404Page = (req, res, next) => {
    res
        .status(404)
        .send(`<H2>Page not found</H2>`);
};
