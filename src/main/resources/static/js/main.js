//타일레이어 생성하기
var viewLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
    })
});

let baseLayer = new ol.layer.Tile({source : new ol.source.OSM()})

var view = new ol.View({
    center: ol.proj.transform([127, 37.5],'EPSG:4326','EPSG:3857'),
    zoom: 2,
});

var polyVector = new ol.layer.Vector({
    source: new ol.source.Vector()
})

// gif layer
const iconFeature = new ol.Feature({
    geometry : new ol.geom.Point([100, 50]),
})

const vectorSource = new ol.source.Vector({
    features : [iconFeature]
})

const vectorLayer = new ol.layer.Vector({
    source : vectorSource
})

const rasterLayer = new ol.layer.Tile({
    source : new ol.source.Stamen({
        layer: 'terrain'
    })
})

// const raster = new ol.layer.Tile({
//     source: new ol.source.OSM(),
// });
//
const source = new ol.source.Vector({wrapX: false});

const vector = new ol.layer.Vector({
    source: source,
});

var map = new ol.Map({
    target: "map",
    layers: [baseLayer,viewLayer,vector, vectorLayer],
    view: view,
    // interactions: ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom()])
});