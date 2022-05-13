// 지도 클릭 이벤트
const coordUrl = "/coordinate"

map.on('singleclick', function(e) {
    let coordinate = e.coordinate
    let lon = coordinate[0]
    let lat = coordinate[1]
    let data = {lon : lon, lat: lat}
    let json = new ol.format.GeoJSON().writeFeatures(vector.getSource().getFeatures())
    console.log(json)
    // addMarker(lon, lat)
    fetch(coordUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    }).then(() => console.log())
})

window.onload = function() {
    addInteraction();
}


// mapView.on('singleclick', function(evt) {
//     let container = document.createElement('div');
//     container.classList.add('ol-popup-custom');
//     let content = document.createElement('div');
//     content.classList.add('popup-content');
//     container.appendChild(content);
//     document.body.appendChild(container);
//     var coordinate = evt.coordinate; // 클릭한 지도 좌표
//     content.innerHTML = '<span>' + '한글(KOR)입니다.' + '</span>';
//     var overlay = new ol.Overlay({
//         element: container,
//         //autoPan: true,
//         //autoPanAnimation: {
//         //  duration: 250
//         //}
//       });
//     mapView.addOverlay(overlay);
//     overlay.setPosition(coordinate);
// });


$('#gangdong').click(function(a) {
    map.addLayer(gangdongLayer);
})

$('#gangnam').click(function() {
    map.removeLayer(gangdongLayer)
    map.addLayer(gangnamLayer);
})

$('#gangbok').click(function() {
    map.addLayer(gangbokLayer);
})

$('#administration').click(function(t) {
    console.log(t)
    map.addLayer(administrationLayer);
})
// mapView.on("pointermove", function(e) {
//
// })
