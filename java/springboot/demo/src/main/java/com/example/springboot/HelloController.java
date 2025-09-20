package com.example.springboot;

// ready for use by Spring MVC
import org.springframework.web.bind.annotation.GetMapping;
// maps / to the index() method
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class HelloController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();


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

    // 携带参数
    // 测试：http://localhost:8080/Hello?name=Tom | http://localhost:8080/Hello
    @GetMapping("/Hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello, %s!", name);
    }

    @GetMapping("/Greeting")
    public Application.Greeting greeting(@RequestParam(defaultValue = "World!") String name){
        return new Application.Greeting(counter.incrementAndGet(), String.format(template, name));
    }

}