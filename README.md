# Serverless Guru - Full-Stack REST API Application

A complete serverless application built with AWS Lambda, API Gateway, DynamoDB, and React. This project demonstrates modern cloud architecture patterns and full-stack development practices.

## 🏗️ Architecture Overview

### Backend (AWS Serverless)
- **API Gateway**: RESTful API endpoints
- **Lambda Functions**: 5 Node.js functions for CRUD operations
- **DynamoDB**: NoSQL database for data persistence
- **Serverless Framework**: Infrastructure as Code
- **AWS Cognito**: User authentication (configured but using mock auth for demo)

### Frontend (React)
- **React 18**: Modern React with TypeScript
- **Material-UI**: Professional UI components
- **React Router**: Client-side routing
- **Axios**: HTTP client for API communication
- **Responsive Design**: Mobile-first approach

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- AWS CLI configured
- Serverless Framework CLI

### Backend Setup
```bash
cd backend
npm install
npm run deploy:dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 📁 Project Structure

```
serverless-guru/
├── backend/                 # Serverless backend
│   ├── src/
│   │   ├── handlers/        # Lambda function handlers
│   │   ├── models/          # Data models
│   │   └── utils/           # Utility functions
│   ├── serverless.yml       # Infrastructure configuration
│   └── package.json
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   └── types/           # TypeScript definitions
│   └── package.json
├── .github/workflows/       # CI/CD pipeline
└── README.md
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/items` | Create new item |
| GET | `/api/items` | Get all items |
| GET | `/api/items/{id}` | Get specific item |
| PUT | `/api/items/{id}` | Update item |
| DELETE | `/api/items/{id}` | Delete item |

## 🛠️ Development

### Local Development
```bash
# Backend (offline mode)
cd backend
npm run offline

# Frontend
cd frontend
npm start
```

### Environment Variables
The frontend needs to know where to find the deployed backend API. Create `.env.local` in the frontend directory:

```
REACT_APP_API_URL=https://oigodm7549.execute-api.us-east-2.amazonaws.com/dev
```

**What is REACT_APP_API_URL?**
- This environment variable tells the React frontend where to send API requests
- It points to your deployed AWS API Gateway endpoint
- The React app uses this URL to communicate with the serverless backend
- Without this, the frontend would try to connect to localhost and fail

## 🚀 Deployment

### Development Environment
```bash
cd backend
npm run deploy:dev
```

### Production Environment
```bash
cd backend
npm run deploy:prod
```

### CI/CD Pipeline
The project includes GitHub Actions workflow for automated deployment:
- Triggers on push to main branch
- Runs tests and builds
- Deploys to dev and prod environments
- Updates Serverless Dashboard

## 📊 Monitoring & Observability

### Serverless Dashboard
- Real-time metrics and logs
- Function performance monitoring
- Error tracking and alerting
- Cost analysis

### AWS CloudWatch
- Lambda function logs
- API Gateway metrics
- DynamoDB performance metrics

## 🔐 Authentication

The application includes authentication infrastructure:
- AWS Cognito User Pool (configured)
- JWT token management
- Protected routes
- Session handling

*Note: Currently using mock authentication for demo purposes*

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

### API Testing
```bash
# Get all items
curl https://oigodm7549.execute-api.us-east-2.amazonaws.com/dev/api/items

# Create item
curl -X POST https://oigodm7549.execute-api.us-east-2.amazonaws.com/dev/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Item", "description": "Test Description"}'
```

## 📱 Features

### Frontend Features
- ✅ User authentication (sign up/sign in)
- ✅ CRUD operations for items
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Material-UI components
- ✅ Error handling and validation
- ✅ Loading states and feedback

### Backend Features
- ✅ Serverless architecture
- ✅ RESTful API design
- ✅ DynamoDB integration
- ✅ Error handling and logging
- ✅ CORS configuration
- ✅ Environment-based deployment

## 🔧 Configuration

### Serverless Framework
The `serverless.yml` file configures:
- AWS provider settings
- Lambda functions and triggers
- DynamoDB table schema
- API Gateway configuration
- IAM permissions
- Environment variables

### React Configuration
- TypeScript configuration
- Material-UI theme customization
- API service configuration
- Routing setup

## 📈 Performance Considerations

- **Cold Start Optimization**: Lambda functions optimized for quick startup
- **Database Design**: DynamoDB single-table design for efficient queries
- **Frontend Optimization**: Code splitting and lazy loading
- **Caching**: API Gateway caching for frequently accessed data

## 🛡️ Security

- **IAM Roles**: Least privilege access
- **CORS**: Configured for specific origins
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Secure error messages without sensitive data

## 💰 Cost Optimization

- **Pay-per-request**: DynamoDB on-demand billing
- **Lambda Optimization**: Right-sized memory allocation
- **API Gateway**: Efficient endpoint design
- **Monitoring**: Cost tracking and optimization

## �� Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

**Lambda Function Errors**
- Check CloudWatch logs
- Verify IAM permissions
- Test locally with serverless-offline

**Frontend API Connection Issues**
- Verify API Gateway URL in .env.local
- Check CORS configuration
- Ensure environment variables are set correctly

**Authentication Issues**
- Verify Cognito configuration
- Check token expiration
- Review authentication flow

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review AWS CloudWatch logs
- Check Serverless Dashboard metrics
- Open an issue in the repository

---

Built with ❤️ using AWS Serverless technologies
