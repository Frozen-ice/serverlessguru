const { v4: uuidv4 } = require("uuid");

class Item {
  constructor(data) {
    this.id = data.id || uuidv4();
    this.name = data.name;
    this.description = data.description;
    this.userId = data.userId;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
  }

  validate() {
    const errors = [];
    
    if (!this.name || this.name.trim().length === 0) {
      errors.push("Name is required");
    }
    
    if (!this.description || this.description.trim().length === 0) {
      errors.push("Description is required");
    }
    
    if (!this.userId) {
      errors.push("User ID is required");
    }
    
    return errors;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      userId: this.userId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = Item;
