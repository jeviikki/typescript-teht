"use strict";
// Example usage (valid)
const config = { apiUrl: 'https://api.example.com', apiKey: 'secret-key' };
// Attempt to modify a read-only property (invalid)
config.apiUrl = 'https://new-api.example.com';
