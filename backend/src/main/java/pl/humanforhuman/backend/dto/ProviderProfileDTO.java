package pl.humanforhuman.backend.dto;

import lombok.Data;

@Data
public class ProviderProfileDTO {
    private Long id;
    private Long userId;
    private String aboutMe;
    private Double hourlyRate;
    private String city;
    private String country;
    private Double rating;
    private Boolean isActive;
}
