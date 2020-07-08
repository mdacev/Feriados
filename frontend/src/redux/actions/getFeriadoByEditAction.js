import axios from 'axios';
import configfront from '../../helpers/configfront'

export const type = 'GET_FERIADO_BY_EDIT';

const getFeriadoByEditAction = (id) => {

    return async (dispatch) => {
        try{

            const server_host = process.env.REACT_APP_API+configfront.EOP_API;
            const response =  await  axios.get(server_host + id);
            dispatch( { type, payload: response.data } );
        }
        catch(err){
            return  (dispatch) => {
                dispatch( { type, error: err } ) 
            }
        }
    }
}


export default getFeriadoByEditAction;