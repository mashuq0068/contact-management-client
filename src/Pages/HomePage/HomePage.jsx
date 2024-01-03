import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";


const HomePage = () => {
const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setPageLoaded(true);
    }, 1500);
  }, []);
    return (

        <>
        {/* website opening phase */}
        <div className={`page-transition ${isPageLoaded ? 'loaded new-page-ani' : ''} flex justify-center items-center`}>
        <img
          className='w-[16%] animate-spin-once'
          src="https://multichannelworks.com/wp-content/uploads/2015/10/users.png"
          alt=""
        />
      </div>
        <div>
           <Banner></Banner>
           <Footer></Footer>
        </div>
        </>
    );
};

export default HomePage;