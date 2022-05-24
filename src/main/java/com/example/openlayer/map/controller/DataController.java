package com.example.openlayer.map.controller;

import com.example.openlayer.map.service.CoordinateService;
import com.example.openlayer.map.vo.CoordinateVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class DataController {
    private final CoordinateService coordinateService;

    @PostMapping("/point")
    public void insertCoordinate(@RequestBody List<CoordinateVO> vo) {
        for (CoordinateVO coordinateVO : vo) {
            log.info("vo : {}", coordinateVO.getPointCoordinate());
        }
        coordinateService.insertPoint(vo);
    }

    @GetMapping("/getCoordinate")
    public List<CoordinateVO> getCoordinate(){
        log.info("point_no : {}, point : {}", coordinateService.getPoint().get(0).getPointNo(), coordinateService.getPoint().get(0).getPointCoordinate());
        return coordinateService.getPoint();
    }

    @PostMapping("/polygon")
    public void insertPolygon(@RequestBody List<CoordinateVO> vo) {
        for (CoordinateVO coordinateVO : vo) {
            log.info("vo : {}", coordinateVO.getPolygonCoordinate());
        }
        coordinateService.insertPolygon(vo);
    }

    @GetMapping("/getPolygon")
    public List<CoordinateVO> getPolygon() {
        log.info("polygon_no : {} , polygon : {}", coordinateService.getPolygon().get(0).getPolygonNo(), coordinateService.getPolygon().get(0).getPolygonCoordinate());
        return coordinateService.getPolygon();
    }

    @PutMapping("modifyFeature")
    public void modifyFeature(@RequestBody CoordinateVO vo) {
        log.info("polygonNo : {}, polygonCoordinate : {}", vo.getPolygonNo(), vo.getPolygonCoordinate());
        coordinateService.polygonModify(vo);
    }
}
