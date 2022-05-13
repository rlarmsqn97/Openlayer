let arr = []
let lon = []
let lat = []
fetch('/getcoordinate', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
}).then(res => {
    return res.json()
}).then(data => {
    for(let i=0;i<data.length;i++){
        // console.log(data[i].geom.replace(')', ''));
        arr.push(data[i].geom.replace(')', ''))
    }
}).then(() => {
    for(let i=0; i<arr.length; i++ ) {
        console.log(arr[i])
        lon = arr[i].split('  ')
        console.log("lon : " + lon[i])
    }
}).then(() => {
    let feature = new ol.Feature({
        geometry: new ol.geom.Point([lon,lat])
    })
}).catch(error => {console.log(error)})
