import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import getFeriadosAction from '../redux/actions/getFeriadosAction' 
import configfront from '../helpers/configfront'
import FeriadosListView from './FeriadosListView'
import ResumenView from './ResumenView'


class FeriadosListClass extends Component {

    
    constructor(props){
        super(props);
        this.state = {};
    }
    

    async componentDidMount() {
        if( this.props.history.location.pathname !== configfront.PATH_LISTA_FERIADOS)
            this.props.history.push(configfront.EOP_API);
    }

    

    render() {
        

        let {feriadosListReducer} = this.props; 
       
        
        return (

            <div>
                {/*Resumen contador de tipos de feriados*/}
                <div className="col-md-12 resumen-align">
                {
                   
                    feriadosListReducer.tipos.map(t => (

                        <ResumenView
                        key={t._id.tipo}
                        tipo={t._id.tipo}
                        cant={t.cant}
                        />
                    
                    ))
                }
                </div>
           
            
            {/*Listado de Meses*/}
            <div className="layout" id="layout">
               
                {  
                    feriadosListReducer.feriadosDB.length > 0 ?
                        
                        feriadosListReducer.feriadosDB.map(fer => (

                                
                                <FeriadosListView
                                key={fer[0]._id}
                                feriados={fer}
                                mes_str={fer[0].mes_str} 
                                
                                />
                            
                            
                        ))
                    :null
                }
            </div>
            </div>
        )
    }
}


FeriadosListClass.propTypes = {

    feriadosDB: PropTypes.array
}


const mapStateToProps = (state) => {

    return {
        feriadosListReducer: state.feriadosListReducer
    }
}



const mapDispatchToProps = (dispatch) => {

    return {
        getFeriadosAction : () => dispatch(getFeriadosAction())
    }
}



export default connect(mapStateToProps , mapDispatchToProps) (FeriadosListClass);
