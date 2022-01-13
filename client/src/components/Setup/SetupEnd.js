import React, { useEffect, useState,useCallback } from "react";
import SetupBackground from "./SetupBackground";
import SetupLoading from "./SetupLoading";
import Captcha from "../Captcha";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

const SetupEnd = ({ ...props }) => {
  const [w, setLang] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState("");
 

  useEffect(() => {
    setLoading(true);
    if (props.lang !== undefined && Object.entries(props.lang).length > 0) {
      setLoading(false);
      setLang(props.lang);
    }
    if(verified){
      setVerified(false);
      props.reload(true);
    }
  }, [props]);






  if (loading) {
    return <SetupLoading />;
  }

  return (
    <div className="w-full bg-gray-500 h-full fixed items-center flex justify-center content-center ">
      <div className="z-30 flex flex-col h-auto rounded-xl mx-6  ">
        <div className="flex justify-center ">
          <div className=" text-center block mx-8 flex z-30 text-2xl md:text-3xl xl:text-5xl block capitalize">
            Bienvenue, {props.user.ingame.username}{" "}
          </div>
          <img
            className=" w-12 h-12 xl:w-16 xl:h-16  "
            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          />
        </div>
        <div className=" text-center text-xl mx-8 my-8 text-gray-500 flex justify-center  ">
          <div>{w.SETUP_TEXT}</div>
        </div>
        <div className="flex text-center justify-center">
        <GoogleReCaptchaProvider
               reCaptchaKey="6LdnNQ4eAAAAADEpb3SFTfR5wTWCKMABlvEkux4T"
             >
              <Captcha setVerified={setVerified} setLoading={setLoading}/>
      </GoogleReCaptchaProvider>

        </div>
      </div>

      <SetupBackground />



    </div>
  );
};

export default SetupEnd;
