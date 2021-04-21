package com.studiojms.expertdirectoryapi.service;

import com.studiojms.expertdirectoryapi.controller.MemberController;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WebsiteProcessService {

    private final Logger LOGGER = LoggerFactory.getLogger(WebsiteProcessService.class);

    /**
     * Given a url, fetches its content and gets all headings (h1 to h3)
     *
     * @param url url to be processed
     * @return list with all headings (h1 to h3) found in the page
     */
    public List<String> scrapUrlHeadings(String url) {
        final List<String> headings = new ArrayList<>();
        try {
            Document doc = Jsoup.connect(url).get();

            Elements elements = new Elements();
            elements.addAll(doc.getElementsByTag("h1"));
            elements.addAll(doc.getElementsByTag("h2"));
            elements.addAll(doc.getElementsByTag("h3"));

            headings.addAll(elements.stream()
                    .map(Element::text)
                    .filter(e -> !e.isEmpty())
                    .collect(Collectors.toList()));

        } catch (IOException exception) {
            LOGGER.error("There was an error parsing the url {}", url, exception);
        }

        return headings;
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
