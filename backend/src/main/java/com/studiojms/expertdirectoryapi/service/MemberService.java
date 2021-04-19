package com.studiojms.expertdirectoryapi.service;

import com.studiojms.expertdirectoryapi.domain.Member;
import com.studiojms.expertdirectoryapi.repository.IMemberRepository;
import com.studiojms.expertdirectoryapi.to.MemberTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class MemberService {
    @Autowired
    private IMemberRepository memberRepository;

    public List<Member> list() {
        return memberRepository.findAll();
    }

    public Member findById(Long id) {
        return memberRepository.findById(id).orElse(null);
    }

    @Transactional
    public Member create(MemberTO memberTO) {
        Member member = new Member();
        member.setName(memberTO.getName());
        member.setWebsiteUrl(memberTO.getWebsiteUrl());

        return memberRepository.save(member);
    }

}
