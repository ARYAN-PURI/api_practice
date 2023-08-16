let img=document.getElementsByClassName("img");
let title=document.getElementsByClassName("title");
let description=document.getElementsByClassName("discription");
let ratings=document.getElementsByClassName("ratings");
let btn=document.getElementById("btn");
let i=0;
img=Array.from(img);
title=Array.from(title);
description=Array.from(description);
ratings=Array.from(ratings);
const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21d34fa6a3mshe4c970e6d0058f3p190ddajsn61a977fbf711',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	async function report(i){
		let h=i+3;
    const response = await fetch(url, options);
	const result = await response.json();
    console.log(result[0]);
	let k=0;
    for(;i<h;i++){
    img[k].innerHTML=`<img src=${result[i].image} width=300px height=200px>`;
	title[k].innerHTML=`<b>TITLE:</b>${result[i].title}`;
	description[k].innerHTML=`<b>DESCRIPTION:</b>${result[i].description}`;
	ratings[k].innerHTML=`<b>RATINGS:</b>${result[i].rating}`;
	k++;
	 
    }
	}
    report(i)
	btn.addEventListener("click",()=>{
		i=i+2;
		report(i);


	})
} catch (error) {
	console.error(error);
}

