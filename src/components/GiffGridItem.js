import React from 'react'



const GiffGridItem=(img)=>{
   
    
   
    return(
        <>
        <div className='card animate__animated animate__bounce '>
            
            <img src={img.url} alt={img.title}/>
           
        </div>
        
        </>
    )
    
}


export default GiffGridItem;