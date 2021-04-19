package com.studiojms.expertdirectoryapi.repository;

import com.studiojms.expertdirectoryapi.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMemberRepository extends JpaRepository<Member, Long> {
}
