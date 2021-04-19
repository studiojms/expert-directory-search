package com.studiojms.expertdirectoryapi.to;

import com.studiojms.expertdirectoryapi.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class MemberTO {
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
}
