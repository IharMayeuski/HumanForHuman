package pl.humanforhuman.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "provider_profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProviderProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String aboutMe;

    private BigDecimal hourlyRate;

    private String city;
    private String country;

    private Double rating;

    private Boolean isActive = true;

    @OneToMany(mappedBy = "providerProfile", cascade = CascadeType.ALL)
    private List<ProviderPhoto> photos;

    @OneToMany(mappedBy = "providerProfile", cascade = CascadeType.ALL)
    private List<ProviderService> services;
}