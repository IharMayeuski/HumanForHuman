package pl.humanforhuman.backend.controller;

import pl.humanforhuman.backend.entity.Review;
import pl.humanforhuman.backend.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService service;

    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @PostMapping
    public Review add(@RequestBody Review review) {
        return service.save(review);
    }

    @GetMapping("/provider/{providerId}")
    public List<Review> providerReviews(@PathVariable Long providerId) {
        return service.getByProvider(providerId);
    }
}
