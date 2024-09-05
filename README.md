# Blog Website

This is a **blog platform** built using **React** for the frontend and **Appwrite** as the backend service. It allows users to create, edit, and view blog posts. The website is styled with **Tailwind CSS** for a modern, responsive design.

## Features
- **User Authentication**: Users can register, log in, and manage their profiles.
- **Create, Read, Update, Delete (CRUD) Posts**: Users can create new posts, edit existing ones, and delete posts.
- **Rich Text Editor (RTE)**: Write blog posts with rich formatting support.
- **Image Upload**: Upload featured images for blog posts.
- **Responsive Design**: Fully responsive UI designed using Tailwind CSS.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling client-side routing.
- **React Hook Form**: For form management and validation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

### Backend
- **Appwrite**: Open-source backend-as-a-service (BaaS) for authentication, database, storage, and file management.
  - **Appwrite Database**: Stores blog post data and user information.
  - **Appwrite Storage**: Manages image uploads for blog posts.

### State Management
- **Redux**: For managing global state (e.g., user authentication).

## Installation

### Prerequisites
- **Node.js**: Make sure you have Node.js installed on your machine.
- **Appwrite Server**: You need to set up an Appwrite server. Follow the [Appwrite installation guide](https://appwrite.io/docs/installation).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/blog-website.git
   cd blog-website

2. **Install Dependencies**
    Run the following command to install the necessary npm packages:
    
    ```bash
    npm install
    
3. **Set Up Appwrite**
    - Set up an Appwrite project by following the Appwrite documentation.
        - Create the following collections in your Appwrite database:
        - Users: To store user data.
        - Posts: To store blog posts.
    - Enable storage for uploading images.
    - Obtain your Appwrite project credentials (API Endpoint, Project ID, API Keys).

4.  **Configure Environment Variables**

    Change the name of .env.sample file to .env and set your own urls and keys.
