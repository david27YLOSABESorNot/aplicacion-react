
export const SingleGift = ({title, image}) => {


    return (
        <div className='card'>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}
