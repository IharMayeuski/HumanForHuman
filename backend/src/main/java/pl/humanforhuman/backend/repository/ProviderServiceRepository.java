package pl.humanforhuman.backend.repository;

import pl.humanforhuman.backend.entity.ProviderService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProviderServiceRepository extends JpaRepository<ProviderService, Long> {

    List<ProviderService> findByProviderProfileId(Long providerProfileId);

    List<ProviderService> findByServiceCategoryId(Long serviceCategoryId);
}
