
let getdiv = document.getElementById('getdiv')
let getsearch=document.getElementById('news')
let get=()=>{
    
    fetch('https://newsapi.org/v2/everything?q=pakistan&from=2023-09-18&sortBy=publishedAt&apiKey=07142ca37e874613a21915661b62c9a0')
        .then(data => data.json())
        .then(data => {
            for (let i = 0; i < data.articles.length; i++) {
                getdiv.innerHTML += `
            <div class="card  m-3 p-5   op-lop" style="width: 18rem;">
      <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`}
        })
        .catch(err => console.log(err))
}





