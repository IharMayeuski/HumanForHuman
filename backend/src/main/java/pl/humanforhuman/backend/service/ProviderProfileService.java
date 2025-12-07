package pl.humanforhuman.backend.service;

import pl.humanforhuman.backend.entity.ProviderProfile;
import pl.humanforhuman.backend.repository.ProviderProfileRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProviderProfileService {

    private final ProviderProfileRepository providerProfileRepository;

    public ProviderProfileService(ProviderProfileRepository providerProfileRepository) {
        this.providerProfileRepository = providerProfileRepository;
    }

    public ProviderProfile save(ProviderProfile profile) {
        return providerProfileRepository.save(profile);
    }

    public Optional<ProviderProfile> getByUserId(Long userId) {
        return providerProfileRepository.findByUserId(userId);
    }

    public Optional<ProviderProfile> getById(Long id) {
        return providerProfileRepository.findById(id);
    }
}

