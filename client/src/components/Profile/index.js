import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../models/useFetch";

//Components
import AppHeader from "../Header/AppHeader";
import NavHeader from "../Header/NavHeader";
import ProfileCards from "./ProfileCards";
// Explore : View that present user kit or passage.

const Profile = ({
    ...props
}) => {

  const { id } = useParams();

    // Load api Fetch 
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedIn,setLoggedIn] = useState(null);


  const {
    data: w,
    loading: l,
    error: e,
  } = useFetch("http://localhost:3001/api/client/lang/PROFILE/FR");

    useEffect(()=>{
        setLoading(true);
        if (props.user === "unauthorized") {
          setLoading(false);
        }
        
        else if (props.user !== null) {
          setLoading(false);
          setUser(props.user)
        }

    },[props])
    

    if(loading){
        return <div>loading...</div>
    }

  return(
    <div>
        <AppHeader lang={w.HEADER}/>
        <NavHeader lang={w.NAV} user={user}/>
        <ProfileCards/>
    </div>
)


}

export default Profile;