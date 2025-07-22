# Projects Showcase

A modern web application built with React and Vite that allows users to showcase and manage their projects. The application features user authentication, project management, and a responsive dashboard interface.

## 🚀 Features

- **User Authentication**
  - Secure signup and login functionality
  - Protected routes for authenticated users
  - User session management

- **Project Management**
  - Create and showcase projects
  - Update project information
  - Delete projects
  - View all projects in a responsive grid

- **User Dashboard**
  - Personal profile management
  - Edit profile information
  - View and manage personal projects
  - Create new projects

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form
- **UI Components**:
  - Tailwind CSS
  - React Icons
  - React Hot Toast for notifications
- **Backend/Database**: Supabase
- **Development Tools**:
  - ESLint for code quality
  - React Query DevTools for debugging

## 📦 Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd projects-showcase
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Supabase configuration:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── features/             # Feature-based components and hooks
│   ├── authentication/   # Authentication related components
│   ├── Dashboard/        # Dashboard related components
│   └── projects/        # Project management components
├── pages/               # Page components
├── services/           # API and service configurations
└── ui/                 # Reusable UI components
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔒 Authentication

The application uses Supabase for authentication and database management. Users can:

- Sign up with email and password
- Log in with existing credentials
- Manage their session
- Access protected routes when authenticated

## 💻 Development

The project follows a feature-based architecture where related components and their hooks are grouped together. It uses React Query for efficient server state management and React Hook Form for form handling.

## 🚥 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
