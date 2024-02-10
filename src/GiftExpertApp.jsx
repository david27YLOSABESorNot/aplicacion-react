import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

    const [category, setCategory] = useState([]); 

    const onAddCategory = (newCategory) => {

        if(category.includes(newCategory)) return;
        setCategory([newCategory, ...category]);

    }

    return (
        <div>
            <h1>Giphy App</h1>


            <AddCategory
                onNewCategory={ onAddCategory}
            />

            <ol>
                {category.map( onlyCategory => (
                    <GiftGrid
                        key={onlyCategory}
                        onlyCategory={onlyCategory}
                    />
                ))}
            </ol>

        </div>
    )
}
