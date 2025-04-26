const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());

app.get('/usuario',function(req,res){
    res.json({
        primernombre:"rodrigo",
        segundonomvre: "ernesto",
        primerapellido:"campos",
        segunsoapellido:"mejia",
        fechanacimiento:"1994-08-18",
        estadofamiliar:"casado",
        residencia:"San Salvador",
        profesion:"tecnico informatico",
        peso:"150",
        altura:"1.67",
        colorpiel:"trigueno",
        colorojos:"cafes",
        colorcabello:"negro",
        ultimosempleos:[{
            empresa:"TIGO",
            departamento:"Call Center",
            direccion:"La Libertad",
            cargo:"tecnico",
            desde:"2016-01-01",
            hasta:"2018-12-12"
        },{
            empresa:"GCA",
            departamento:"Ventas",
            direccion:"San Salvador",
            cargo:"tecnico",
            desde:"2019-01-01",
            hasta:"2022-12-02"

        },{
            empresa:"MINSAL",
            departamento:"IT",
            direccion:"San Salvador",
            cargo:"soporte tecnico",
            desde:"2022-02-22",
            hasta:"actualidad"
        }]
    });
});

app.get('/genero',function(req,res){
    res.json([
        {id:1, genero:'Masculino'},
        {id:2, genero:'Femenino'}
    ]);
});

app.get('/tipo_documento',function(req,res){
    res.json([
        {id:1, tipo_documento:'DUI'},
        {id:2, tipo_documento:'NIT'},
        {id:3, tipo_documento:'ISSS'},
        {id:4, tipo_documento:'Pasaporte'}
        
    ]);
});

app.get('/departamento',function(req,res){
    res.json([
        {id:1,departamento:"Ahuachapan"},
        {id:2,departamento:"Santa Ana"},
        {id:3,departamento:"Sonsonate"},
        {id:4,departamento:"Chalatenango"},
        {id:5,departamento:"La Libertad"},
        {id:6,departamento:"San Salvador"},
        {id:7,departamento:"Cuscatlan"},
        {id:8,departamento:"San vicente"},
        {id:9,departamento:"La Paz"},
        {id:10,departamento:"Cabañas"},
        {id:11,departamento:"Usualutan"},
        {id:12,departamento:"Morazan"},
        {id:13,departamento:"San Miguel"},
        {id:14,departamento:"La Union"}
         
    ]);
});

app.get('/municipio',function(req,res){
    res.json([
        {id:1,departamento:"Ahuachapan"},
        {id:2,departamento:"Metapan"},
        {id:3,departamento:"Izalco"},
        {id:4,departamento:"Dulce Nombre"},
        {id:5,departamento:"Comasagua"},
        {id:6,departamento:"San Salvador"},
        {id:7,departamento:"Cojutepeque"},
        {id:8,departamento:"apastepeque"},
        {id:9,departamento:"Olocuilta"},
        {id:10,departamento:"Victoria"},
        {id:11,departamento:"Jucuapa"},
        {id:12,departamento:"Perkin"},
        {id:13,departamento:"Barrios"},
        {id:14,departamento:"Poloros"},

         
    ]);
});

app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1)+parseFloat(req.query.campo2);
    res.json({
     respuesta:resultado       
});
});


app.get('/login',function(req,res){
    console.log(req.body.email);
    console.log(req.body.password);

});

app.listen(puerto,function(req,res){
    console.log("EL SERVIDOR ESTA CORRIENDO EN EL PUERTO #30000 ");
});


