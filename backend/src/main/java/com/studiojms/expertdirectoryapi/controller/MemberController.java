package com.studiojms.expertdirectoryapi.controller;

import com.studiojms.expertdirectoryapi.domain.Member;
import com.studiojms.expertdirectoryapi.service.MemberService;
import com.studiojms.expertdirectoryapi.to.MemberTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/members")
public class MemberController {

    @Autowired
    private MemberService memberService;

    private final Logger LOGGER = LoggerFactory.getLogger(MemberController.class);

    @GetMapping
    public ResponseEntity<List<MemberTO>> index() {
        final List<Member> members = memberService.list();

        List<MemberTO> memberList = members.stream().map(MemberTO::new).collect(Collectors.toList());

        return ResponseEntity.ok(memberList);
    }

    @PostMapping
    public ResponseEntity<MemberTO> create(@RequestBody MemberTO memberTO,
                                           UriComponentsBuilder uriComponentsBuilder) {
        ResponseEntity<MemberTO> response;

        try {
            Member member = memberService.create(memberTO);

            URI uri = uriComponentsBuilder.path("/members/{id}").buildAndExpand(member.getId()).toUri();

            response = ResponseEntity.created(uri).body(new MemberTO(member));
        } catch (Exception e) {
            LOGGER.error("An error occurred when creating a new member", e);

            response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<MemberTO> findById(@PathVariable Long id) {
        ResponseEntity<MemberTO> response;

        try {
            Member member = memberService.findById(id);
            response = ResponseEntity.ok(new MemberTO(member));
        } catch (Exception e) {
            response = ResponseEntity.noContent().build();
        }
        return response;
    }

    @GetMapping("/search/id/{id}/search/{search}")
    public ResponseEntity<List<MemberTO>> searchRelatedContent(@PathVariable("id") Long id,
                                                               @PathVariable("search") String searchTerm) {
        ResponseEntity<List<MemberTO>> response;

        try {
            //TODO implement related content search
            //List<MemberTO> members = memberService.searchRelatedContent(id, searchTerm);

            List<MemberTO> members = new ArrayList<>();
            response = ResponseEntity.ok(members);
        } catch (Exception e) {
            response = ResponseEntity.noContent().build();
        }
        return response;
    }
}
