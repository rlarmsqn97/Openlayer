let draw;
function addInteraction(type){
    draw = new ol.interaction.Draw({
        source : source,
        type: "Polygon",
    })
    map.addInteraction(draw)
}
