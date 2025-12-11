package pl.humanforhuman.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BookingDTO {
    private Long id;
    private Long customerId;
    private Long providerId;
    private Long serviceCategoryId;
    private LocalDateTime startDatetime;
    private LocalDateTime endDatetime;
    private String status;
    private Double priceTotal;
    private String paymentMethod;
}
