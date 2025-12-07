package pl.humanforhuman.backend.dto;

import lombok.Data;

@Data
public class ProviderServiceDTO {
    private Long id;
    private Long providerProfileId;
    private Long serviceCategoryId;
    private Double pricePerHour;
    private String description;
}