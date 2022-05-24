package com.example.openlayer.map.service;

import com.example.openlayer.map.dao.CoordinateDAO;
import com.example.openlayer.map.vo.CoordinateVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class CoordinateService {

    private final CoordinateDAO coordinateDAO;

    public void insertPoint(List<CoordinateVO> vo){ coordinateDAO.pointInsert(vo); }
    public List<CoordinateVO> getPoint() { return coordinateDAO.getPoint(); }
    public void insertPolygon(List<CoordinateVO> vo) { coordinateDAO.polygonInsert(vo);}
    public List<CoordinateVO> getPolygon(){
        return coordinateDAO.getPolygon();
    }
    public void polygonModify(CoordinateVO vo) {coordinateDAO.polygonModify(vo);}
}