import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories})=>{
    const [inputValue, setInputValue]= useState('');
    const handleInput =(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit =(e)=>{
        if(inputValue.trim().length > 2){

            setCategories(cate =>[inputValue, ...cate ]);
            setInputValue('');
        let div = document.querySelector('.content');
        let div2 = document.getElementsByClassName('card-grid');
            
                if (div2[1] != null) {
                    
                    div.removeChild(div2[1])      
                }
        }
      
       
        e.preventDefault();
    }

    return(
    
         <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInput}
            />
         </form>   
        

    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired

}


export default AddCategory;