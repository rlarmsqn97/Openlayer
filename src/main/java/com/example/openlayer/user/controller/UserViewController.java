package com.example.openlayer.user.controller;

import com.example.openlayer.user.service.UserService;
import com.example.openlayer.user.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
public class UserViewController {
    private final UserService userService;

    @GetMapping("/")
    public String index() {
        return "/login";
    }

    @GetMapping("/signup")
    public String singUpForm() {
        return"/signup";
    }

    @PostMapping("/signup")
    public String signUp(UserVO userVO){
        userService.joinUser(userVO);
        return "redirect:/";
    }

}
