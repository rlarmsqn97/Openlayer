function insertPolygon(data){
    const url = "/polygoncoordinate"
    console.log("insertPolygon 함수 실행")
    postApi(url, data)
        .then(()=>{
            {
                console.log("폴리곤 저장 성공")
            }
        }).catch(error => console.log(error))
}