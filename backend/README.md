# Serverless Guru Backend

## Overview
This is the backend API built with Serverless Framework, AWS Lambda, DynamoDB, and API Gateway.

## Features
- ✅ CRUD operations for items
- ✅ AWS Cognito authentication
- ✅ DynamoDB integration
- ✅ API Gateway REST API
- ✅ Multi-stage deployments (dev, prod)

## API Endpoints

### Authentication Required
All endpoints require AWS Cognito authentication.

### Items API
- `POST /api/items` - Create a new item
- `GET /api/items` - Get all items for the authenticated user
- `GET /api/items/{id}` - Get a specific item
- `PUT /api/items/{id}` - Update an item
- `DELETE /api/items/{id}` - Delete an item

## Local Development

### Prerequisites
- Node.js 18.x
- AWS CLI configured
- Serverless Framework installed globally: `npm install -g serverless`

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure AWS credentials:
   ```bash
   aws configure
   ```

3. Run locally:
   ```bash
   npm run offline
   ```

### Deployment

#### Development
```bash
npm run deploy:dev
```

#### Production
```bash
npm run deploy:prod
```

#### Remove Stack
```bash
npm run remove
```

## Environment Variables
- `STAGE`: Deployment stage (dev, prod)
- `REGION`: AWS region
- `ITEMS_TABLE`: DynamoDB table name
- `USER_POOL_ID`: Cognito User Pool ID
- `USER_POOL_CLIENT_ID`: Cognito User Pool Client ID

## Architecture
- **API Gateway**: REST API with CORS enabled
- **Lambda Functions**: 5 functions for CRUD operations
- **DynamoDB**: NoSQL database with GSI for user queries
- **Cognito**: User authentication and authorization

## Data Model

### Item
```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "userId": "cognito-user-id",
  "createdAt": "ISO-8601-timestamp",
  "updatedAt": "ISO-8601-timestamp"
}
```

## Security
- All endpoints are protected with Cognito User Pool authorization
- Users can only access their own items
- Input validation on all endpoints
- CORS enabled for frontend integration
