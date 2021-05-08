//hit the servers
//catch the positive response
//catch the error

import City from "../model/City";

//variables
export const CITY_NAME_LOADING:string="CITY_NAME_LOADING";
export const CITY_NAME_SUCCESS:string= "CITY_NAME_SUCCESS";
export const CITY_NAME_FAIL:string= "CITY_NAME_FAIL";

interface CityAsyns{
    loading:boolean;
    messege:string;
    citys:City[];
}
//interface
interface CityLoading extends CityAsyns{
    type: typeof CITY_NAME_LOADING;
}
interface CityLoadingSuccess extends CityAsyns{
    type: typeof CITY_NAME_SUCCESS;

}
interface CityLoadingFail extends CityAsyns{
    type: typeof CITY_NAME_FAIL;
}

export type CityTypes= CityLoading | CityLoadingSuccess | CityLoadingFail;