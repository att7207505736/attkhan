import axios from "axios";
import { Dispatch } from "redux";
import { CityTypes, CITY_NAME_LOADING, CITY_NAME_SUCCESS,CITY_NAME_FAIL } from "../Types/CityTypes";

const getCitys = ()=>{
    return async(dispatch:Dispatch<CityTypes>)=>{ 
        dispatch({
            type:CITY_NAME_LOADING,
            loading:false,
            messege:"",
            citys:[]
        })
    try {
        const res = await axios.get("https://www.w3schools.com/angular/customers.php");
        const { data} = res;
        dispatch({
            loading:true,
            messege:"",
            citys:data,
            type:CITY_NAME_SUCCESS
        })

    }catch(err){
        dispatch({
            loading:true,
            messege:err.messege,
            citys:[],
            type:CITY_NAME_FAIL
        })
    }
    
    }
};
export default getCitys;