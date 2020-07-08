import {type as getFeriadoByEditActionType} from '../actions/getFeriadoByEditAction';
import {type as putFeriadoActionType} from '../actions/putFeriadoAction';
import { Formatear } from '../../helpers/Utils';

const initState = {};

function  feriadoReducer  (state = initState, {type, payload}) {

    switch(type){

        case getFeriadoByEditActionType: 
            let feriado = Formatear( payload );
            return Object.assign({}, state, { feriado:feriado } );

        case putFeriadoActionType: 
            return Object.assign({}, state, {res: payload})

        default:
            return state;
    }
    
}

export default feriadoReducer;