mapboxgl.accessToken = 'pk.eyJ1IjoiYWFvd2duZSIsImEiOiJjanNiY25lZ3gwOHRsM3ptdTg0YWo0ZHV5In0.kmQtdkgoe3tk7ZOMKgcyXQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-111.8766, 42.0963], 
zoom: 9
});
map.addControl(new mapboxgl.NavigationControl());