package com.studiojms.expertdirectoryapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/members")
public class MemberController {

    @GetMapping
    public ResponseEntity<String> index() {
        return ResponseEntity.ok("test");
    }
}
