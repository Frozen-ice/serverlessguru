import { Auth } from 'aws-amplify';

// Configure Amplify with Cognito settings
const amplifyConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: process.env.REACT_APP_USER_POOL_ID || 'us-east-1_XXXXXXXXX',
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID || 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
    mandatorySignIn: true,
  }
};

// Initialize Amplify
Auth.configure(amplifyConfig);

export const authService = {
  // Sign up a new user
  signUp: async (email: string, password: string, name: string) => {
    try {
      const result = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
        },
      });
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Sign in an existing user
  signIn: async (email: string, password: string) => {
    try {
      const result = await Auth.signIn(email, password);
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Sign out the current user
  signOut: async () => {
    try {
      await Auth.signOut();
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return { success: true, data: user };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Get current session
  getCurrentSession: async () => {
    try {
      const session = await Auth.currentSession();
      return { success: true, data: session };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
