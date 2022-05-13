const tileLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
});

const map = new ol.Map({
    layers: [tileLayer],
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 1,
    }),
});

const imageStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({color: 'black'}),
        stroke: new ol.style.Stroke({color: 'green', width: 1}),
    }),
});

const headInnerImageStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 2,
        fill: new ol.style.Fill({color: 'red'}),
    }),
});

const headOuterImageStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({color: 'blue'}),
    }),
});

const n = 10;
const omegaTheta = 30000; // Rotation period in ms
const R = 7e6;
const r = 4e6;
const p = 6e6;

tileLayer.on('postrender', function (event) { // tile레이어가 렌더링된 후
    const vectorContext = ol.render.getVectorContext(event);
    const frameState = event.frameState; // frameState.time = 1651623196610
    const theta = (2 * Math.PI * frameState.time) / omegaTheta; // 34591514.156987
    const coordinates = [];
    for (let i = 0; i < n; ++i) {
        const t = theta + (2 * Math.PI * i) / n;
        const x = (R + r) * Math.cos(t) + p * Math.cos(((R + r) * t) / r);
        const y = (R + r) * Math.sin(t) + p * Math.sin(((R + r) * t) / r);
        coordinates.push([x, y]);
    }
    const ar =  [[[0, 0], [14, 0]]]
    vectorContext.setStyle(imageStyle);
    vectorContext.drawGeometry(new ol.geom.MultiLineString(ar));

    const headPoint = new ol.geom.Point([16, 48]);

    vectorContext.setStyle(headOuterImageStyle);
    vectorContext.drawGeometry(headPoint);
    map.render()
});

