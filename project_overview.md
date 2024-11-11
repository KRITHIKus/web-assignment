Socialverse Admin Dashboard

Table of Contents

Project Overview

Features

Technologies Used

Getting Started

Installation

Running the Project


Project Structure

Components Overview

Future Improvements

License


Project Overview

The Socialverse Admin Dashboard is a responsive web application built with Next.js and TypeScript. It serves as an admin panel for a social media platform, allowing administrators to manage users, moderate content, and view analytics data. The dashboard is fully responsive and has a modular design, making it easy to maintain and extend.

Features

User Management: View, track, and manage user data.

Content Moderation: Monitor flagged content and manage it effectively.

Analytics: Visualize user engagement with data charts.

Responsive Design: Optimized for both desktop and mobile views.

Dynamic Data Fetching: Efficient data handling and caching using SWR.

Data Visualization: Interactive charts built with Chart.js for engagement insights.


Technologies Used

Next.js: Optimized framework for React with server-side rendering.

TypeScript: Adds type safety to ensure code quality.

Tailwind CSS: Utility-based CSS for quick and flexible styling.

Chart.js: Data visualization for analytics.

SWR: React hook for data fetching and caching.

React: Component-based UI library for building dynamic interfaces.


Getting Started

Installation

1. Clone the repository.


2. Install dependencies.


3. Set up the environment variables if necessary (e.g., API URL).



Running the Project

To run the development server, start the app in development mode. For production, build the app and start the production server.

Project Structure

public/: Contains static assets like images and icons.

src/app: Main directory for pages and layout in the Next.js app.

components/: Contains reusable components for different sections of the dashboard.

styles/: Holds global and custom CSS, including Tailwind configuration.

utils/: Contains utility functions, such as those for data fetching.

types/: TypeScript types and interfaces for better code clarity.


Components Overview

Navbar: Top navigation across pages, linking to major sections.

Sidebar: Left-hand navigation for different dashboard views.

UserManagement: Manages user information and permissions.

ContentModeration: Allows admins to moderate flagged posts.

Analytics: Renders data visualizations for user engagement metrics.


Future Improvements

Advanced Filtering: Enhance the user management section with advanced filtering and sorting options.

Detailed Moderation Tools: Provide more options for content moderation, like approval and deletion controls.

Additional Analytics: Integrate new metrics, such as monthly growth or active users.

Authentication: Add secure login with role-based access.

project explanation video : https://youtu.be/ON_imXLeQCw
