package pl.humanforhuman.backend.repository;

import pl.humanforhuman.backend.entity.ServiceCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceCategoryRepository extends JpaRepository<ServiceCategory, Long> {

}

