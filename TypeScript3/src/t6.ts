interface Configuration {
  apiUrl: string;
  apiKey: string;
}

type ReadonlyConfig = Readonly<Configuration>;

// Example usage (valid)
const config: ReadonlyConfig = { apiUrl: 'https://api.example.com', apiKey: 'secret-key' };

// Attempt to modify a read-only property (invalid)
config.apiUrl = 'https://new-api.example.com';
