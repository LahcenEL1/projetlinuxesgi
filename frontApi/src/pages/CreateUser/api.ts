import axios from "axios";


export const fetchMessage = async () : Promise<any[]> => {
    return (
        await axios.get(`http://localhost:8080/api/message`,{
    })
    ).data;

}

export const fetchUser= async (id:string) => {
    return (
        await axios.get(`http://localhost:8080/api/user/${id}`,{

    })
    ).data;

}