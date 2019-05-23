const renderShowNewsFeed = (newsArticles) => {
    let html = "";
    newsArticles.map(({
        title,
        description,
        urlToImage,
        publishedAt,
        url,
        author,
        content,
    }, idx) => {
        html +=
            `<div class="row mb-5">
            <div class="col-8">
                <h1 style="font-size: 25px;">${title}</h1>
                <h3 style="font-size: 15px; font-weight: 200;">${description}</h3>
                <h5 style="font-size: 12px;">${moment(publishedAt).startOf('hour').fromNow()}</h5>
                <a data-toggle="collapse" href="#collapse-${idx}" data-target="#collapse-${idx}">
                    Read more
                </a>
                <p class="collapse" id="collapse-${idx}">${content}</p>
            </div>
            <div class="col-4">
                <img src="${urlToImage}" style="display: inline-block; height: 120px; width: 100% ">
                <h6><a href="${url}">${author || 'Associated Press'}</a></h6>	
            </div>
        </div>`
        document.getElementById("main-news").innerHTML = html;
    })
    showNumberOfArticles(newsArticles);
}

const getShowData = async () => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe";
    const req = new Request(url);
    const response = await fetch(req);
    const { articles } = await response.json();
    renderShowNewsFeed(articles);
}

// 20 ariticles more
const renderShowNewsFeedMore = (newsArticlesMore) => {
    let html = "";
    newsArticlesMore.map(({
        title,
        description,
        urlToImage,
        publishedAt,
        url,
        author,
        content,
    }, idx) => {
        html +=
            `<div class="row mb-5">
            <div class="col-8">
                <h1 style="font-size: 25px;">${title}</h1>
                <h3 style="font-size: 15px; font-weight: 200;">${description}</h3>
                <h5 style="font-size: 12px;">${moment(publishedAt).startOf('hour').fromNow()}</h5>
                <a data-toggle="collapse" href="#collapse-${idx}" data-target="#collapse-${idx}">
                    Read more
                </a>
                <p class="collapse" id="collapse-${idx}">${content}</p>
            </div>
            <div class="col-4">
                <img src="${urlToImage}" style="display: inline-block; height: 120px; width: 100% ">
                <h6><a href="${url}">${author || 'Associated Press'}</a></h6>	
            </div>
        </div>`
        document.getElementById("load-more-btn").innerHTML = "No More News";
        document.getElementById("load-more").style.display = "block";
        document.getElementById("load-more").innerHTML = html;
    })
    showNumberOfArticles(newsArticlesMore);
}

const getShowDataMore = async () => {
    const urlMore = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-23&sortBy=publishedAt&apiKey=b06be0acad0b4144a1d85f5ea0b6588f";
    const reqMore = new Request(urlMore);
    const responseMore = await fetch(reqMore);
    const { articles } = await responseMore.json();
    renderShowNewsFeedMore(articles);
}

// number of articles
const showNumberOfArticles = (numberOfArticles) => {
    let totalArticles = 0;
    numberOfArticles.map(_ => totalArticles = numberOfArticles.length);
    document.getElementById("number-news").innerHTML = totalArticles;
}


getShowData();