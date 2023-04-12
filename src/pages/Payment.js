import './Payment.css'
import { Link, useNavigate} from 'react-router-dom'
// import { useState,useEffect } from 'react';
// import Axios from 'axios';



const Payment = () => {
    return (
    <div className="payment-page-container">
      <Link to = '/Menu'><button className="buttonorb">
            Back
          </button>
      </Link>
    <h1 className="titlep">Payment</h1>
    <h2 className="title2">Scan QR Code</h2>
    <div className="qrcode-container">
    <img   src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.15752-9/338858345_759041509218183_7615128961182352104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGBY_vO6GWSmNcWt-eYkLIDMSh_GLmDDzExKH8YuYMPMY8Aj_4dMx24FZREZXvlrVpKN1mFWA1krjGNbRWTCDkd&_nc_ohc=-ou1TC4m2gkAX-8p_q5&_nc_ht=scontent.fbkk13-1.fna&oh=03_AdSDAVYvz0xZFQICkY6FiSrWO--63nW_GNSFNxAACgbhiw&oe=645A7629" 
           alt="QR Code"
           className="qrcode-image"
         />
    </div>
    {}

    <Link to = './Delete1'>
      <button className="button">
                Comfirm
      </button>
    </Link>
    
    
    </div>
    );
    };

export default Payment
