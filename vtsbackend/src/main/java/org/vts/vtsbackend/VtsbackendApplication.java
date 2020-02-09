package org.vts.vtsbackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * This is the framework component to handle Spring component
 *
 * @author  Siddharth Vijayasankar
 * @version 1.0
 */

@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = {"org.vts"})
public class VtsbackendApplication {
    @Value("${spring.cross.origin}")
    private String crossOrigin = "";

    public static void main(String[] args) {
        SpringApplication.run(VtsbackendApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                System.out.println("zzzzz crossOrigin=" + crossOrigin);
                registry.addMapping("/*").allowedOrigins(crossOrigin);
            }
        };
    }

}
