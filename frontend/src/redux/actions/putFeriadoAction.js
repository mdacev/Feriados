import axios from 'axios';
import configfront from '../../helpers/configfront'
export const type = 'PUT_FERIADO';

const putFeriadoAction = (id , _tipo) => {


    return async (dispatch) => {
        try{

            let _params = {tipo:_tipo};
            const server_host = process.env.REACT_APP_API+configfront.EOP_API;
            const response =  await  axios.put(server_host + id , _params);
            dispatch( { type, payload: response.data } );
        }
        catch(err){
            return  (dispatch) => {
                dispatch( { type, error: err } ) 
            }
        }
    }
}


export default putFeriadoAction;