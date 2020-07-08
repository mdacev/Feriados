import React from 'react';
import { Link } from 'react-router-dom';

function FeriadosListView( props ) {
    
    return (

        /*Listado de Feriados por Meses*/
        <div className="caja">
            <div className="mes-header">{props.mes_str}</div>
            {

                props.feriados.map(fer => (
                    
                    <Link to={"/feriado/" + fer._id} id="link_fer" key={fer._id}>
                        <div className={`dia ${fer.tipo}`}>{fer.dia_str} {fer.dia}</div>
                    </Link>
                    
                
                ))

             }
        </div>
    );


}

export default FeriadosListView;