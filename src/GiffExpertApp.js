import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GigGrid from './components/GigGrid';


const GiffExpertApp=()=>{

    const categoriesList = ['HOLA'];

    const [categories, setCategories] = useState(categoriesList);
    // const handleAdd =()=>{
    //     // setCategories(categories.concat('PokemonGo') )
        
        
    //     setCategories([...categories, 'PokemonGo'] )
        
    // }


    return(
        <>
        <h2 className='Title'>Buscador Giff </h2>
        <AddCategory  setCategories={setCategories}/>
        <hr></hr>
        
        <ol className='content'>
            {
                categories.map(category=>
                    <GigGrid key={category}
                             category={category}            
                    />
                    )
            }
        </ol>
        </>
    )
}


export default GiffExpertApp;