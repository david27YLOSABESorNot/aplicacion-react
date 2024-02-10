

export const getGifs = async(onlyCategory) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=vfgsTclIP8ZUEMTgq6okaC8E4722NzVq&q=${onlyCategory}&limit=20`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map( dat => ({
        title: dat.title,
        image: dat.images.downsized_medium.url,
        id: dat.id
    }))
    
    return gifs;
}