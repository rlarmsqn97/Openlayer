const url = 'http://localhost:8081/geoserver/cite/wms'

const layer = new ol.layer.Tile({
    source : new ol.source.TileWMS({
        url : url,
        params : {
            'VERSION' : '1.1.0',
            'LAYERS' : 'cite:lsmd_cont_ldreg_11740',
            // 'BBOX' : [209536.140625, 446036.53125, 216205.765625, 453190.0],
            'SRS' : 'EPSG:5174',
            'FORMAT' : 'image/png'
        },
        serverType : 'geoserver'
    })
})

const gangdongLayer = layer

const gangnamLayer = new ol.layer.Tile({
    source : new ol.source.TileWMS({
        url : url,
        params : {
            'VERSION' : '1.3.0',
            'LAYERS' : 'cite:lsmd_cont_ldreg_11680',
            // 'BBOX' : [200638.890625, 439288.5, 210968.9375, 448221.875],
            'SRS' : 'EPSG:5174',
            'FORMAT' : 'image/png'
        },
        serverType : 'geoserver'
    })
})

const gangbokLayer = new ol.layer.Tile({
    source : new ol.source.TileWMS({
        url : url,
        params : {
            'VERSION' : '1.3.0',
            'LAYERS' : 'cite:lsmd_cont_ldreg_11305',
            // 'BBOX' : [200638.890625, 439288.5, 210968.9375, 448221.875],
            'SRS' : 'EPSG:5174',
            'FORMAT' : 'image/png'
        },
        serverType : 'geoserver'
    })
})

const administrationLayer = new ol.layer.Tile({
    source : new ol.source.TileWMS({
        url : url,
        params : {
            // 'VERSION' : '1.1.0',
            'LAYERS' : 'cite:lsmd_adm_sect_umd_11',
            // 'BBOX' : [934850.0, 1936513.875, 972252.8125, 1967138.75],
            // 'SRS' : 'EPSG:5179',
            // 'FORMAT' : 'image/png'
        },
        serverType : 'geoserver'
    })
})