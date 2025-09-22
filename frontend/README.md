# React Frontend

Modern React application with TypeScript, Material-UI, and responsive design.

## Features

- User authentication (sign up/sign in)
- CRUD operations for items
- Responsive design (mobile, tablet, desktop)
- Material-UI components
- Error handling and validation
- Loading states and feedback

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Material-UI**: Professional UI components
- **React Router**: Client-side routing
- **Axios**: HTTP client for API communication

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm start
```

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
├── components/
│   ├── ItemCard.tsx      # Item display component
│   └── ItemForm.tsx      # Item creation/editing form
├── pages/
│   ├── AuthPage.tsx      # Authentication page
│   └── Dashboard.tsx     # Main dashboard
├── services/
│   ├── api.ts            # API client configuration
│   └── auth.ts           # Authentication service
├── types/
│   └── index.ts          # TypeScript type definitions
├── App.tsx               # Main application component
└── index.tsx             # Application entry point
```

## Configuration

### Environment Variables
Create `.env.local`:
```
REACT_APP_API_URL=https://your-api-gateway-url.amazonaws.com/dev
```

## Authentication

The application includes:
- Sign up functionality
- Sign in functionality
- Protected routes
- Session management
- Error handling for invalid credentials

## Components

### ItemCard
Displays individual items with edit and delete actions.

### ItemForm
Modal form for creating and editing items with validation.

### AuthPage
Authentication page with sign up and sign in tabs.

### Dashboard
Main application page with item management functionality.

## Responsive Design

The application is designed to work on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## API Integration

The frontend communicates with the backend through:
- RESTful API calls
- Error handling and retry logic
- Loading states
- Data validation

## Styling

- Material-UI theme customization
- Responsive grid system
- Consistent spacing and typography
- Dark/light theme support

## State Management

- React hooks for local state
- Context for global state
- Form state management
- Error state handling

## Performance

- Code splitting
- Lazy loading
- Optimized re-renders
- Efficient API calls

## Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The build folder can be deployed to:
- AWS S3 + CloudFront
- Netlify
- Vercel
- GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

### Code Style
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Component composition

### Best Practices
- Functional components with hooks
- TypeScript for type safety
- Material-UI for consistent UI
- Responsive design principles
