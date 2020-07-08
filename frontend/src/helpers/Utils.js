import moment from 'moment/moment.js';
import 'moment/locale/es';

//Formatear para la vista.
export function TiposFeriados(tipo) {

    switch(tipo){
        case 'inamovible':
            return 'Inamovible';
        case 'nolaborable':
            return 'No Laborable';
        case 'trasladable':
            return 'Trasladable';
        case 'puente':
            return 'Puente';
        
        default:return ''
    }

}

//Array estatico 12...para agrupar segun mes.
export function Agrupar(feriados) {

   let meses = [[],[],[],[],[],[],[],[],[],[],[],[]];

   for(let f of feriados){

        f = Formatear(f);

        switch(f.mes){
            case 1:
                meses[0].push(f);
                break;
            case 2:
                meses[1].push(f);
            break;
            case 3:
                meses[2].push(f);
                break;
            case 4:
                meses[3].push(f);
                break;
            case 5:
                meses[4].push(f);
                break;
            case 6:
                meses[5].push(f);
                break;
            case 7:
                meses[6].push(f);
                break;
            case 8:
                meses[7].push(f);
                break;
            case 9:
                meses[8].push(f);
                break;
            case 10:
                meses[9].push(f);
                break;
            case 11:
                meses[10].push(f);
                break;
            case 12:
                meses[11].push(f);
                break;
            
            default:return ''
        }
   }
   return meses;
}

//Meses y Dias Capitalizados.
export function Formatear(f) {

    moment.locale('es');
    let anio_actual = new Date().getFullYear();
    if(f.original){
        let original_arr = f.original.split('-');
        let original_str = (moment(`${original_arr[1]}/${original_arr[0]}/${anio_actual}`, 'MM-DD-YYYY').format('dddd DD'));
        f.original_str = original_str.charAt(0).toUpperCase() + original_str.slice(1);
    }
    let dia_str =  (moment(`${f.mes}/${f.dia}/${anio_actual}` , 'MM-DD-YYYY').format('dddd'));
    f.dia_str = dia_str.charAt(0).toUpperCase() + dia_str.slice(1);
    let mes_str = (moment(`${f.mes}/${f.dia}/${anio_actual}` , 'MM-DD-YYYY').format('MMMM'));
    f.mes_str = mes_str.charAt(0).toUpperCase() + mes_str.slice(1);
    f.tipo_str = TiposFeriados(f.tipo);
    return f;
}
