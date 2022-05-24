$('#drawPolygon').click((e) => {
    getApi("/getPolygon")
        .then(res => {
            console.log(res)
            let polygonArr = []
            let polygonNo = []
            for (let i = 0; i < res.length; i++) {
                polygonArr.push(res[i].polygonCoordinate)
                polygonNo.push(res[i].polygonNo)
            }

            let feature = []
            for (let i = 0; i < polygonArr.length; i++) {
                feature[i] = new ol.format.WKT().readFeature(polygonArr[i])
            }
            console.log(feature[0])

            let featureSource = new ol.source.Vector({
                attributions: [...polygonNo],
                features: [...feature]
            })

            let featureLayer = new ol.layer.Vector({
                source: featureSource
            })
            map.addLayer(featureLayer)

        }).catch(error => console.log(error))
})