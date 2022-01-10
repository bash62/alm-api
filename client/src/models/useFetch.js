import {useEffect, useState } from 'react';
import Axios from "axios";



function useFetch(url) {

    const [data,setData] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {

        setLoading(true);
        Axios.get(url).then((res) => {
            setData(res.data);
        }).catch((err)=>{
            setError(err);
        }).finally( () => {
            setLoading(false);
        });
    
    }, [url]);

    return {data, loading, error};
}


export default useFetch;