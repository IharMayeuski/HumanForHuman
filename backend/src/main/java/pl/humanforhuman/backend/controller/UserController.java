package pl.humanforhuman.backend.controller;

import pl.humanforhuman.backend.entity.User;
import pl.humanforhuman.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public Optional<User> getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}
