// API Configuration
const getApiBaseUrl = () => {
  // Check if we're in development
  if (import.meta.env.DEV) {
    // Try different common ports for development
    const commonPorts = [5002, 3001, 8000, 5000];

    // You can also check environment variables
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }

    // Default to localhost:5002 for development
    return "http://localhost:5002";
  }

  // For production, use the same origin or environment variable
  return import.meta.env.VITE_API_URL || window.location.origin;
};

// Test if backend is available
export const testBackendConnection = async (baseUrl = getApiBaseUrl()) => {
  try {
    const response = await fetch(`${baseUrl}/api/health`, {
      method: "GET",
      timeout: 5000,
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Auto-detect backend URL by testing multiple ports
export const detectBackendUrl = async () => {
  const commonPorts = [5002, 3001, 8000, 5000, 3000];
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;

  // First try the configured URL
  const configuredUrl = getApiBaseUrl();
  if (await testBackendConnection(configuredUrl)) {
    return configuredUrl;
  }

  // If that fails, try common development ports
  for (const port of commonPorts) {
    const testUrl = `${protocol}//${hostname}:${port}`;
    if (await testBackendConnection(testUrl)) {
      return testUrl;
    }
  }

  // Fallback to configured URL even if test fails
  return configuredUrl;
};

let cachedApiUrl = null;

export const getApiUrl = async () => {
  if (!cachedApiUrl) {
    cachedApiUrl = await detectBackendUrl();
  }
  return cachedApiUrl;
};

// Reset cached URL (useful for retrying)
export const resetApiUrl = () => {
  cachedApiUrl = null;
};

export default {
  getApiUrl,
  resetApiUrl,
  testBackendConnection,
  detectBackendUrl,
  getApiBaseUrl,
};
