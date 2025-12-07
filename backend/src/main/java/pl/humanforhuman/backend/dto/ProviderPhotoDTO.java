package pl.humanforhuman.backend.dto;

import lombok.Data;

@Data
public class ProviderPhotoDTO {
    private Long id;
    private Long providerProfileId;
    private String url;
    private Integer position;
}
