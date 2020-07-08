import React from 'react';
import { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ModalMsg from './ModalMsg';
import { ModalManager} from 'react-dynamic-modal';

import configfront from '../helpers/configfront';
import getFeriadoByEditAction from '../redux/actions/getFeriadoByEditAction';
import putFeriadoAction from '../redux/actions/putFeriadoAction';
import FeriadoView from './FeriadoView'

class Feriado extends Component{

   
    constructor(props){
        super(props);

        this.click_aceptar = this.click_aceptar.bind(this);
        this.click_cancelar = this.click_cancelar.bind(this);

        this.state = {
            feriado: {},
            selectedValue: '',
            originalTipo: ''
            
        }

        this.SELECT_TIPO = [
            {value:"inamovible" , label:"Inamovible"},
            {value:"nolaborable", label:"No Laborable"},
            {value:"puente", label:"Puente"},
            {value:"trasladable", label: "Trasladable"}
        ];
    }

   

    async componentDidMount() {

        await this.props.getFeriadoByEditAction(this.props.match.params.id);
        const {feriadoReducer} = this.props;
        const feriado_edit = feriadoReducer.feriado;
        this.setState(
            {feriado : Object.assign({}, feriado_edit),
            selectedValue: feriado_edit.tipo,
            originalTipo :feriado_edit.tipo
        });
        
    }

    click_aceptar = async () => {

        let msg='No se puede editar un feriado Inamovible.' , path=null
        if(this.state.originalTipo !== 'inamovible'){
            
            this.setState(prevState => ({
                 feriado: {
                    ...prevState.feriado,
                    tipo: this.state.selectedValue
                },
            }))
            
            await this.props.putFeriadoAction(this.state.feriado._id, this.state.feriado.tipo);
            const {feriadoReducer} = this.props;
            msg = feriadoReducer.res.msg;
            path = feriadoReducer.res.path;
            
        }
        this.setMensaje(msg, path);
        
    }

    //escucha al select
    handleChange = ( e ) => {

        
        if(this.state.feriado.tipo !== 'inamovible' && this.state.originalTipo !== 'inamovible'){
            let tipo = e.target.value;
            this.setState(prevState => ({
                feriado: {
                    ...prevState.feriado,
                    tipo: tipo
                },
                selectedValue: tipo
                
                
            }))
        }
        else{
            this.setMensaje('No se puede editar un feriado Inamovible.', null);
        }
        
    }

    click_cancelar = async () => {
        this.props.history.push(configfront.EOP_API);
        
    }

    setMensaje = (message , path) => {
        ModalManager.open(<ModalMsg text={message} onRequestClose={() => true}  cn="modal-msg"/>);
        if(path)
            this.props.history.push(path);
    }


    render() {

        
        return(

                <FeriadoView
                    dia={this.state.feriado.dia}
                    dia_str={this.state.feriado.dia_str}
                    mes_str={this.state.feriado.mes_str}
                    tipo_str={this.state.feriado.tipo_str}
                    tipo_class={this.state.selectedValue}
                    motivo={this.state.feriado.motivo}
                    info={this.state.feriado.info}
                    original={this.state.feriado.original ? this.state.feriado.original_str : null}
                    click_aceptar={this.click_aceptar}
                    click_cancelar={this.click_cancelar}
                    handleChange={this.handleChange}
                    SELECT_TIPO= {this.SELECT_TIPO}
                    selected_value={this.state.selectedValue}
                />

        )
    }

}

Feriado.propTypes = {

    feriado: PropTypes.object
}


const mapStateToProps = (state) => {

    return {
        feriadoReducer: state.feriadoReducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getFeriadoByEditAction : (id) => dispatch(getFeriadoByEditAction(id)),
        putFeriadoAction : (id , tipo) => dispatch(putFeriadoAction(id , tipo))
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (Feriado)
