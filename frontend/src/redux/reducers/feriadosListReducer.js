import {type as getFeriadosActionType} from '../actions/getFeriadosAction';
import { Agrupar } from '../../helpers/Utils';

const initState = {
    feriadosDB: []
}

 function  feriadosListReducer  (state = initState, {type, payload}) {

    switch(type){

        case getFeriadosActionType: 
            let agrupados = Agrupar( payload.feriados );
            return Object.assign({}, state, { feriadosDB:agrupados , tipos: payload.tipos } );

        default:
            return state;
    }

}

 

export default feriadosListReducer;