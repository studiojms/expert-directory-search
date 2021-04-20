package com.studiojms.expertdirectoryapi.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class WebsiteProcessService {

    /**
     * Given a url, fetches its content and gets all headings (h1 to h3)
     *
     * @param url url to be processed
     * @return list with all headings (h1 to h3) found in the page
     */
    public List<String> scrapUrlHeadings(String url) {
        //TODO use jsoup to scrap url headings
        return Arrays.asList("TEST", "ASFD");
    }

    /**
     * Given a url, create a short version of it using bit.ly API
     *
     * @param url url to be processed
     * @return shortened url
     */
    public String shortenUrl(String url) {
        //TODO call bit.ly api
        return "OOOOOOO";
    }
}
