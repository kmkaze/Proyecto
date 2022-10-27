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