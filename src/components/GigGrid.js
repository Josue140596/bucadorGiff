import React from 'react';
import GiffGridItem from './GiffGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';


const GigGrid = ({category})=>{

 
    const {data:images,loading} = useFetchGifs(category);
    
    // useEffect( ()=>{
    //     getGifs(category)
    //         .then(img=> setImages(img))
    // }, [ category ])


    // Está la pusimos en una funcion "'"'helpers'"'"
    // const getGifs =async()=>{
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=qMGCLlaRbATaBYbS92Zll87PEirgaML3`
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map(img=>{
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })

       
    //     setImages(gifs);
        
    // }
  
   
  

     
   
   
  
    return(
       <>
        {loading && <div className='preloader'></div>}
        
        
        <div className='card-grid'>
        {images.map(img=>{
            
        

            return(<GiffGridItem key={img.id} {...img} />) 
        
            })}
            
            </div>
          
           
        </>
    )
}

export default GigGrid;