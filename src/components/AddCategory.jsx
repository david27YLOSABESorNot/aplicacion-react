import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputCategory, setInputCategory] = useState('');

    const submitForm = (e) =>{
        e.preventDefault();
        
        if(inputCategory.trim().length <= 3) return;

        onNewCategory(inputCategory.trim());
        setInputCategory('');

    }

    return (
        <form  onSubmit={e => submitForm(e)}>
            
            <h2>Buscador de Gifs</h2>
            <input type="text" placeholder='Imagenes de BlackAdam' value={inputCategory} onChange={e => setInputCategory(e.target.value)} />
            
        </form>
    )
}

