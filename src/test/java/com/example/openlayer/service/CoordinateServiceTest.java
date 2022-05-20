package com.example.openlayer.service;

import com.example.openlayer.map.service.CoordinateService;
import com.example.openlayer.map.vo.CoordinateVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@Slf4j
public class CoordinateServiceTest {

    @Autowired
    private CoordinateService coordinateService;

    @Test
    public void 좌표_저장() {
        List<CoordinateVO> vo = new ArrayList<>();
        coordinateService.insertCoordinate(vo);
    }

    @Test
    public void 좌표_가져오기() {
        List<CoordinateVO> vo = coordinateService.getCoordinate();
        log.info("{}", vo);
    }

    @Test
    public void 폴리곤_좌표_가져오기() {
        List<CoordinateVO> vo = coordinateService.getPolygon();
        log.info("polygon좌표 : {}", vo.get(1).getPolygonCoordinate());
    }
}