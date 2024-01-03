import useAllContacts from "../../Hooks/useAllContacts";

const AllContacts = () => {
    const {allContacts} = useAllContacts()
    console.log(allContacts)
    return (
        <div>
            this is all cOntacts
        </div>
    );
};

export default AllContacts;