# 📝 NoteHub

A modern note-taking application built with Next.js, featuring server-side rendering, client-side interactivity, and efficient state management.

## ✨ Features

- **📚 Note Management** - Create, view, search, and delete notes
- **🔍 Search & Filter** - Find notes quickly with keyword search
- **📄 Pagination** - Navigate through large collections efficiently  
- **⚡ SSR/CSR Hybrid** - Optimized performance with server and client rendering
- **🎨 Modern UI** - Clean, responsive design with CSS Modules
- **🔄 Real-time Updates** - Powered by TanStack Query for seamless data synchronization

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **HTTP Client**: Axios
- **UI**: Custom components with responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd 06-notehub-nextjs
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
# Create .env.local file
NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token_here
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── notes/             # Notes routes
│       ├── page.tsx       # Notes list (SSR)
│       ├── Notes.client.tsx # Client-side logic
│       ├── loading.tsx    # Loading UI
│       ├── error.tsx      # Error handling
│       └── [id]/          # Dynamic note details
├── components/            # Reusable UI components
│   ├── Header/           # Navigation header
│   ├── Footer/           # Contact footer
│   ├── NoteList/         # Notes grid display
│   ├── NoteForm/         # Note creation form
│   ├── SearchBox/        # Search functionality
│   ├── Pagination/       # Page navigation
│   ├── Modal/            # Modal dialogs
│   └── TanStackProvider/ # Query client provider
├── lib/                  # Utility functions
│   └── api.ts            # API service layer
├── types/                # TypeScript definitions
│   └── note.ts           # Note interface
└── constants/            # App constants
    └── index.ts          # API URLs and config
```

## 🎯 Key Features

### Server-Side Rendering (SSR)
- Pre-fetches data on the server for better SEO and performance
- Hydrates client-side state for seamless interactivity

### Client-Side Interactivity  
- Real-time search with debouncing
- Optimistic updates for better UX
- Error handling and loading states

### Responsive Design
- Mobile-first approach
- Clean, modern interface
- Accessible navigation and interactions

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 API Integration

The app integrates with a REST API for note management:

- `GET /notes` - Fetch notes with search and pagination
- `POST /notes` - Create new note
- `GET /notes/:id` - Get note details
- `DELETE /notes/:id` - Delete note

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The app can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and modern web technologies.
