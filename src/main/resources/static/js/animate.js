const gifUrl = 'static/gif/zola.gif'
const gif = gifler(gifUrl)
gif.frames(
    document.createElement('canvas'),
    function (ctx, frame) {
        if (!iconFeature.getStyle()) {
            iconFeature.setStyle(
                new ol.style.Style({
                    image: new ol.style.Icon({
                        img: ctx.canvas,
                        imgSize: [frame.width, frame.height],
                        opacity: 0.1,
                    }),
                })
            );
        }
        ctx.clearRect(0, 0, frame.width, frame.height);

        ctx.drawImage(frame.buffer, 100, 20);
        // map.render();
    },
    true
);


// map.on('pointermove', function(e) {
//     const pixel = map.getEventPixel(e.originalEvent);
//     const hit = map.hasFeatureAtPixel(pixel)
//     map.getTarget().style.cursor = hit ? 'pointer' : ''
// })