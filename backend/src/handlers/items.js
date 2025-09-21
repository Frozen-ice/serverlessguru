const { success, error } = require("../utils/response");
const { createItem } = require("../utils/dynamodb");
const Item = require("../models/Item");

module.exports.create = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const userId = event.requestContext.authorizer.claims.sub;
    
    const itemData = {
      ...body,
      userId
    };
    
    const item = new Item(itemData);
    const validationErrors = item.validate();
    
    if (validationErrors.length > 0) {
      return error(validationErrors.join(", "), 400);
    }
    
    await createItem(item.toJSON());
    
    return success(item.toJSON(), 201);
  } catch (err) {
    console.error("Error creating item:", err);
    return error("Internal server error", 500);
  }
};


module.exports.list = async (event) => {
  try {
    const userId = event.requestContext.authorizer.claims.sub;
    const { getItemsByUser } = require("../utils/dynamodb");
    
    const items = await getItemsByUser(userId);
    
    return success(items);
  } catch (err) {
    console.error("Error listing items:", err);
    return error("Internal server error", 500);
  }
};

module.exports.get = async (event) => {
  try {
    const { id } = event.pathParameters;
    const userId = event.requestContext.authorizer.claims.sub;
    const { getItem } = require("../utils/dynamodb");
    
    const item = await getItem(id);
    
    if (!item) {
      return error("Item not found", 404);
    }
    
    if (item.userId !== userId) {
      return error("Unauthorized", 403);
    }
    
    return success(item);
  } catch (err) {
    console.error("Error getting item:", err);
    return error("Internal server error", 500);
  }
};

module.exports.update = async (event) => {
  try {
    const { id } = event.pathParameters;
    const body = JSON.parse(event.body);
    const userId = event.requestContext.authorizer.claims.sub;
    const { getItem, updateItem } = require("../utils/dynamodb");
    
    // Check if item exists and belongs to user
    const existingItem = await getItem(id);
    if (!existingItem) {
      return error("Item not found", 404);
    }
    
    if (existingItem.userId !== userId) {
      return error("Unauthorized", 403);
    }
    
    const updatedItem = await updateItem(id, body);
    
    return success(updatedItem);
  } catch (err) {
    console.error("Error updating item:", err);
    return error("Internal server error", 500);
  }
};

module.exports.delete = async (event) => {
  try {
    const { id } = event.pathParameters;
    const userId = event.requestContext.authorizer.claims.sub;
    const { getItem, deleteItem } = require("../utils/dynamodb");
    
    // Check if item exists and belongs to user
    const existingItem = await getItem(id);
    if (!existingItem) {
      return error("Item not found", 404);
    }
    
    if (existingItem.userId !== userId) {
      return error("Unauthorized", 403);
    }
    
    await deleteItem(id);
    
    return success({ message: "Item deleted successfully" });
  } catch (err) {
    console.error("Error deleting item:", err);
    return error("Internal server error", 500);
  }
};
