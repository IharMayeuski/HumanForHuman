package pl.humanforhuman.backend.service;

import pl.humanforhuman.backend.entity.ServiceCategory;
import pl.humanforhuman.backend.repository.ServiceCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceCategoryService {

    private final ServiceCategoryRepository repository;

    public ServiceCategoryService(ServiceCategoryRepository repository) {
        this.repository = repository;
    }

    public List<ServiceCategory> getAll() {
        return repository.findAll();
    }

    public ServiceCategory save(ServiceCategory category) {
        return repository.save(category);
    }
}
