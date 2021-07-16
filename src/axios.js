import axios from "axios";

//getting the details of the product using given json data
export function GetDetails(){
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
}