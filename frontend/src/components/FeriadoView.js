import React from 'react';


function FeriadoView( props ) {

    let original_str = `Fecha original ${props.original}`;
    let element=<a href={props.info} target="_blank" rel="noopener noreferrer">[info]</a>;
    return (
        <div className="caja feriado-view">
             <div className={props.tipo_class}>{props.mes_str}</div>
             <div className="dia-feriado">{props.dia_str} {props.dia}</div>
                <div>
                    <label>{props.motivo}</label>
                </div>
                {props.original ?
                    <div id="div_opcional">
                        <label> {original_str}</label>
                    </div>
                : null
                }
                <div>{element}</div>
                
                <div className={props.tipo_class}>
                    <select id="sel_tipo"
                    className={props.tipo_class}
                    value={props.selected_value}
                    onChange={props.handleChange}
                    >
                    {   props.SELECT_TIPO.map(t => (
                        <option key={t.value} value={t.value}>
                            {t.label}
                        </option>
                        ))
                    }
                    </select>
                </div>
                
            
             <div id="div_btns" className="caja">
                 <button className="btn btn-primary" type="submit" id="btn_aceptar" onClick={props.click_aceptar}>
                    Acerpar
                 </button>
                 <button className="btn btn-secondary" type="submit" id="btn_cancelar" onClick={props.click_cancelar}>
                    Cancelar
                 </button>
             </div>
            
        </div>
    );


}

export default FeriadoView;