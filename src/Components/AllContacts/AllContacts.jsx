import useAllContacts from "../../Hooks/useAllContacts";
import Contact from "../Contact/Contact";

const AllContacts = () => {
    const { allContacts, refetch } = useAllContacts()
    console.log(allContacts)
    return (
        <>
             <h1 className=" text-center mb-[5vh] 2xl:text-3xl md:text-2xl text-xl text-gradient font-bold">All contacts</h1>
            <div className=" grid lg:grid-cols-4 lg:p-12 md:gap-0 gap-[5vh] md:grid-cols-2 grid-cols-1">

                {allContacts?.map(contact => <Contact key={contact?._id} refetch={refetch} contact={contact}></Contact>)
                }


            </div>

            {allContacts?.length === 0 && <div className=" flex flex-col justify-center items-center ">
                <h1 className=" text-center -mt-[8vh] mb-[5vh] 2xl:text-3xl md:text-2xl text-xl text-gradient font-bold">Added no contact</h1>
                <img className='w-[80%] mx-auto md:w-[400px] 2xl:w-[600px]' src="https://cis.csuohio.edu/~sschung/gif/test3.gif" alt="" />
            </div>}
        </>
    );
};

export default AllContacts;