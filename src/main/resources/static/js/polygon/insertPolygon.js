insertPolygon = () => {
    let features = [];
    let wkt = new ol.format.WKT();
    for(let i=0; i<vector.getSource().getFeatures().length; i++){
        features[i] = wkt.writeGeometry(vector.getSource().getFeatures()[i].getGeometry())
    }
    let data = []
    for(let i=0; i<features.length; i++){
        if(!features[i].includes("POINT")) {
            data[i] = {polygonCoordinate: features[i]}
        }
    }

    data = data.filter(function(item) {
        return item !== null && item !== undefined && item !== ''
    })

    const url = "/polygon"
    postApi(url, data)
        .then(()=> console.log("폴리곤 저장 성공"))
        .catch(error => console.log(error))
}

$('#savePolygon').click(() => {
    insertPolygon();
})