package pl.humanforhuman.backend.repository;

import pl.humanforhuman.backend.entity.ProviderPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProviderPhotoRepository extends JpaRepository<ProviderPhoto, Long> {

    List<ProviderPhoto> findByProviderProfileId(Long providerProfileId);
}

