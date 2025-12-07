package pl.humanforhuman.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "booking_messages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    private String messageText;

    private LocalDateTime createdAt = LocalDateTime.now();
}

