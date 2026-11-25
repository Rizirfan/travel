# TripMate Web Application (Angular SSR)

A modern, high-performance travel exploration and itinerary planning web application built with Angular 22 and Server-Side Rendering (SSR).

---

## 🧭 Routes & Features

- **`/explore`**: Interactive panoramic carousel, category filters, and detailed destination showcases.
- **`/agencies`**: Directory of global travel agencies with reviews, perks, and direct booking links.
- **`/planner`**: CRUD itinerary scheduler with real-time budget, duration, and traveler count calculations.
- **`/login`**: Dual-tab authentication screen:
  - **Sign In Tab**: Log in using stored JSON credentials or 1-click Quick Fill.
  - **Create Account Tab**: Register new users with Name, Email, Password, and Theme Preference.
  - **User Profile & JSON Inspector**: View stored user profile, switch themes, inspect live JSON data, or copy it to clipboard.

---

## 🛠️ Development & Deployment Commands

### Development Server
```bash
npm start
# Runs live development server at http://localhost:4200
```

### Production Build & SSR Server
```bash
# Install dependencies after cloning the repository
npm install

# Build browser/server bundles, then start Node.js Express SSR Server (port 4000)
npm run serve:ssr:travel
```

The generated `dist/` folder is intentionally excluded from Git. The command above creates it before starting the server, so it does not need to be uploaded to GitHub.

---

## 💾 Web JSON Data Storage

All user credentials, theme preferences, and scheduled trips are stored in the browser's `localStorage` under:
- **`tripmate_users_json_db`**: Registry of all registered user account objects.
- **`tripmate_active_session`**: Currently authenticated user session.
- **`wander_theme_mode`**: Active theme (`dark` or `light`).
