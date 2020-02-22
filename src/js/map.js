let map;

DG.then(function() {
  map = DG.map('map', {
    center: [59.938563, 30.322999],
    zoom: 15,
    // dragging: false,
    scrollWheelZoom: false,
    fullscreenControl: false
  });
  const myIcon = DG.icon({
    iconUrl: 'img/map-icon.svg',
    iconSize: [40, 66]
  });
  DG.marker([59.938563, 30.322999], { icon: myIcon }).addTo(map);
});
