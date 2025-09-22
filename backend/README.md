# Serverless Backend

AWS serverless backend built with Serverless Framework, featuring Lambda functions, API Gateway, and DynamoDB.

## Architecture

- **API Gateway**: RESTful API with CORS support
- **Lambda Functions**: 5 Node.js functions for CRUD operations
- **DynamoDB**: Single-table design for item storage
- **Serverless Framework**: Infrastructure as Code

## Lambda Functions

| Function | HTTP Method | Endpoint | Description |
|----------|-------------|----------|-------------|
| createItem | POST | /api/items | Create new item |
| getItems | GET | /api/items | List all items |
| getItem | GET | /api/items/{id} | Get specific item |
| updateItem | PUT | /api/items/{id} | Update item |
| deleteItem | DELETE | /api/items/{id} | Delete item |

## Database Schema

### Items Table
- **Primary Key**: id (String)
- **Attributes**: name, description, userId, createdAt, updatedAt
- **Billing**: Pay-per-request

## Deployment

### Prerequisites
```bash
npm install -g serverless
aws configure
```

### Deploy to Development
```bash
npm run deploy:dev
```

### Deploy to Production
```bash
npm run deploy:prod
```

### Local Development
```bash
npm run offline
```

## Configuration

### Environment Variables
- STAGE: Deployment stage (dev/prod)
- REGION: AWS region
- ITEMS_TABLE: DynamoDB table name

### IAM Permissions
The service requires permissions for:
- DynamoDB operations (Query, Scan, GetItem, PutItem, UpdateItem, DeleteItem)
- CloudWatch Logs
- API Gateway

## Monitoring

### Serverless Dashboard
- Function metrics and logs
- Performance monitoring
- Error tracking

### CloudWatch
- Lambda function logs
- DynamoDB metrics
- API Gateway logs

## Testing

### Unit Tests
```bash
npm test
```

### API Testing
```bash
# Test locally
curl http://localhost:3000/api/items

# Test deployed
curl https://your-api-gateway-url.amazonaws.com/dev/api/items
```

## Security

- IAM roles with least privilege
- Input validation and sanitization
- CORS configuration
- Error handling without sensitive data exposure

## Performance

- Cold start optimization
- Efficient DynamoDB queries
- Proper error handling
- Memory optimization

## Development

### Project Structure
```
src/
├── handlers/
│   └── items.js          # Lambda function handlers
├── models/
│   └── Item.js           # Data model definitions
└── utils/
    ├── dynamodb.js       # DynamoDB operations
    └── response.js       # API response utilities
```

### Adding New Functions
1. Create handler in src/handlers/
2. Add function definition in serverless.yml
3. Configure IAM permissions
4. Test locally with serverless-offline

## Troubleshooting

### Common Issues
- **Cold starts**: Optimize function size and memory
- **DynamoDB errors**: Check IAM permissions
- **CORS issues**: Verify API Gateway configuration
- **Timeout errors**: Increase Lambda timeout

### Debugging
```bash
# View logs
serverless logs -f functionName --stage dev

# Debug locally
serverless offline --debug
```
