/**
 * 
 * 


 https://newsapi.org/v2/top-headlines?apiKey=e72c5b5057b942f69415809c35f9d00e&pageSize=20&page=2&country=us&category=general
 */
var allNews = [];

function getNews(pageSize = 20, page = 1, country = 'us', category = 'general', q = "") {
    console.log("x");
    return new Promise(function (ayhaga, solved) {
        var myNews = new XMLHttpRequest();
        myNews.open("GET", ` https://newsapi.org/v2/top-headlines?apiKey=e72c5b5057b942f69415809c35f9d00e&pageSize=${pageSize}&page=${page}&country=${country}&category=${category}&q=${q}`)
        myNews.send();
        // readystatechange
        myNews.addEventListener("readystatechange", function () {
            //myNews.readyState == 4 &&
            if (myNews.status == 200) {
                moreNews = JSON.parse(myNews.response).articles;
                console.log("getNews", moreNews);
                console.log({ moreNews });
                display(moreNews)
                ayhaga();
            }
            else {
                // console.log("error");
                solved();
            }

        });

    })

}








function display(allNews = []) {
    var html = "";
    let filterd = allNews.filter(ele => {
        return (ele.title && ele.description && ele.content)
    })
    console.log(
        { filterd }
    );
    if (filterd.length == 0) {
        console.log(0);
        html = `
            <div class="myPost">
            
            <h1 class="text-warning">no data founded</h1>

            
            </div>
            `
        document.querySelector('.allPosts').innerHTML = html;





    } else {
        for (var i = 0; i < allNews.length; i++) {
            html += `
            <div class="myPost">
            
             <a href="${allNews[i].url}" target="_blank"> 
                <img src="${allNews[i].urlToImage == null ? 'src="../icons/WhatsApp Image 2023-05-26 at 09.44.42 - Copy.jpg' : allNews[i].urlToImage}" class="w-100" alt="item">
            </a>
                <h3>${allNews[i].title}</h3>
                <p>${allNews[i].description}</p>
                <p>${allNews[i].content}</p>
            
            </div> 
            
            </div>
            `



        }

    }


    document.querySelector('.allPosts').innerHTML = html;
    // document.getElementsByClassName('.news').innerHTML = html;


}


function error() {
    console.log("Error");
}


const call = async () => {
    await getNews()
    // console.log({x1});
}

call()


// window.addEventListener("scroll",function(){
//     console.log("hello");
// })


$('#category').change(async () => {
    const country = $('#country').val()
    const category = $('#category').val()
    await getNews(20, 1, "us", category)
    console.log({ country, category });
})


// $('#search').change(async () => {
//     const country = $('#country').val()
//     const category = $('#category').val()
//     const search = $('#search').val()


//     await getNews(30, 1, country, category,search)
//     console.log({ country, category });
// })

$('#btn').on('click', async () => {
        const category = $('#category').val()
        const search = $('#search').val()


        await getNews(30, 1, "us",category,search)
        console.log({ country, category });

})