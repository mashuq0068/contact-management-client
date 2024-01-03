import { VscSaveAs } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import useAxiosDefault from "../../Hooks/useAxiosDefault";
import Swal from "sweetalert2";

const AddContacts = () => {
    const navigate = useNavigate()
    const axiosDefault = useAxiosDefault()
    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const mobile = form.mobile.value 
        const email = form.email.value 
        const address = form.address.value 
        const profilePicture = form.profilePicture.value
        const contactInfo = {
            name : name,
            phone : mobile,
            email : email,
            address: address,
            profilePicture : profilePicture

           
            
        }
        if(contactInfo) {
            console.log(contactInfo)
        //   save contact to server
            axiosDefault.post('/contacts', contactInfo)
              .then(res => {
                if (res?.data?.insertedId) {
                //   if successful showing modal
                  Swal.fire(
                    'Successful!',
                    'You have successfully added the user',
                    'success'
                  )
                  .then(result => {
                    // if modal confirmed navigate to dashboard
                    if (result.isConfirmed) {
                      navigate('/allContacts');
                    }
                  });
                }
              })
              // handle error to save user in server
              .catch(error => {
                console.error('Error:', error);
              });
          }
    }
    return (
        <div className="lg:w-[40vw] md:px-0 px-5 md:py-0 py-5 rounded-md md:drop-shadow-2xl md:shadow-2xl bg-white mx-auto md:w-[70vw]  w-[90vw]">
        {/* form of add user */}
           <form  onSubmit={handleSubmit} className="md:card-body lg:drop-shadow-xl  w-full h-auto">
                                  {/* name */}
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text "> name</span>
                                      </label>
                                      <input type="text" name="name" placeholder="name" className="input  input-bordered" required />
                                  </div>
                                  {/* email */}
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text ">email (optional)</span>
                                      </label>
                                      <input type="email" placeholder="email" name="email" className="input  input-bordered"  />

                                  </div>
                                 {/* mobile */}
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text ">phone number</span>
                                      </label>
                                      <input type="number" placeholder="phone number" name="mobile" className="input  input-bordered" required />
                                  </div>
                                  {/* Address */}
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text ">Address</span>
                                      </label>
                                      <input type="text" name="address" placeholder="Address" className="input  input-bordered" required />
                                  </div>
                                  {/* profile picture */}
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text ">profile picture url</span>
                                      </label>
                                      <input type="text" name="profilePicture" placeholder="profile picture url" className="input  input-bordered" required />
                                  </div>
                                  
                                  {/* button div */}
                                  <div className="flex flex-row-reverse justify-between items-center mt-[5vh]">
                                      {/* save button */}
                                      <button className="btn hover:bg-[#af2b9e] bg-[#e944d3] text-white font-medium flex justify-center items-center gap-2">
                                      <input type="submit" className="" value="Save" />
                                      <VscSaveAs className="relative z-10"></VscSaveAs>
                                      </button>
                                      {/* cancel button */}
                                      <button onClick={()=>{navigate('/')}} className=" btn btn-ghost bg-gray-300">Cancel</button>
                                  </div>
                                  </form>
      </div>
    );
};

export default AddContacts;