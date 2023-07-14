module.exports=(fn)=>{ //esto lo hago para sustituir todo los tryCatch, recibe una funcion (que seria el post o el get, recibe la funcion que maneja la ruta) y retorna otra funcion que va a recibir a req, res y next

    return function (req, res, next){
    fn(req, res).catch((err)=>{ // lo que me da esta fn es una promesa por lo que hay que capturar el error con un .catch
        next(err) //next sirve pasar el error al menejador de errores
    })   
    }



    /*  Otra forma de hacer lo mismo, mas corto pero las ilegible*/
   

    /* 
     (fn)=>(req, res, next)=>fn().catch((err)=>next(err)) esta fn es autoretornable
     */
}