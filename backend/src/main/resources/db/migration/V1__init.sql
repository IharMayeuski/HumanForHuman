-- ================================
-- ENUM-like constraints
-- ================================

-- user roles
CREATE TABLE roles_enum (
    role VARCHAR(30) PRIMARY KEY
);
INSERT INTO roles_enum (role) VALUES ('CUSTOMER'), ('PROVIDER'), ('ADMIN');

-- booking status
CREATE TABLE booking_status_enum (
    status VARCHAR(30) PRIMARY KEY
);
INSERT INTO booking_status_enum (status) VALUES
('REQUESTED'),
('CONFIRMED'),
('DECLINED'),
('CANCELED'),
('COMPLETED');

-- payment method
CREATE TABLE payment_method_enum (
    method VARCHAR(30) PRIMARY KEY
);
INSERT INTO payment_method_enum (method) VALUES ('CASH'), ('CARD'), ('PAYPAL');


-- ================================
-- Users
-- ================================
CREATE TABLE users (
    id            BIGSERIAL PRIMARY KEY,
    email         VARCHAR(255) UNIQUE NOT NULL,
    password      VARCHAR(255) NOT NULL,
    first_name    VARCHAR(100),
    last_name     VARCHAR(100),
    phone         VARCHAR(50),
    gender        VARCHAR(20),
    birth_date    DATE,
    role          VARCHAR(30) NOT NULL REFERENCES roles_enum(role),
    profile_photo_url TEXT,
    created_at    TIMESTAMP DEFAULT now(),
    updated_at    TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_users_email ON users(email);


-- ================================
-- Provider Profile
-- ================================
CREATE TABLE provider_profiles (
    id              BIGSERIAL PRIMARY KEY,
    user_id         BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    about_me        TEXT,
    hourly_rate     NUMERIC(10,2),
    city            VARCHAR(100),
    country         VARCHAR(100),
    rating          NUMERIC(3,2),
    is_active       BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_provider_profiles_user_id ON provider_profiles(user_id);


-- ================================
-- Photos of Providers
-- ================================
CREATE TABLE provider_photos (
    id BIGSERIAL PRIMARY KEY,
    provider_profile_id BIGINT NOT NULL REFERENCES provider_profiles(id) ON DELETE CASCADE,
    url VARCHAR(500) NOT NULL,
    position INT
);

CREATE INDEX idx_provider_photos_provider_id ON provider_photos(provider_profile_id);


-- ================================
-- Service Categories
-- ================================
CREATE TABLE service_categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);


-- ================================
-- Service offered by provider
-- ================================
CREATE TABLE provider_services (
    id BIGSERIAL PRIMARY KEY,
    provider_profile_id BIGINT NOT NULL REFERENCES provider_profiles(id) ON DELETE CASCADE,
    service_category_id BIGINT NOT NULL REFERENCES service_categories(id),
    price_per_hour NUMERIC(10,2),
    description TEXT
);

CREATE INDEX idx_provider_services_provider_id ON provider_services(provider_profile_id);


-- ================================
-- Bookings
-- ================================
CREATE TABLE bookings (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES users(id),
    provider_id BIGINT NOT NULL REFERENCES users(id),
    service_category_id BIGINT NOT NULL REFERENCES service_categories(id),
    start_datetime TIMESTAMP NOT NULL,
    end_datetime   TIMESTAMP NOT NULL,
    status VARCHAR(30) NOT NULL REFERENCES booking_status_enum(status),
    price_total NUMERIC(10,2),
    payment_method VARCHAR(30) REFERENCES payment_method_enum(method),
    created_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_provider ON bookings(provider_id);
CREATE INDEX idx_bookings_status ON bookings(status);


-- ================================
-- Booking Messages (mini chat)
-- ================================
CREATE TABLE booking_messages (
    id BIGSERIAL PRIMARY KEY,
    booking_id BIGINT NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    sender_id BIGINT NOT NULL REFERENCES users(id),
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_booking_messages_booking ON booking_messages(booking_id);


-- ================================
-- Reviews
-- ================================
CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    booking_id BIGINT NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    customer_id BIGINT NOT NULL REFERENCES users(id),
    provider_id BIGINT NOT NULL REFERENCES users(id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_reviews_provider ON reviews(provider_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
