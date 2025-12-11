package pl.humanforhuman.backend.service;

import org.springframework.stereotype.Service;
import pl.humanforhuman.backend.entity.BookingMessage;
import pl.humanforhuman.backend.repository.BookingMessageRepository;

import java.util.List;

@Service
public class BookingMessageService {
    private final BookingMessageRepository repo;

    public BookingMessageService(BookingMessageRepository repo) {
        this.repo = repo;
    }

    public BookingMessage save(BookingMessage msg) {
        return repo.save(msg);
    }

    public List<BookingMessage> getByBooking(Long bookingId) {
        return repo.findByBookingIdOrderByCreatedAt(bookingId);
    }
}

