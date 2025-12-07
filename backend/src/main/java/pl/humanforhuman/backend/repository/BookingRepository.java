package pl.humanforhuman.backend.repository;

import pl.humanforhuman.backend.entity.Booking;
import pl.humanforhuman.backend.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByCustomerId(Long customerId);

    List<Booking> findByProviderId(Long providerId);

    List<Booking> findByStatus(BookingStatus status);
}

