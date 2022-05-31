const get_long_lat_btn= document.getElementById('get_long_lat_btn');
const result_longitude= document.getElementById('result_longitude');
const result_latitude= document.getElementById('result_latitude');

get_long_lat_btn.addEventListener('click', getAPI);


let endPoint = 'http://api.open-notify.org/iss-now.json';

    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data => {
        result_longitude.innerHTML= data.iss_position.longitude;
        result_latitude.innerHTML= data.iss_position.latitude;
    });
}