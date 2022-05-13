var sketch;
var measureTooltipElement;
var measureTooltip;

var pointerMoveHandler = function(evt) {
    if (evt.dragging) {
        return;
    }
    if (sketch) {
        var geom = sketch.getGeometry();
    }
};
map.on('pointermove', pointerMoveHandler);
var draw;

function addInteraction() {
    draw = new ol.interaction.Draw({
        source: polySource,
        type: 'Polygon',
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2,
            }),
            image: new ol.style.Circle({
                radius: 5
            }),
        }),
    })
    map.addInteraction(draw);
    createMeasureTooltip();

    var listener;
    draw.on('drawstart', function(evt) {
        sketch = evt.feature;
        //var tooltipCoord = evt.coordinate;

        listener = sketch.getGeometry().on('change', function(evt) {
            var geom = evt.target;
            var output = formatArea(geom);
            tooltipCoord = geom.getInteriorPoint().getCoordinates();

            measureTooltipElement.innerHTML = output;
            measureTooltip.setPosition(tooltipCoord);
        })

    })

    draw.on('drawend', function() {
        measureTooltipElement.className = 'ol-tooptip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);

        //unset sketch
        sketch = null;
        measureTooltipElement = null;
        createMeasureTooltip();
        new ol.Observable(listener)
    })
}

function createMeasureTooltip() {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
    });
    map.addOverlay(measureTooltip);
}

function formatArea(polygon) {
    var area = ol.sphere.getArea(polygon);
    var output;
    if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
    } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
    }
    return output;
};