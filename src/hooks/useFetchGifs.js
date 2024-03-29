import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";





export const useFetchGifs = (onlyCategory) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async() => {
       
        const newImages = await getGifs(onlyCategory);
        setImages(newImages);
        setIsLoading(false);
    }



    useEffect( ()=>{
        getImages();
        
    }, [])




    return{
        images,
        isLoading
    }
}


