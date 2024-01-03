import useAllContacts from "../../Hooks/useAllContacts";
import Contact from "../Contact/Contact";

const AllContacts = () => {
    const {allContacts} = useAllContacts()
    console.log(allContacts)
    return (
        <div>
            {allContacts?.map(contact => <Contact key={contact?._id} contact={contact}></Contact>)}
        </div>
    );
};

export default AllContacts;