$('#modify').click(() => {
    map.removeInteraction(draw);
    modifyCoordinate()
})

modifyCoordinate = () => {
    let select = new ol.interaction.Select()
    map.addInteraction(select)
    let modify = new ol.interaction.Modify({
        features: select.getFeatures()
    })
    map.addInteraction(modify)

    modify.on('modifyend', function(e){
        console.log(e)
        let features = e.features.getArray()
        console.log("features getProperties : "+ features[0].getProperties())
        let coord = features[0].getGeometry().getCoordinates()
        console.log("coord : "+coord)
        let wkt = new ol.format.WKT()
        console.log("wkt : " + wkt.writeFeature(features[0]))

        let data
        data = {polygonNo: 40, polygonCoordinate: wkt.writeFeature(features[0])}
        coordinate(data)
    })


}

coordinate = (data) => {
    const url = 'modifyFeature'
    putApi(url,data)
        .then(response => {
            console.log(response)
    }).catch(error => console.log(error))
}

