import { useFetchGifs } from "../hooks/useFetchGifs"
import { SingleGift } from "./SingleGift";


export const GiftGrid = ({onlyCategory}) => {

    const {images, isLoading} = useFetchGifs(onlyCategory);



    return (
        <>
            <h3 className='category-title'>{onlyCategory}</h3>

            <div className='card-grid'>

                {
                    images.map( image => (
                        <SingleGift
                            key={image.id}
                            {...image}
                        />
                    ))
                }                
            </div>



        </>
    )
}


