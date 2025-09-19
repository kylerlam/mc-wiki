package com.example.springboot;

// ready for use by Spring MVC
import org.springframework.web.bind.annotation.GetMapping;
// maps / to the index() method
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    // 路由根路径
    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    // 路由 home 路径
    @GetMapping("/home")
    public String home() {
        return "This is home page.!";
    }

}