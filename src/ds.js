let hola="hola weyees estoy creando mi propia dependencia pero sencilla";
let word=hola.replace("weyees","señores");
let rp=()=>{
    let words=hola.replace("weyees","señores y señoras");
    console.log(words, "este de abajo era por defecto", hola);
}
module.exports={
rp
};