import axios from "axios";
import { Item, CreateItemRequest, UpdateItemRequest, ApiResponse } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("cognito_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const itemsApi = {
  // Get all items
  getItems: async (): Promise<Item[]> => {
    const response = await api.get<ApiResponse<Item[]>>("/api/items");
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    throw new Error(response.data.error || "Failed to fetch items");
  },

  // Get single item
  getItem: async (id: string): Promise<Item> => {
    const response = await api.get<ApiResponse<Item>>(`/api/items/${id}`);
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    throw new Error(response.data.error || "Failed to fetch item");
  },

  // Create new item
  createItem: async (item: CreateItemRequest): Promise<Item> => {
    const response = await api.post<ApiResponse<Item>>("/api/items", item);
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    throw new Error(response.data.error || "Failed to create item");
  },

  // Update item
  updateItem: async (id: string, item: UpdateItemRequest): Promise<Item> => {
    const response = await api.put<ApiResponse<Item>>(`/api/items/${id}`, item);
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    throw new Error(response.data.error || "Failed to update item");
  },

  // Delete item
  deleteItem: async (id: string): Promise<void> => {
    const response = await api.delete<ApiResponse<{ message: string }>>(`/api/items/${id}`);
    if (!response.data.success) {
      throw new Error(response.data.error || "Failed to delete item");
    }
  },
};

export default api;
