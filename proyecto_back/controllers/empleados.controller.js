const Empleado = require("../models/empleados.model");
let response ={
    mgs: "",
    exito: false
}

exports.create = function(req,res){
    let empleado = new Empleado({
        nombre:req.body.nombre,
        apellido_p:req.body.apellido_p,
        apellido_m:req.body.apellido_m,
        telefono:req.body.telefono,
        mail:req.body.mail,
        direccion:req.body.direccion,

    })

    empleado.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.mgs = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.mgs = "El empleado se guardo correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Empleado.find(function(err,empleados){
        res.json(empleados)
    })
}

exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err,empleados){
        res.json(empleados)
    })
}

exports.update = function(req,res){
    let empleados ={
        nombre:req.body.nombre,
        apellido_p:req.body.apellido_p,
        apellido_m:req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,   
        direccion:req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleados},function(err){
        if(err){
            console.error(err),
            response.exito =false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "el empleado modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req, res){
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err,){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado eliminado correctamente"
        res.json(response)
    })
}
