import config from "../configs/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class DBService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async getNewsPost(slug) {
    try {
      this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getNewsPost() ::", error);
      return false;
    }
  }

  async getNews(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service :: getNews() ::", error);
      return false;
    }
  }

  async createNews(
    slug,
    {
      title,
      author,
      createdOn,
      newsCategory,
      newsContent,
      newsImage1,
      newsImage2,
      authorId,
      status,
    }
  ) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          author,
          createdOn,
          newsCategory,
          newsContent,
          newsImage1,
          newsImage2,
          authorId,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createNews() ::", error);
      return false;
    }
  }

  async updateNews(
    slug,
    {
      title,
      author,
      createdOn,
      newsCategory,
      newsContent,
      newsImage1,
      newsImage2,
      status,
      isFeatured,
      isBreaking,
      isPopular,
      isEditorsChoice,
    }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          author,
          createdOn,
          newsCategory,
          newsContent,
          newsImage1,
          newsImage2,
          status,
          likes,
          dislikes,
          views,
          isFeatured,
          isBreaking,
          isPopular,
          isEditorsChoice,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updateNews() ::", error);
      return false;
    }
  }

  async deleteNews(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteNews() ::", error);
      return false;
    }
  }

  async uploadFiles(file) {
    try {
      return await this.bucket.createFile(config.appwriteBucketID, ID.unique());
    } catch (error) {
      console.log("Appwrite Service :: uploadFiles() ::", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.createFile(config.appwriteBucketID, fileId);
    } catch (error) {
      console.log("Appwrite Service :: uploadFiles() ::", error);
      return false;
    }
  }

  getfilePreview(fileId){
    return this.bucket.getFilePreview(
      config.appwriteBucketID,
      fileId
    ).href
  }
}

const appwriteServie = new DBService()
export default appwriteServie;