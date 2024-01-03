import { useQuery } from "@tanstack/react-query";
import useAxiosDefault from "./useAxiosDefault";






const useAllContacts = () => {
       const axiosDefault = useAxiosDefault()
    
    const { data:allContacts , isPending , isLoading , refetch } = useQuery({
        queryKey:["allContacts"],
        queryFn : async()=>{
            const response = await axiosDefault.get(`/contacts`);
            return response.data

        },
       
    
    })
    
    if( isPending){
        return(
            <span className="fixed top-[50vh] left-[45vw] loading loading-spinner text-secondary"></span>
        )
    }
    
    return {allContacts , isPending , isLoading , refetch}
};

export default useAllContacts;