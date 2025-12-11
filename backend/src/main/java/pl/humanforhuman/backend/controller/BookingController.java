package pl.humanforhuman.backend.controller;

import org.springframework.web.bind.annotation.*;
import pl.humanforhuman.backend.entity.Booking;
import pl.humanforhuman.backend.service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    @PostMapping
    public Booking create(@RequestBody Booking booking) {
        return service.create(booking);
    }

    @GetMapping("/{id}")
    public Booking get(@PathVariable Long id) {
        return service.getById(id).orElse(null);
    }

    @GetMapping("/customer/{customerId}")
    public List<Booking> customerBookings(@PathVariable Long customerId) {
        return service.listForCustomer(customerId);
    }

    @GetMapping("/provider/{providerId}")
    public List<Booking> providerBookings(@PathVariable Long providerId) {
        return service.listForProvider(providerId);
    }

    @PostMapping("/{id}/confirm")
    public Booking confirm(@PathVariable Long id) {
        return service.confirm(id);
    }
}

