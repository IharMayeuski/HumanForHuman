package pl.humanforhuman.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import pl.humanforhuman.backend.entity.User;
import pl.humanforhuman.backend.security.JwtService;
import pl.humanforhuman.backend.service.UserService;
import pl.humanforhuman.backend.dto.auth.LoginRequest;
import pl.humanforhuman.backend.dto.auth.TokenResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthController(UserService userService,
                          AuthenticationManager authenticationManager,
                          JwtService jwtService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @GetMapping("/test")
    public String test() {
        return "AuthController OK";
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/exists")
    public boolean emailExists(@RequestParam String email) {
        return userService.findByEmail(email).isPresent();
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        String token = jwtService.generateToken(request.getEmail());

        return ResponseEntity.ok(new TokenResponse(token));
    }
}
