import { VscSaveAs } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const AddContacts = () => {
    const navigate = useNavigate()
    return (
        <div className="lg:w-[40vw] md:px-0 px-5 md:py-0 py-5 rounded-md md:drop-shadow-2xl md:shadow-2xl bg-white mx-auto md:w-[70vw]  w-[90vw]">
        {/* form of add user */}
           <form   className="md:card-body lg:drop-shadow-xl  w-full h-auto">
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
                                      <input type="text" name="name" placeholder="Address" className="input  input-bordered" required />
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