import axios from "axios";

const axiosDefault = axios.create({
    baseURL: "http://localhost:5000",
    
});
const useAxiosDefault = () => {
    return (
        axiosDefault
    );
};

export default useAxiosDefault;