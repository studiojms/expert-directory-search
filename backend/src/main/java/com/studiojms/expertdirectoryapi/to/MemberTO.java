package com.studiojms.expertdirectoryapi.to;

import com.studiojms.expertdirectoryapi.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class MemberTO implements Serializable {
    private Long id;

    private String name;

    private String websiteUrl;

    private String shortenedUrl;

    private String headings;

    private List<MemberTO> friends;

    public MemberTO(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.websiteUrl = member.getWebsiteUrl();
        this.shortenedUrl = member.getShortenedUrl();
        this.headings = member.getHeadings();

        boolean hasFriends = member.getFriends() != null && member.getFriends().size() > 0;
        if (hasFriends) {
            this.friends = member.getFriends().stream().map(MemberTO::new).collect(Collectors.toList());
        } else {
            this.friends = new ArrayList<>();
        }
    }

    public Member convertToDomain() {
        Member member = new Member();
        member.setId(this.getId());
        member.setName(this.getName());
        member.setWebsiteUrl(this.getWebsiteUrl());
        member.setShortenedUrl(this.getShortenedUrl());
        member.setHeadings(this.getHeadings());

        List<Member> friends = new ArrayList<>();
        if (this.getFriends() != null && this.getFriends().size() > 0) {
            friends = this.getFriends().stream()
                    .map(MemberTO::convertToDomain)
                    .collect(Collectors.toList());
        }
        member.setFriends(friends);

        return member;
    }
}
