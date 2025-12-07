package pl.humanforhuman.backend.service;

import pl.humanforhuman.backend.entity.ProviderService;
import pl.humanforhuman.backend.repository.ProviderServiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderServiceService {

    private final ProviderServiceRepository repo;

    public ProviderServiceService(ProviderServiceRepository repo) {
        this.repo = repo;
    }

    public ProviderService save(ProviderService service) {
        return repo.save(service);
    }

    public List<ProviderService> getByProvider(Long providerProfileId) {
        return repo.findByProviderProfileId(providerProfileId);
    }
}

