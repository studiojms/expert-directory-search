package com.studiojms.expertdirectoryapi;

import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ExpertDirectoryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExpertDirectoryApiApplication.class, args);
	}

}
