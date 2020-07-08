import axios from 'axios';
import configfront from '../../helpers/configfront'

export const type = 'GET_FERIADOS';

const getFeriadosAction = () => {

       

        return async (dispatch) => {
            try{
                const server_host = process.env.REACT_APP_API+configfront.EOP_API;
                const response =  await  axios.get(server_host);
                dispatch( { type, payload: response.data } );
            }
            catch(err){
                return  (dispatch) => {
                    dispatch( { type, error: err } ) 
                }
            }
        }
        
}


export default getFeriadosAction;