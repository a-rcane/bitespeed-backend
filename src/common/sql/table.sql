CREATE TABLE IF NOT EXISTS contacts (
    primaryContactId SERIAL PRIMARY KEY,
    emails TEXT[],
    phoneNumbers TEXT[],
    secondaryContactIds INTEGER[]
);