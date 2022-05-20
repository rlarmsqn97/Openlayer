const url = 'http://localhost:8081/geoserver/cite/wms'

const layer = (layer) => new ol.layer.Tile({
    source : new ol.source.TileWMS({
        url : url,
        params : {
            'VERSION' : '1.1.0',
            'LAYERS' : layer,
            // 'BBOX' : [209536.140625, 446036.53125, 216205.765625, 453190.0],
            'SRS' : 'EPSG:5174',
            'FORMAT' : 'image/png'
        },
        serverType : 'geoserver'
    })
})

const gangdongLayer = layer('cite:lsmd_cont_ldreg_11740')

const gangnamLayer = layer('cite:lsmd_cont_ldreg_11680')

const gangbokLayer = layer('cite:lsmd_cont_ldreg_11305')

const administrationLayer = layer('cite:lsmd_adm_sect_umd_11')

$('#gangdong').click(function(a) {
    map.addLayer(gangdongLayer);
})

$('#gangnam').click(function() {
    map.removeLayer(gangdongLayer)
    map.addLayer(gangnamLayer);
})

$('#gangbok').click(function() {
    map.addLayer(gangbokLayer);
})

$('#administration').click(function(t) {
    console.log(t)
    map.addLayer(administrationLayer);
})