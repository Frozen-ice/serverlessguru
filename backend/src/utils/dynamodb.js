const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

const ITEMS_TABLE = process.env.ITEMS_TABLE;

const createItem = async (item) => {
  const params = {
    TableName: ITEMS_TABLE,
    Item: item
  };
  
  return await dynamodb.put(params).promise();
};

const getItem = async (id) => {
  const params = {
    TableName: ITEMS_TABLE,
    Key: { id }
  };
  
  const result = await dynamodb.get(params).promise();
  return result.Item;
};

const getItemsByUser = async (userId) => {
  const params = {
    TableName: ITEMS_TABLE,
    IndexName: "UserIdIndex",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": userId
    }
  };
  
  const result = await dynamodb.query(params).promise();
  return result.Items;
};

const updateItem = async (id, updateData) => {
  const params = {
    TableName: ITEMS_TABLE,
    Key: { id },
    UpdateExpression: "SET #name = :name, #description = :description, #updatedAt = :updatedAt",
    ExpressionAttributeNames: {
      "#name": "name",
      "#description": "description",
      "#updatedAt": "updatedAt"
    },
    ExpressionAttributeValues: {
      ":name": updateData.name,
      ":description": updateData.description,
      ":updatedAt": new Date().toISOString()
    },
    ReturnValues: "ALL_NEW"
  };
  
  const result = await dynamodb.update(params).promise();
  return result.Attributes;
};

const deleteItem = async (id) => {
  const params = {
    TableName: ITEMS_TABLE,
    Key: { id }
  };
  
  return await dynamodb.delete(params).promise();
};

module.exports = {
  createItem,
  getItem,
  getItemsByUser,
  updateItem,
  deleteItem
};
