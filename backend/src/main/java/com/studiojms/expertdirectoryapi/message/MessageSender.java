package com.studiojms.expertdirectoryapi.message;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MessageSender {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Value("queue.exchange-name")
    private String exchange;

    public void send(String routingKey, String message) {
        rabbitTemplate.convertAndSend(exchange, routingKey, message);
    }
}