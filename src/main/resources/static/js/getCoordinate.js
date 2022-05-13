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
        arr.push(data[i].geom.replace(')', ''))
    }
}).then(() => {
    let featureSource = new ol.source.Vector({})
    let featureLayer = new ol.layer.Vector({
        source: featureSource
    })

    for(let i=0; i< arr.length; i++){
        console.log(arr[i] = arr[i].replace(' ', ','))

        console.log(arr[i] = arr[i].split(' '))

        // arr[i] = (arr[i].split(' ').map((key)=> { // arr i번째를 공백을 기준으로 잘라서 배열에 담고 map함수를 이용하여 반복해서 요소값을 int형으로 바꿔줌 {}붙을시 return 적어줘야함 매개변수 value = key = 현재요소
        //     // console.log(key)
        //     return Number(key)
        // }));
    }

    // let test = arr.map(key => key + 1)
    let te = ['Apple','Banana','asdfsfdasfd','sfdasdfsdaf']
    let test = te.filter(value => value.length < 3)
    // console.log(test)

    // console.log(...arr)
    let multiFeature = new ol.Feature({
        geometry: new ol.geom.MultiPoint(
            arr
        )
    })

    featureSource.addFeature(multiFeature)
    $('#getPoint').click(function() {
        map.addLayer(featureLayer)
    })
}).catch(error => {console.log(error)})
