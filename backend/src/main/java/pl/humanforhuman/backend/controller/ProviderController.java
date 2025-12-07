package pl.humanforhuman.backend.controller;

import pl.humanforhuman.backend.entity.ProviderProfile;
import pl.humanforhuman.backend.service.ProviderProfileService;
import pl.humanforhuman.backend.service.ProviderPhotoService;
import pl.humanforhuman.backend.service.ProviderServiceService;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/providers")
public class ProviderController {

    private final ProviderProfileService profileService;
    private final ProviderPhotoService photoService;
    private final ProviderServiceService serviceService;

    public ProviderController(
            ProviderProfileService profileService,
            ProviderPhotoService photoService,
            ProviderServiceService serviceService
    ) {
        this.profileService = profileService;
        this.photoService = photoService;
        this.serviceService = serviceService;
    }

    @GetMapping("/{userId}")
    public Optional<ProviderProfile> getProfile(@PathVariable Long userId) {
        return profileService.getByUserId(userId);
    }

    @PostMapping("/profile")
    public ProviderProfile createOrUpdateProfile(@RequestBody ProviderProfile profile) {
        return profileService.save(profile);
    }
}

