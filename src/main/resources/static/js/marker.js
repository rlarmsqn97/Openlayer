function addMarker(lon, lat) {
    let feature = new ol.Feature({
        geometry: new ol.geom.Point([lon,lat])
    })

    // 마커 스타일 설정
    let style = new ol.style.Style({
        image: new ol.style.Icon({
            anchor:[0.5,20],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'http://map.vworld.kr/images/ol3/marker_blue.png'
        })
    })

    feature.setStyle(style)

    // 마커 레이어에 들어갈 소스 생성
    let source = new ol.source.Vector({
        features: [feature]
    })

    // 마커 레이어 생성
    let layer = new ol.layer.Vector({
        source: source,
        name: 'Marker'
    })

    // layer의 Z-index 설정
    layer.setZIndex(6)

    // 지도에 마커 추가
    map.addLayer(layer)

}