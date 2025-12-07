package pl.humanforhuman.backend.controller;

import pl.humanforhuman.backend.entity.BookingMessage;
import pl.humanforhuman.backend.service.BookingMessageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class BookingMessageController {

    private final BookingMessageService service;

    public BookingMessageController(BookingMessageService service) {
        this.service = service;
    }

    @PostMapping
    public BookingMessage send(@RequestBody BookingMessage message) {
        return service.save(message);
    }

    @GetMapping("/{bookingId}")
    public List<BookingMessage> list(@PathVariable Long bookingId) {
        return service.getByBooking(bookingId);
    }
}
