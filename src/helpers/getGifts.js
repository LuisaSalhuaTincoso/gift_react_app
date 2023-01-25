export const getGifs = async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KpzleUAdhv5EoVoSiI1QicfAjlwwhJCT&q=${category}&limit=20`;
    const rsp = await fetch(url);
    const {data} = await rsp.json();

    const gifts = data.map(img =>({
        id:img.id, 
        title:img.title,
        url:img.images.downsized_medium.url
     }))
     console.log(gifts);
    return gifts;
  }