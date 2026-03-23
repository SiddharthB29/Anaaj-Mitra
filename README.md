# Anaaj Mitra

A smart ration management system for Indian farmers and ration card holders.

## About

Anaaj Mitra is a web platform that simplifies grain procurement and ration management for Indian citizens. It connects farmers with FCI (Food Corporation of India) procurement centers and helps ration card holders manage their grain distribution efficiently.

## Features

- **Multi-Platform Access**: Use via mobile app, web portal, or IVR phone calls
- **Smart Matching**: Find the nearest FCI procurement center based on location and grain type
- **Real-Time Tracking**: Track grain submissions from request to payment
- **Multi-Language Support**: Available in 12 regional languages
- **IVR System**: Toll-free number for users without smartphones
- **SMS Notifications**: Get updates at every step

## How It Works

1. **Register & Submit**: Sign up with Aadhaar or phone number, submit grain details
2. **Smart Matching**: System finds the best procurement center for you
3. **Get Confirmation**: Receive booking ID with scheduled date/time via SMS
4. **Track & Deliver**: Track status in real-time and receive payment directly to your bank account

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd anaaj-mitra-farm-connect

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```sh
npm run build
```

## Tech Stack

- **Vite** - Build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **TanStack Query** - Data fetching

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # shadcn/ui components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Download.tsx
│   └── Footer.tsx
├── pages/         # Page components
│   └── Index.tsx
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Images and static files
```
