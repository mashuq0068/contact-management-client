import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { FaEdit, FaTrash, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosDefault from '../../Hooks/useAxiosDefault';

import { AiTwotoneMail } from "react-icons/ai";

const Contact = ({ contact, refetch }) => {
    const axiosDefault = useAxiosDefault()
    const [dropdownVisible, setDropdownVisible] = useState(false);
    console
    const dropdownRef = useRef(null);
    const handleToggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleEdit = () => {
        // Adding  edit logic here
        Swal.fire({
            title: "Submit updated contact information",
            html: `
              <form id="contact-form ">
                <div  class="swal2-input-group md:flex justify-start items-center gap-1 ">
                  <label for="name" class="swal2-input-label text-base custom-label ">name:</label>
                  <input value="${contact?.name || ''}" type="text" id="name" class="swal2-input custom-input    text-base" required>
                </div>
          
                <div class="swal2-input-group md:flex justify-start items-center gap-1">
                  <label for="email" class="swal2-input-label custom-label text-base text-left">Email : </label>
                  <input value="${contact?.email || ''}" type="email" id="email" class="swal2-input custom-input    text-base">
                </div>
          
                <div class="swal2-input-group md:flex justify-start items-center gap-1">
                  <label for="mobile" class="swal2-input-label custom-label text-base">Phone number:</label>
                  <input value="${contact?.phone || ''}" type="number" id="mobile" class="swal2-input custom-input    text-base" required>
                </div>
          
                <div class="swal2-input-group md:flex justify-start items-center gap-1">
                  <label for="address" class="swal2-input-label custom-label text-base">Address:</label>
                  <input value="${contact?.address || ''}" type="text" id="address" class="swal2-input custom-input    text-base" required>
                </div>
          
                <div class="swal2-input-group md:flex justify-start items-center gap-1">
                  <label for="profilePicture" class="swal2-input-label custom-label text-base">Profile picture URL:</label>
                  <input value="${contact?.profilePicture || ''}" type="text" id="profilePicture" class="swal2-input custom-input    text-base" required>
                </div>
              </form>
            `,
            showCancelButton: true,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                // Handle form submission here
                const name = Swal.getPopup().querySelector("#name").value;
                const email = Swal.getPopup().querySelector("#email").value;
                const mobile = Swal.getPopup().querySelector("#mobile").value;
                const address = Swal.getPopup().querySelector("#address").value;
                const profilePicture = Swal.getPopup().querySelector("#profilePicture").value;

                // Performing any validation or API calls as needed
                const contactInfo = { name, email, mobile, address, profilePicture }
                // Returning an object with the collected data
                return contactInfo;
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            const contactInfo = {
                name: result.value.name,
                email: result.value.email,
                phone: result.value.mobile,
                address: result.value.address,
                profilePicture: result.value.profilePicture
            }
            if (result.isConfirmed) {
                axiosDefault.patch(`/contacts/${contact?._id}`, contactInfo)
                    .then(res => {
                        if (res?.data?.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Contact information updated",
                                html: `
                                <div className=" space-y-3">
                                  <p className="mb-5">Name: ${result.value.name}</p>
                                  <p>Email: ${result.value.email}</p>
                                  <p >Phone number: ${result.value.mobile}</p>
                                  <p>Address: ${result.value.address}</p>
                                  <p>Profile picture URL: ${result.value.profilePicture}</p>
                                  </div>
                                `,
                            });
                        }
                    })

            }
        });



    };

    const handleDelete = () => {
        // Add your delete logic here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this contact!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosDefault.delete(`/contacts/${contact?._id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            refetch()

                            Swal.fire(
                                'Deleted!',
                                'Contact has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
        console.log('Delete clicked');
    };

    const handleMarkAsFavorite = () => {
        // Adding  mark as favorite logic here
        axiosDefault.patch(`/contacts/markedFavorite/${contact?._id}`)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Marked!',
                        'You successfully marked the contact as favorite',
                        'success'
                    )
                }
            })

        console.log('Mark as favorite clicked');
    };
    const handleUnMarkAsFavorite = () => {
        // Adding unMark from favorite logic here
        axiosDefault.patch(`/contacts/unMarkedFavorite/${contact?._id}`)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Removed!',
                        'You successfully removed the contact from favorite',
                        'success'
                    )
                }
            })
        console.log('Mark as favorite clicked');
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    return (


        <div className="mx-auto relative drop-shadow-xl shadow-xl right-0 mt-2 w-60">
            <div className="bg-white rounded lg:h-full overflow-hidden shadow-lg">
                {/* blue color div */}
                <div className="text-center  mx-auto p-6 bg-gradient-to-r  from-[#3490dc] to-[#6574cd] border-b">
                    {/* profile image */}
                    <div className='profile-picture mx-auto'>
                        <img
                            className='rounded-profile'
                            src={contact?.profilePicture}
                            alt='Invalid Image Link'

                        />

                    </div>
                    {/* name */}
                    <p className="pt-2 font-semibold  w-full text-gray-50">{contact?.name}</p>
                    {/* email */}
                    {/* <p className="text-sm text-gray-100 ">{contact?.email}</p> */}
                    {/* manage contact */}
                    <div className="relative mt-3 inline-block text-left" ref={dropdownRef}>
                        <button
                            onClick={handleToggleDropdown}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 focus:outline-none"
                        >
                            Manage your Contact
                        </button>
                        {dropdownVisible && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    {/* edit */}
                                    <button
                                        onClick={handleEdit}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    >
                                        <FaEdit className="inline-block mr-2" />
                                        Update
                                    </button>
                                    {/* delete */}
                                    <button
                                        onClick={handleDelete}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    >
                                        <FaTrash className="inline-block mr-2" />
                                        Delete
                                    </button>
                                    {/* favorite */}

                                    {
                                        <div>

                                            {contact?.isFavorite ? <button
                                                onClick={handleUnMarkAsFavorite}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            >
                                                <FaStar className="inline-block text-amber-500 mr-2" />
                                                Remove  Favorite
                                            </button> :
                                                <button
                                                    onClick={handleMarkAsFavorite}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                >
                                                    <FaStar className="inline-block mr-2" />
                                                    mark as favorite
                                                </button>}
                                        </div>
                                    }

                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* white color div */}
                <div className="border-b">
                    {/* address */}
                    <div >
                        <a className="px-4 py-2 hover:bg-gray-100 items-center flex">
                            <div className="text-green-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Address
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{contact?.address}</p>
                            </div>
                        </a>
                    </div>
                    {/* email */}
                    <div >
                        <a className="px-4 py-2 hover:bg-gray-100 items-center flex">
                            <div className="text-gray-800">
                            {/* <SiMinutemailer /> */}
                            <AiTwotoneMail />


                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Email
                                </p>
                                <p className="text-xs mt-1 text-gray-500">
                                    {contact?.email}
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* phone */}
                    <div >
                        <a className="px-4 py-2 hover:bg-gray-100 items-center flex">
                            <div className="text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Phone Number
                                </p>
                                <p className="text-xs mt-1 text-gray-500">
                                    {contact?.phone}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="">
                  <button href="#" className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="h-4 w-4 text-gray-800 fill-current animate-spin"
                        width="32"
                        height="32"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
                        ></path>
                      </svg>{" "}
                      Logout
                    </p>
                  </button>
                </div> */}
            </div>
            {/* star icon for marked as favorite cards */}
            <div>
                {contact?.isFavorite && <FaStar className="inline-block text-amber-400 mr-2 absolute top-3 right-3" />}         </div>
        </div>





    );

};
Contact.propTypes = {
    contact: PropTypes.object,
    refetch: PropTypes.func
}

export default Contact;