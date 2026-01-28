package com.basic.authentication.demo.controller;

import com.basic.authentication.demo.dto.request.LoginRequest;
import com.basic.authentication.demo.dto.request.RegisterRequest;
import com.basic.authentication.demo.dto.response.AuthResponse;
import com.basic.authentication.demo.dto.response.UserProfileResponse;
import com.basic.authentication.demo.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity
                .status(HttpStatus.CREATED) // 201
                .body("User registered successfully");
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        AuthResponse response = authService.login(request);
        return ResponseEntity.ok(response); // 200
    }

    // ✅ PROFILE (Protected)
    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponse> profile(Authentication authentication) {
        UserProfileResponse response = authService.getProfile(authentication.getName());
        return ResponseEntity.ok(response); // 200
    }
}

