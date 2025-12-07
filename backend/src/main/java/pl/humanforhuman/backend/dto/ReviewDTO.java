package pl.humanforhuman.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ReviewDTO {
    private Long id;
    private Long bookingId;
    private Long customerId;
    private Long providerId;
    private Integer rating;
    private String comment;
    private LocalDateTime createdAt;
}

