package pl.humanforhuman.backend.service;

import pl.humanforhuman.backend.entity.Booking;
import pl.humanforhuman.backend.enums.BookingStatus;
import pl.humanforhuman.backend.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository repo;

    public BookingService(BookingRepository repo) {
        this.repo = repo;
    }

    public Booking create(Booking booking) {
        booking.setStatus(BookingStatus.REQUESTED);
        return repo.save(booking);
    }

    public Optional<Booking> getById(Long id) {
        return repo.findById(id);
    }

    public Booking update(Booking booking) {
        return repo.save(booking);
    }

    public List<Booking> listForCustomer(Long customerId) {
        return repo.findByCustomerId(customerId);
    }

    public List<Booking> listForProvider(Long providerId) {
        return repo.findByProviderId(providerId);
    }

    public Booking confirm(Long id) {
        Booking b = repo.findById(id).orElseThrow();
        b.setStatus(BookingStatus.CONFIRMED);
        return repo.save(b);
    }
}

