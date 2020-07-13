const feriadosCtrl = {};

const axios = require('axios');
const Feriado = require('../models/Feriado');

//Carga inicial
//Si no hay registros en DB busca de la api externa.
feriadosCtrl.getInitData =  async (req, res) => {
        
    try {

        const cant = await Feriado.find().countDocuments();
        if( cant === 0){
            var dt = new Date();
            axios.get(`http://nolaborables.com.ar/api/v2/feriados/${dt.getFullYear()}?incluir=opcional`)
            .then(response => {
                createData( response.data, req, res );
            })
            .catch(error => {
                console.log(error);
            });
        }
        else{
            getFeriados(req, res);
        }

       
        
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error
        });
    }


};

//====================================
// Ini - Privadas
//====================================
//Insert masivo
createData = async ( data_insert, req, res ) => {

    const cant = await Feriado.find().countDocuments();
    
    
        await Feriado.insertMany(data_insert,forceServerObjectId=true,function (err,data) {

            if(err){
                return console.log(err);
            }
            else{
                getFeriados(req, res);
            }
        });
    
    
}

//trae feriados y resumen
getFeriados =  async (req, res) => {
    
    try {
            const feriados = await Feriado.find().sort({mes: 1});

            const tipos = await Feriado.aggregate ( [ 
                { $group : { _id :{ tipo : "$tipo" }, cant : { $sum : 1 } } },
                { $sort : { tipo : 1, cant: -1 } }
              ]);

              res.json({feriados , tipos});
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//====================================
// Fin - Privadas
//====================================

//Trae feriado por Id
feriadosCtrl.getFeriado = async (req, res) => {

    try{
        const feriado = await Feriado.findById(req.params.id);
        res.json(feriado);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
}


//actualiza...en este caso solo el tipo...
feriadosCtrl.updateFeriado = async (req, res) => {

    try{
        
        let _msg = 'Feriado editado!';
        _path = '/';
        let tipo = String(req.body.tipo);
    
            await Feriado.findByIdAndUpdate(
                {_id: req.params.id} ,
                { 
                    $set: { tipo: tipo}
                }
            );
            
        res.json({msg:_msg, path:_path});

    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
}



module.exports = feriadosCtrl;