const accessKey = "MfBfMbO8gtPIQfKl7lzNJLMfxGfX569_PIa2BvJocGs";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    if (page == 1){
        searchResult.innerHTML = ""; 
    }
    const results = data.results;
    results.map((result) =>{
        const img = document.createElement("img");
        img.src = result.urls.small;

        const imglink = document.createElement("a");
        imglink.href = result.links.html;
        imglink.target = "blank";

        imglink.appendChild(img);
        searchResult.appendChild(imglink);

    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})