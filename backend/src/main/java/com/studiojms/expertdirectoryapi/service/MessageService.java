package com.studiojms.expertdirectoryapi.service;

import com.studiojms.expertdirectoryapi.message.MessageReceiver;
import com.studiojms.expertdirectoryapi.message.MessageSender;
import com.studiojms.expertdirectoryapi.to.MemberTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
    @Autowired
    private MessageSender messageSender;

    @Autowired
    private MessageReceiver receiver;

    @Value("${queue.processor-routing-key}")
    private String processorRoutingKey;

    /**
     * Send the given member to a queue to be processed
     *
     * @param member member object
     */
    public void sendToProcessQueue(MemberTO member) {
        messageSender.send(processorRoutingKey, member);
    }
}
