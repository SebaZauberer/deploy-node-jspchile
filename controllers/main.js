exports.home = (req, res)=>{
    res.send("Bienvenidos a Mi pagina");
    res.end();
}

exports.contacto = (req, res)=>{
    res.send("Puedes contatarme al correo me@example.com");
    res.end();
}