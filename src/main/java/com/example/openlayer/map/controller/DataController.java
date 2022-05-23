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
        log.info("coordinate : {}", coordinateService.getPoint());
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
}
