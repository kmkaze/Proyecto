const Tattoo = require("../models/tattoos.model");
let response ={
    mgs: "",
    exito: false
}

exports.create = function(req,res){
    let tattoo = new Tattoo({
        tattos_id:req.body.tattos_id,
        style:req.body.style,
        ubicacion:req.body.ubicacion,
        dimension:req.body.dimension
    })

    tattoo.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.mgs = "Error al guardar el tattoo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.mgs = "El tattoo se guardo correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Tattoo.find(function(err,tattoos){
        res.json(tattoos)
    })
}

exports.findOne = function(req,res){
    Tattoo.findOne({_id: req.params.id},function(err,tattoo){
        res.json(tattoo)
    })
}

exports.update = function(req,res){
    let tattoo ={
        tattos_id:req.body.tattos_id,
        style:req.body.style,
        ubicacion:req.body.ubicacion,
        dimension:req.body.dimension
    }

    Tattoo.findByIdAndUpdate(req.params.id, {$set: tattoo},function(err){
        if(err){
            console.error(err),
            response.exito =false,
            response.msg = "Error al modificar el tattoo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "el tattoo modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req, res){
    Tattoo.findByIdAndRemove({_id: req.params.id}, function(err,){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el tattoo"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El tattoo eliminado correctamente"
        res.json(response)
    })
}
