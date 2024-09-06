export const isAuthenticated = () => {
    // Mock authentication check (replace with real logic)
    return localStorage.getItem('auth') === 'true';
  };