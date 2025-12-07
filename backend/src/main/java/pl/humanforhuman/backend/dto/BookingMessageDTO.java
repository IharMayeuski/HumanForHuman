package pl.humanforhuman.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class BookingMessageDTO {
    private Long id;
    private Long bookingId;
    private Long senderId;
    private String messageText;
    private LocalDateTime createdAt;
}

