fetch(`https://newsapi.org/v2/everything?q=Tamil nadu Politics&from=${yr}-0${month}-${date}&sortBy=publishedAt&apiKey=${API_KEY}`).then((response)=> {return respone.json()}).then((data)=>{
    console.log(data.articles)})