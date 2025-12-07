package pl.humanforhuman.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "provider_photos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProviderPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "provider_profile_id", nullable = false)
    private ProviderProfile providerProfile;

    private String url;

    private Integer position;
}