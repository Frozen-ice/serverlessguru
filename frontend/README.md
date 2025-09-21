# Serverless Guru Frontend

## Overview
This is a React TypeScript frontend application that connects to the serverless backend API.

## Features
- ✅ Modern React with TypeScript
- ✅ Material-UI components for beautiful design
- ✅ Responsive design (4+ device sizes)
- ✅ CRUD operations for items
- ✅ Authentication with AWS Cognito
- ✅ Error handling and loading states
- ✅ Form validation

## Tech Stack
- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **React Router** for navigation
- **Axios** for API calls
- **AWS Amplify** for authentication

## Getting Started

### Prerequisites
- Node.js 18.x
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

3. Update environment variables in `.env.local`:
   ```
   REACT_APP_API_URL=https://your-api-gateway-url.amazonaws.com/dev
   ```

### Development
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build
```bash
npm run build
```

### Test
```bash
npm test
```

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ItemCard.tsx    # Item display card
│   └── ItemForm.tsx    # Item creation/editing form
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   └── AuthPage.tsx    # Login/signup page
├── services/           # API services
│   └── api.ts         # API client
├── types/             # TypeScript type definitions
│   └── index.ts       # Shared types
└── App.tsx            # Main app component
```

## Responsive Design
The application is designed to work on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop (1440px+)

## Authentication
- Users must sign up/sign in to access the dashboard
- JWT tokens are stored in localStorage
- Protected routes redirect to login if not authenticated

## API Integration
The frontend connects to the serverless backend API with the following endpoints:
- `GET /api/items` - Fetch user items
- `POST /api/items` - Create new item
- `GET /api/items/{id}` - Get specific item
- `PUT /api/items/{id}` - Update item
- `DELETE /api/items/{id}` - Delete item

## Deployment
The frontend can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS S3 + CloudFront**
- **GitHub Pages**

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
