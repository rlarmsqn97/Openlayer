package com.example.openlayer.map.controller;

import com.example.openlayer.map.service.CoordinateService;
import com.example.openlayer.map.vo.CoordinateVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
public class DataController {
    private final CoordinateService coordinateService;

    @PostMapping("/coordinate")
    public void insertCoordinate(@RequestBody List<CoordinateVO> vo) {
        for (int i=0;i<vo.size();i++) {
            log.info("vo : {}", vo.get(i).getPointCoordinate());
        }
        coordinateService.insertCoordinate(vo);
    }

    @GetMapping("/getcoordinate")
    public List<CoordinateVO> getCoordinate(){
        log.info("coordinate : {}", coordinateService.getCoordinate());
        return coordinateService.getCoordinate();
    }

    @PostMapping("/polygoncoordinate")
    public void insertPolygon(@RequestBody CoordinateVO vo) {
        log.info("vo : {}", vo.getPolygonCoordinate());
        coordinateService.insertPolygon(vo);
    }

    @GetMapping("/getPolygon")
    public List<CoordinateVO> getPolygon() {
        log.info("polygon : {}", coordinateService.getPolygon().get(0).getPolygonCoordinate());
        return coordinateService.getPolygon();
    }
}
