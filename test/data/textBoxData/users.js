// test/data/users.js
// Test data for TextBox feature (MAT and AT tests)

// Minimal Acceptance Test (MAT) users
const validUsers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    current_address: "123 Main St",
    permananet_address: "456 Oak Ave"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    current_address: "789 Pine Rd",
    permananet_address: "321 Maple Blvd"
  }
];

// Acceptance Test (AT) users - invalid or edge cases
const invalidUsers = [
  {
    name: "",              // Missing first name
    email: "john.doe@example.com",
    current_address: "123 Main St",
    permananet_address: "456 Oak Ave"
  },
  {
    name: "John Doe",
    email: "invalid-email",     // Invalid email
    current_address: "123 Main St",
    permananet_address: "456 Oak Ave"
  },
  {
    name: "Alice Wonderland",
    email: "alice@example.com",
    current_address: "",         // Missing current address
    permananet_address: "456 Oak Ave"
  }
];

// Export for use in tests
module.exports = {
  validUsers,
  invalidUsers
};
