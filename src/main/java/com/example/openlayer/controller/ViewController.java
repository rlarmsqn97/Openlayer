package com.example.openlayer.controller;

import com.example.openlayer.service.UserService;
import com.example.openlayer.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
public class ViewController {
    private final UserService userService;

    @GetMapping("/")
    public String index() {
        return "user/login";
    }

    @GetMapping("/signup")
    public String singUpForm() {
        return"user/signup";
    }

    @PostMapping("/signup")
    public String signUp(UserVO userVO){
        userService.joinUser(userVO);
        return "redirect:/";
    }

}
