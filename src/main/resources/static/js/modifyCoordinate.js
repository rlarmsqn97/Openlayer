$('#modify').click(() => {
    map.removeInteraction(draw);
    const modifyCoordinate = {
        init: function () {
            this.select = new ol.interaction.Select()
            map.addInteraction(this.select)

            this.modify = new ol.interaction.Modify({
                features: this.select.getFeatures(),
            })
            map.addInteraction(this.modify)

            this.setEvents();
            console.log("select : " + this.select)
        },
        setEvents: function () {
            const selectedFeatures = this.select.getFeatures();
            console.log("selectedFeatures : " + selectedFeatures)
            this.select.on('change:active', function () {
                selectedFeatures.forEach(function (each) {
                    selectedFeatures.remove(each)
                })
            })
        },
        setActive: function (active) {
            this.select.setActive(active)
            this.modify.setActive(active)
        }
    }
    modifyCoordinate.init()

    modifyCoordinate.setActive(true)

    const snap = new ol.interaction.Snap({
        source: vector.getSource(),
    })

    map.addInteraction(snap)
})