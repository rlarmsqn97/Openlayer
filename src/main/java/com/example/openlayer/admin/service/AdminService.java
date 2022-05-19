package com.example.openlayer.admin.service;

import com.example.openlayer.admin.dao.AdminDAO;
import com.example.openlayer.user.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final AdminDAO adminDAO;
    public List<UserVO> getUserList() {return adminDAO.getUserList();}
}
