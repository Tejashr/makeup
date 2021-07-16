import axios from "axios";

export function GetDetails(){
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
}