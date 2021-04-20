package com.studiojms.expertdirectoryapi.message;

import com.studiojms.expertdirectoryapi.to.MemberTO;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
public class MessageSender {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Value("${queue.exchange-name}")
    private String exchange;

    public void send(String routingKey, MemberTO member) {
        rabbitTemplate.convertAndSend(exchange, routingKey, member);
    }
}
