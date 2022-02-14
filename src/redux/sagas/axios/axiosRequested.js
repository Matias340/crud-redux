import axios from 'axios';

const url = "http://181.13.218.55/midasapi/api/aliquots";


export const axiosGetArticulos = async () => {
    try {
        const response = await axios.get(url);
        console.log(JSON.parse(response.data.data));
        return (JSON.parse(response.data.data));
    } catch (error) {
        throw error;
    }
}

//este seria un post
export const axiosCreateArticulos = async (articulos) => {
  try {
    let payload={
        id: 0,
        name: "string",
        percentage: 0,
        minimumAmount: 0,
        createdby: "admin",
        updatedby: "admin",
        status: 0,
        createddate: "2022-02-04T18:05:03.271Z",
        updateddate: "2022-02-04T18:05:03.271Z",
        obs: "string"
    }
     const response = await axios.post(url, payload);
     return (response);
  } catch (error) {
      throw error;
  }
}

//este es el delete
export const axiosDeleteArticulos = async (id) => {
    try {
       const response = await axios.delete(url + '/' + id);
       return (response);
    } catch (error) {
        throw error;
    }
  }

//este es el Update/put
export const axiosUpdateArticulos = async (id, info) => {
    try {
        let payload={
            id: Number.parseInt(id),
            name: info.name,
            percentage: info.percentage,
            minimumAmount: 0,
            createdby: "admin",
            updatedby: "admin",
            status: 1,
            createddate: "2022-02-04T14:27:22.415Z",
            updateddate: "2022-02-04T14:27:22.415Z",
            obs: ""
        }
       const response = await axios.put(url + '/' + id, payload);
       return (response);
    } catch (error) {
        throw error;
    }
  }
  
  export const axiosGetArticulosById = async (id) => {
    try {
     
        const response = await axios.get(url + '/' + id);
        return (response.data);
    } catch (error) {
        throw error;
    }
}  