let draw;
function addInteraction(type){
    draw = new ol.interaction.Draw({
        source : source,
        type: type,
    })
    console.log(type)
    map.addInteraction(draw)
}
