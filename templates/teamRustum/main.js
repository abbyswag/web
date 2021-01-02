const headline = document.querySelector('.news-headline')
let id = 300
setInterval(()=>{
	loadNews(id)
	id++
},5000)

function loadNews(id){
	fetch(`https://community-hacker-news-v1.p.rapidapi.com/item/${id}.json?print=pretty`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
		"x-rapidapi-key": "534873aae7mshaa644cdfd679fa6p129344jsn9cc4701c89f3"
	}
	})
	.then(response => response.json())
	.then((data)=>{
		console.log(data)
		headline.innerHTML = `${data.title||data.text}, Source : <a href="${data.url}" 
		style="color: blue;font-weight:600;">Click Here</a>`
	})
	.catch(err => {
		console.log(err);
	});
}

const header = document.querySelector('.header')
window.addEventListener('scroll',()=>{
	header.style.background = '#bbb5c6'
})

