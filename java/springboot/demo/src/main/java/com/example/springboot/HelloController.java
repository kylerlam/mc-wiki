package com.example.springboot;

// ready for use by Spring MVC
import org.springframework.web.bind.annotation.GetMapping;
// maps / to the index() method
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}