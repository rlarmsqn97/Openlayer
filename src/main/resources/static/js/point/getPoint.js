let pointArr = []
getPoint = () => {
    getApi("/getCoordinate")
        .then(res => {
          for(let i=0; i < res.length; i++) {
              pointArr.push(res[i].pointCoordinate)
          }
          let feature = []
            for(let i=0; i < pointArr.length; i++){
                feature[i] = new ol.format.WKT().readFeature(pointArr[i])
            }
            let featureSource = new ol.source.Vector({features: [...feature]})

            let featureLayer = new ol.layer.Vector({
                source: featureSource
            })

            map.addLayer(featureLayer)
        }).catch(error => {
            console.log(error)
    })
}

$('#getPoint').click(() => {
    getPoint()
})

