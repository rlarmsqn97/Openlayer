const contextmenuItems = [
    {
        text: '점',
        classname: 'bold',
    },
    {
        text: '다각형',
        // callback: addInteraction('Polygon')
    }
];

function elastic(t) {
    console.log("t : " +  t)
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}

function center(obj){
    view.animate({
        duration: 100,
        easing: elastic,
        center: obj.coordinate
    })
}

let contextmenu = new ContextMenu({
    width: 180,
    items: contextmenuItems
})

map.addControl(contextmenu)