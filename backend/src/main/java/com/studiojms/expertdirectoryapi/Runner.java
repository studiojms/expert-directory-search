package com.studiojms.expertdirectoryapi;

import com.studiojms.expertdirectoryapi.message.MessageReceiver;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;


@Component
public class Runner implements CommandLineRunner {
    private final RabbitTemplate rabbitTemplate;
    private final MessageReceiver receiver;

    @Value("queue.exchange-name")
    private String exchange;

    @Value("shortener-routing-key")
    private String shortenerUrlKey;

    public Runner(MessageReceiver receiver, RabbitTemplate rabbitTemplate) {
        this.receiver = receiver;
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Sending message...");
        rabbitTemplate.convertAndSend(exchange, shortenerUrlKey, "Hello from RabbitMQ!");
        receiver.getLatch().await(10000, TimeUnit.MILLISECONDS);
    }
}
