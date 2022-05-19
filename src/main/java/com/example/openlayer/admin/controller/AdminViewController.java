package com.example.openlayer.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminViewController {
    @GetMapping("/userList")
    public String adminPage() {
        return "admin/userList";
    }
}