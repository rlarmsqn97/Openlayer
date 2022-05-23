const contextmenuItems = [
    {
        text: '점',
        callback: function() {
            map.removeInteraction(draw);
            addInteraction('Point');
        }
    },
    {
        text: '다각형',
        callback: function() {
            map.removeInteraction(draw);
            addInteraction('Polygon');
        }
    }
]

let contextmenu = new ContextMenu({
    width: 180,
    items: contextmenuItems
})

map.addControl(contextmenu)