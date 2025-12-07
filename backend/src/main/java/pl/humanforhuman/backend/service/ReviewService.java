package pl.humanforhuman.backend.service;

import pl.humanforhuman.backend.entity.Review;
import pl.humanforhuman.backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository repo;

    public ReviewService(ReviewRepository repo) {
        this.repo = repo;
    }

    public Review save(Review review) {
        return repo.save(review);
    }

    public List<Review> getByProvider(Long providerId) {
        return repo.findByProviderId(providerId);
    }
}
