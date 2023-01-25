import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange=({target})=>{
    setInputValue(target.value)

  }
  const onSubmit = (event)=>{
    event.preventDefault();
    const finalInput = inputValue.trim();

    if(finalInput.length<1)return;

    //first way
    //setCategories(categories =>[inputValue,...categories]);

    //Second way, like Vue.js
    onNewCategory(finalInput)
    setInputValue('')
  }

  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
        <input type="text" 
        placeholder="Buscar gifs" 
        onChange={onInputChange} 
        value={inputValue}/>
  
    </form>
    // <input type="text" 
    //     placeholder="Buscar gifs" 
    //     onChange={onInputChange} 
    //     value={inputValue}/>
  )
}
