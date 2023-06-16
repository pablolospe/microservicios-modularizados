module.exports = (fn) => {
    return function(req, res, next){
        fn(req, res).catch((err)=>{next(err)})
    }
}
// FUNCIONES DE ORDEN SUPERIOR (RECIBE UNA FN Y RETORNA MEJORADA)
// VERSION COMPRIMIDA (fn) => (req,res,next)=>fn().catch((err)=>{next(err)})