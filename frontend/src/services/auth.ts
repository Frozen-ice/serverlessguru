// Simple authentication service for demo purposes
// In production, you would use AWS Cognito

// Mock user database for demo
const mockUsers = [
  { email: "admin@example.com", password: "admin123", name: "Admin User" },
  { email: "user@example.com", password: "user123", name: "Regular User" },
  { email: "demo@example.com", password: "demo123", name: "Demo User" }
];

export const authService = {
  // Sign up a new user
  signUp: async (email: string, password: string, name: string) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUser = mockUsers.find(user => user.email === email);
      if (existingUser) {
        return { success: false, error: "An account with this email already exists. Please sign in instead." };
      }
      
      // Validate password strength
      if (password.length < 6) {
        return { success: false, error: "Password must be at least 6 characters long." };
      }
      
      // Add new user to mock database
      mockUsers.push({ email, password, name });
      
      return { success: true, data: { user: { email, name } } };
    } catch (error: any) {
      return { success: false, error: "Failed to create account. Please try again." };
    }
  },

  // Sign in an existing user
  signIn: async (email: string, password: string) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Find user in mock database
      const user = mockUsers.find(u => u.email === email);
      
      if (!user) {
        return { success: false, error: "No account found with this email address. Please sign up first." };
      }
      
      if (user.password !== password) {
        return { success: false, error: "Incorrect password. Please try again." };
      }
      
      // Successful login
      return { success: true, data: { user: { email: user.email, name: user.name } } };
    } catch (error: any) {
      return { success: false, error: "Login failed. Please try again." };
    }
  },

  // Sign out the current user
  signOut: async () => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem("cognito_token");
      if (token) {
        return { success: true, data: { user: { email: "demo@example.com" } } };
      }
      return { success: false, error: "No user logged in" };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Get current session
  getCurrentSession: async () => {
    try {
      const token = localStorage.getItem("cognito_token");
      if (token) {
        return { 
          success: true, 
          data: { 
            getIdToken: () => ({ getJwtToken: () => token })
          } 
        };
      }
      return { success: false, error: "No session found" };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
