package pl.humanforhuman.backend.mapper;

import pl.humanforhuman.backend.dto.UserDTO;
import pl.humanforhuman.backend.entity.User;

public interface UserMapper {
    UserDTO toDTO(User entity);
    User toEntity(UserDTO dto);
}
