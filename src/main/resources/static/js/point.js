let draw;
function addInteraction(){
    draw = new ol.interaction.Draw({
        source : source,
        type: "Polygon",
    })
    map.addInteraction(draw)
}
