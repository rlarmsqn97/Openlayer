let polygonArr = [];
$('#drawPolygon').click((e) => {
    getApi("/getPolygon")
        .then(res => {
            console.log(res)
            for (let i = 0; i < res.length; i++) {
                polygonArr.push(res[i].polygonCoordinate)
            }
            console.log(polygonArr)

            let feature = [];
            for (let i = 0; i < polygonArr.length; i++) {
                feature[i] = new ol.format.WKT().readFeature(polygonArr[i])
            }
            let featureSource = new ol.source.Vector({features: [...feature]})
            console.log(featureSource)

            let featureLayer = new ol.layer.Vector({
                source: featureSource
            })

            map.addLayer(featureLayer)
        }).catch(error => {
        console.log(error)
    })
})