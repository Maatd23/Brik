# Brik - README

**Brik** is a sophisticated web application designed to streamline product management efficiently. Below are the steps to set up and run the program:

## Prerequisites

Ensure that you have the following tools installed on your system:

- [Node.js](https://nodejs.org)
- npm (Node Package Manager, included with Node.js)

## Getting Started

1. **Clone the Repository:**

   To clone the Brik repository, run the following command:

   ```shell
   git clone https://github.com/Maatd23/Brik.git
   ```

2. **Navigate to Project Directory:**

   Change to the Brik project directory using the `cd` command:

   ```shell
   cd Brik
   ```

## Step 1: Launch the Server

1. **Navigate to Server Directory:**

   Move to the server directory by executing:

   ```shell
   cd server
   ```

2. **Install Dependencies:**

   Install the required dependencies for the server:

   ```shell
   npm install
   ```

3. **Run Database Migration:**

   Run the database migration script:

   ```shell
   npm run db-dev
   ```

   > **Note:** Be cautious not to use the same database name as the configuration database, as it will be overwritten.

4. **Start the Server:**

   Start the server by running:

   ```shell
   npm run start
   ```

## Step 2: Running the App

1. **Navigate to App Directory:**

   Move to the application directory using:

   ```shell
   cd 'client admin'
   ```

2. **Install Dependencies:**

   Install the necessary dependencies for the application:

   ```shell
   npm install
   ```

3. **Start the Development Server:**

   Initiate the development server with:

   ```shell
   npm run dev
   ```

## Step 3: Access the Login Page

Once registered, access the `/login` page to log in. For returning users, this is the first page when running the program.

Use the following credentials for the admin user:

- Email: admin@gmail.com
- Password: adminpassword

## Step 4: Explore the Home Page

After logging in, you'll be directed to the home page where you can observe the total count of products and categories.

## Step 5: Register User

If you're a new user, register by visiting the `/register` page or clicking the registration button.

## Step 6: Manage Products

Click the "Product" option in the sidebar (`/product`) to navigate to a page displaying products in a tabular format. Products can be deleted from here.

## Step 7: Product Details

Upon clicking a product in the table, you'll be redirected to a detailed page. Here, products can also be deleted.

## Step 8: Add New Product

To add a new product, access the `/addproduct` page or click the `Add product` button on the sidebar.

## Step 9: Log Out

To log out, click the profile button at the bottom left of the sidebar. You'll find the logout option there to end your session.

Thank you for choosing **Brik**! If you encounter any issues or have questions, don't hesitate to reach out for support. Enjoy efficient product management!
