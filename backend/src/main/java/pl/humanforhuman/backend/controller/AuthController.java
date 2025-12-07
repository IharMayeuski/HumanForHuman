package pl.humanforhuman.backend.controller;

import pl.humanforhuman.backend.entity.User;
import pl.humanforhuman.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/test")
    public String test() {
        return "AuthController OK";
    }
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/exists")
    public boolean emailExists(@RequestParam String email) {
        return userService.findByEmail(email).isPresent();
    }
}

