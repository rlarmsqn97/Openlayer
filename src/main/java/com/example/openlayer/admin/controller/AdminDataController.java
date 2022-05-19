package com.example.openlayer.admin.controller;

import com.example.openlayer.admin.service.AdminService;
import com.example.openlayer.user.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AdminDataController {
    private final AdminService adminService;

    @GetMapping("/admin/getUserList")
    public List<UserVO> getUserList() {
        return adminService.getUserList();
    }
}