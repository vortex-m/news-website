const API_KEY = "68ae949c526246209e058bfebde1472d"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener('load', () => {
    fetchNews("India")
})

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey = ${API_KEY}`)
    const data = await res.json();
    bindData = (data.articles);
}

function bindData(articles) {
    const container = document.getElementById('card-container');
    const newsCard = document.getElementById('tempelate-news-card');

    container.innerHTML = '';

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCard.contentEditable.cloneNode(true)
    
        container.appendChild(cardClone)
    })
}

function fillData(cardClone,article){
    const newsImg = cardClone.querySelector('#news-img')
    const newsTitle = cardClone.querySelector('#news-title')
    const newsSource = cardClone.querySelector('#news-source')
    const newsDesc = cardClone.querySelector('#news-disc')

    newsImg.src = article.urlToImage
    newsTitle.innerHTML = article.title
    newsDesc.innerHTML = article.description 
}