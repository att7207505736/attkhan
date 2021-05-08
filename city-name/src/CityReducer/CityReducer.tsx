import City from "../model/City";
import { CityTypes, CITY_NAME_FAIL, CITY_NAME_LOADING, CITY_NAME_SUCCESS } from "../Types/CityTypes";


interface IState{
    loading:boolean;
    citys:City[];
    message: string;

}

const initialState:IState={
    loading:false,
    citys:[],
    message:""
}
const CityReducer=(state=initialState,action:CityTypes):IState=>{
    switch(action.type){
        case CITY_NAME_LOADING:
        case CITY_NAME_SUCCESS:
        case CITY_NAME_FAIL: 
        return{
            ...state,
            loading:action.loading,
            citys:action.citys,
            message:action.messege
        }    
        break;
        default:
            return state;
    }

};
export default CityReducer;