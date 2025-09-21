# Serverless Guru - Full Stack REST API Application

## Project Overview
This is a full-stack REST API application built with AWS Serverless Framework and React frontend.

## Architecture
- **Backend**: Serverless Framework with AWS Lambda, API Gateway, and DynamoDB
- **Frontend**: React application with modern UI
- **CI/CD**: GitHub Actions for automated deployments
- **Authentication**: AWS Cognito integration

## Project Structure
```
├── backend/          # Serverless Framework backend
├── frontend/         # React frontend application
├── docs/            # Documentation and screenshots
└── README.md        # This file
```

## Getting Started
See individual README files in backend/ and frontend/ directories for setup instructions.

## Features
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ AWS Lambda functions (4-5 functions)
- ✅ DynamoDB integration
- ✅ API Gateway REST API
- ✅ React frontend with modern UI
- ✅ Responsive design (4+ device sizes)
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Multi-stage deployments (dev, prod)
- ✅ AWS Cognito authentication
- ✅ Comprehensive documentation

## Deployment
The application supports multi-stage deployments:
- **Development**: Auto-deploys on push to main branch
- **Production**: Manual deployment or tagged releases

## API Endpoints
- POST /api/items - Create new item
- GET /api/items - Get all items
- GET /api/items/{id} - Get specific item
- PUT /api/items/{id} - Update item
- DELETE /api/items/{id} - Delete item

## Tech Stack
- **Backend**: Node.js, Serverless Framework, AWS Lambda, DynamoDB, API Gateway
- **Frontend**: React, Material-UI, Axios
- **CI/CD**: GitHub Actions
- **Authentication**: AWS Cognito
- **Infrastructure**: AWS (Lambda, DynamoDB, API Gateway, Cognito)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
MIT License
