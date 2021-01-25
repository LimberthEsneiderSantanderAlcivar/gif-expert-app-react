//import React, { useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
    
    const {loading} = useFetchGifs();
    console.log(data, loading);
    /* const [images, setImages] = useState([]);

    useEffect (()=>{
        getGifs(category)
            .then(setImages);
    }, [category]) */

    

    return (
        <>
            <h3>{category}</h3>   
            {loading ? 'Cargando...' : 'Data Cargada'}
{/*             <div className="card-grid">
                    {                    
                        images.map((img)=>(
                            <GifGridItem 
                                key ={img.id}
                                {...img}
                            />
                        )) 
                    }
            </div> */}
        </>
    )
}

export default GifGrid
