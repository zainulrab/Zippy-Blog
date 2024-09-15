# Zippy Blog

Zippy Blog is a simple blogging application built with Node.js, Express, and MongoDB. It allows users to create, view, and delete blog posts. The application uses EJS as the templating engine and includes basic routes for handling blog operations.

## Features

- **Create Blog Posts**: Users can create new blog posts.
- **View Blog Posts**: All blog posts are listed on the home page.
- **View Post Details**: Users can view detailed information about each blog post.
- **Delete Blog Posts**: Users can delete blog posts.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Templating Engine**: EJS
- **Middleware**: Morgan for logging
- **Static Files**: Served from the `public` directory

## Getting Started

To get started with Zippy Blog, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/zippy-blog.git
    cd zippy-blog
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:

    Create a `.env` file in the root of your project and add the following line:

    ```env
    MONGO_URI=your-mongodb-connection-string
    ```

    Replace `your-mongodb-connection-string` with your MongoDB connection URI.

4. **Run the Application**:

    Using node:
    ```bash
    node app
    ```
    Using nodemon:
   ```bash
   npx nodemon app
    ```
    

    The application will be available at `http://localhost:3000`.

### Deployment

This project can be deployed using [Vercel](https://vercel.com/):

1. Create a new project on Vercel.
2. Connect it to your GitHub repository.
3. Add the `MONGO_URI` environment variable in Vercel's settings.
4. Deploy the project.

### Usage

- **Homepage**: Displays a list of all blog posts.
- **Create Blog**: Navigate to `/create/blog` to create a new blog post.
- **Blog Details**: Click on a blog post title to view its details.
- **Delete Blog**: Each blog post has a delete button to remove it.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure that your changes are well-tested and documented.

### Contact

For any questions or feedback, please contact me at zayn.rab604@gmail.com.
