package com.example.openlayer.map.dao;

import com.example.openlayer.map.vo.CoordinateVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CoordinateDAO {
    void pointInsert(List<CoordinateVO> vo);
    List<CoordinateVO> getPoint();
    void polygonInsert(List<CoordinateVO> vo);
    List<CoordinateVO> getPolygon();
    void polygonModify(CoordinateVO vo);
}