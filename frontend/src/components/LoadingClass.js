import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import configfront from '../helpers/configfront';
import getFeriadosAction from '../redux/actions/getFeriadosAction';
import LoadingView from './LoadingView';


class LoadingClass extends Component {

    constructor(props){
        super(props);

        this.state = {
            feriados: [],
        }
        
    }
    
    /*Al iniciar trae los feriados de la Api publica o de la DB*/
    async componentDidMount() {
    
        await this.props.getFeriadosAction(this.state.title_filter);
        this.setState({feriados: this.props.feriadosListReducer.feriadosDB}); 
        this.props.history.push(configfront.PATH_LISTA_FERIADOS);
    }
   
    render() {
        
        return (<LoadingView/>);
    }
}

LoadingClass.propTypes = {

    feriadosDB: PropTypes.array
}

//Majeno de estado con react-redux
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



export default connect(mapStateToProps , mapDispatchToProps) (LoadingClass);
