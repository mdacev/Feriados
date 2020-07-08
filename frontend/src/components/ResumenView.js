import React from 'react';
import { TiposFeriados } from '../helpers/Utils';

function ResumenView( props ) {

    let tipo = props.tipo;
    let cant = props.cant;
    return (
        <div className={`resumen ${tipo}`} key={tipo}>
            {TiposFeriados(tipo)}  {cant} 
        </div>
    );


}

export default ResumenView;