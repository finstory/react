
import axios from 'axios';
import { get_list } from './homeSlice';
export const getList = (mensaje = "cargando lista") => {
    console.log(mensaje); //* Opcional!
    return async (dispatch) => {
        axios.get(`http://localhost:3001/dogs`)
            .then(resp => {
                dispatch(get_list(resp.data));
            });

    };
}
