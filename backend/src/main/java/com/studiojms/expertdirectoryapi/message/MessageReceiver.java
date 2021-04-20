package com.studiojms.expertdirectoryapi.message;

import com.studiojms.expertdirectoryapi.service.MemberService;
import com.studiojms.expertdirectoryapi.service.WebsiteProcessService;
import com.studiojms.expertdirectoryapi.to.MemberTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.CountDownLatch;

@Component
public class MessageReceiver {
    private final CountDownLatch latch = new CountDownLatch(1);

    private final Logger LOGGER = LoggerFactory.getLogger(MessageReceiver.class);

    @Autowired
    private WebsiteProcessService websiteProcessService;

    @Autowired
    private MemberService memberService;

    public void receiveMessage(MemberTO member) {
        LOGGER.debug("Received member " + member);

        scrapUrl(member);
        shortUrl(member);

        latch.countDown();
    }

    private void scrapUrl(MemberTO member) {
        try {
            final List<String> headings = websiteProcessService.scrapUrlHeadings(member.getWebsiteUrl());
            member.setHeadings(String.join("=|=", headings));

            memberService.update(member);
        } catch (Exception e) {
            LOGGER.error("Error scrapping url {} from member {}", member.getWebsiteUrl(), member, e);
        }
    }

    private void shortUrl(MemberTO member) {
        try {
            final String shortenUrl = websiteProcessService.shortenUrl(member.getWebsiteUrl());
            member.setShortenedUrl(shortenUrl);

            memberService.update(member);
        } catch (Exception e) {
            LOGGER.error("Error shortening URL {} for member {}", member.getWebsiteUrl(), member, e);
        }
    }

    public CountDownLatch getLatch() {
        return latch;
    }
}
