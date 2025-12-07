package pl.humanforhuman.backend.service;

import pl.humanforhuman.backend.entity.ProviderPhoto;
import pl.humanforhuman.backend.repository.ProviderPhotoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderPhotoService {

    private final ProviderPhotoRepository providerPhotoRepository;

    public ProviderPhotoService(ProviderPhotoRepository repo) {
        this.providerPhotoRepository = repo;
    }

    public ProviderPhoto save(ProviderPhoto photo) {
        return providerPhotoRepository.save(photo);
    }

    public List<ProviderPhoto> getByProviderProfile(Long profileId) {
        return providerPhotoRepository.findByProviderProfileId(profileId);
    }

    public void delete(Long id) {
        providerPhotoRepository.deleteById(id);
    }
}
