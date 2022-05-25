$('#delete').click(() => {
    let select = ol.interaction.Select()
    map.addInteraction(select)
    console.log(select.getFeatures())
    vector.removeFeature()
})