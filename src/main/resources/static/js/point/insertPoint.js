insertPoint = () => {
    let features = [];
    let wkt = new ol.format.WKT();
    for(let i=0; i<vector.getSource().getFeatures().length; i++){
        features[i] = wkt.writeGeometry(vector.getSource().getFeatures()[i].getGeometry())
    }
    console.log("features : "+features)
    let data = []
    for(let i=0; i < features.length; i++) {
        if(!features[i].includes("POLYGON")) {
                data[i] = {pointCoordinate: features[i]}
        }
    }

    data = data.filter(function(item) {
        return item !== null && item !== undefined && item !== ''
    })

    console.log(data)
    const url = "/point"
    postApi(url,data)
        .then(() => console.log("점 저장 성공"))
        .catch(error => console.log(error))
}

$('#savePoint').click(() => {
    insertPoint();
})