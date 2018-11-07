package com.example.stackroute.CiCddemo.com.example.stackroute.CiCddemo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {

    @RequestMapping("/")
    public String welcome(Model model){
        model.addAttribute("course","devops");
        return "index";

    }

}
