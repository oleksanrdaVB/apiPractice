const get_api_res_btn = document.getElementById('get_api_res_btn');
const result_title = document.getElementById('result_title');
const result_year = document.getElementById('result_year');
const result_director = document.getElementById('result_director');
const search_bar = document.getElementById('search_bar');

get_api_res_btn.addEventListener('click', getAPI);


let endPoint = 'http://www.omdbapi.com/?apikey=68e4d0f6&t=';

    function getAPI(){
        fetch(endPoint + search_bar.value, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        console.log(data);
        result_title.innerHTML="Title:" + data.Title;
        result_year.innerHTML="Year:" + data.Year;
        result_director.innerHTML="Director:" + data.Director;
    });
}