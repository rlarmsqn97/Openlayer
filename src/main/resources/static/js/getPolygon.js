let polygonArr = [];
$('#drawPolygon').click((e) => {
        getApi("/getPolygon")
        .then(res => {
                for(let i=0; i< res.length; i++){
                    polygonArr.push(res[i].polygonCoordinate)
                    console.log(polygonArr)
                }

                let feature;
                for(let i=0; i<polygonArr.length; i++) {
                    feature = new ol.format.WKT().readFeature(polygonArr[i])
                }
                let featureSource = new ol.source.Vector({features : [feature]})
                let featureLayer = new ol.layer.Vector({
                        source: featureSource
                    })
                // let multiPolygon = new ol.Feature({
                //     geometry: new ol.geom.MultiPolygon(
                //        [polygonArr]
                //     )
                // })
                //
                // featureSource.addFeature(multiPolygon)
                map.addLayer(featureLayer)
            }).catch(error => {console.log(error)})
})