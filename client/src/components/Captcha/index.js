import React, {useCallback, useEffect, useState} from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import Axios from "axios";


const Captcha = ({
    
    ...props
    
}) => {
    const [loading, setLoading] = useState(false);
    const verify = (token) => {
        Axios.post(
          "http://localhost:3001/api/user/update/setup/4",
          { token: token },
          { withCredentials: true }
        )
          .then((res) => {
            ;
            setLoading(true);

            props.setVerified(true);
            return;
          })
          .catch((err) => {
            console.log(err)
          });
      };

    const { executeRecaptcha } = useGoogleReCaptcha();

    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
       
        return;
      }

      
        const token = await executeRecaptcha('setup');
        verify(token)
    


      // Do whatever you want with the token
    }, [executeRecaptcha]);
  

    return(
        <div className="flex  text-center justify-center">
          <div className="px-12 mt-12 z-30 bg-indigo-400 text-white rounded-md hover:animate-pulse ">
            <button onClick={handleReCaptchaVerify} className=" text-2xl h-14">OK</button>
          </div>
        </div>

               
    )
}

export default Captcha;