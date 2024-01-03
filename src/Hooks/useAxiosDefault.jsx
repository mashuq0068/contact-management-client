import axios from "axios";

const axiosDefault = axios.create({
    baseURL: "https://contact-management-server-indol.vercel.app",
    
});
const useAxiosDefault = () => {
    return (
        axiosDefault
    );
};

export default useAxiosDefault;