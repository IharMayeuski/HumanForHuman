package pl.humanforhuman.backend.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class UserDTO {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private String gender;
    private LocalDate birthDate;
    private String role;
    private String profilePhotoUrl;
}

