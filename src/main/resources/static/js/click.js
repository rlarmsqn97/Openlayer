$('#drawPoint').click(() => {
    map.removeInteraction(draw);
    addInteraction('Point');
})

$('#drawingPolygon').click(() => {
    map.removeInteraction(draw);
    addInteraction('Polygon');
})


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

// mapView.on("pointermove", function(e) {
//
// })
