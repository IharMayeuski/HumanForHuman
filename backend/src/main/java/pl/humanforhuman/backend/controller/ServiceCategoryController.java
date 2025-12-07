package pl.humanforhuman.backend.controller;

import pl.humanforhuman.backend.entity.ServiceCategory;
import pl.humanforhuman.backend.service.ServiceCategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class ServiceCategoryController {

    private final ServiceCategoryService service;

    public ServiceCategoryController(ServiceCategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<ServiceCategory> getAll() {
        return service.getAll();
    }

    @PostMapping
    public ServiceCategory create(@RequestBody ServiceCategory category) {
        return service.save(category);
    }
}
