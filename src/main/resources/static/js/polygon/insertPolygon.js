insertPolygon = () => {
    let features = [];
    let wkt = new ol.format.WKT();
    for(let i=0; i<vector.getSource().getFeatures().length; i++){
        features[i] = wkt.writeGeometry(vector.getSource().getFeatures()[i].getGeometry())
    }
    let data = []
    for(let i=0; i<features.length; i++){
        data[i] = {polygonCoordinate : features[i]}
    }
    console.log(data)
    const url = "/polygon"
    postApi(url, data)
        .then(()=> console.log("폴리곤 저장 성공"))
        .catch(error => console.log(error))
}

$('#savePolygon').click(() => {
    insertPolygon();
})