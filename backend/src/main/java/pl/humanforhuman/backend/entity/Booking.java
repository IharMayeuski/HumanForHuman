package pl.humanforhuman.backend.entity;

import pl.humanforhuman.backend.enums.BookingStatus;
import pl.humanforhuman.backend.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private User customer;

    @ManyToOne
    @JoinColumn(name = "provider_id", nullable = false)
    private User provider;

    @ManyToOne
    @JoinColumn(name = "service_category_id", nullable = false)
    private ServiceCategory serviceCategory;

    private LocalDateTime startDatetime;
    private LocalDateTime endDatetime;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    private BigDecimal priceTotal;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
    private List<BookingMessage> messages;
}

