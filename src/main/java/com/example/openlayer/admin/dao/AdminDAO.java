package com.example.openlayer.admin.dao;

import com.example.openlayer.user.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminDAO {
    List<UserVO> getUserList();
}
