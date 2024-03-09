import config from "../configs/config.js";
import { Client, Account } from "appwrite";

// Define a class for handling authentication-related tasks
export class AuthService {
  // Initialize a new Client instance
  client = new Client();

  // Initialize an Account instance
  account;

  // Constructor function to initialize the AuthService
  constructor() {
    // Configure the client with the endpoint URL and project ID from the config
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);

    // Initialize the account with the configured client
    this.account = new Account(this.client);
  }

  // Method for creating a new user account
  async createAccount({ email, password, userName }) {
    try {
      // Attempt to create a new account with provided credentials
      const authorAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        userName
      );

      // If account creation is successful, log in the new user
      if (authorAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }

  // Method for logging in an existing user
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Method for retrieving information about the current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser() :: ", error);
    }
    return null;
  }

  //Method for reader/guest accounts
  async readers() {
    try {
      const readerID = ID.unique();
      const reader = await this.account.create(
        readerID,
        "reader@eepaau.com",
        "",
        "Reader"
      );
      await this.account.updateStatus(readerID, "guest");
      return reader;
    } catch (error) {
      throw error;
    }
  }

  // Method for logging out the current user
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout() :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
