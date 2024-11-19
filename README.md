# Apparel-PLM
Apparel-PLM enhances Product Lifecycle Management in the apparel industry by integrating web technologies and image processing. It enables real-time tracking and automatic counting of garments, along with seamless team collaboration, improving productivity, reducing errors, and streamlining the manufacturing process.



## Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- RESTful API

## Features

### Admin Dashboard

- **Client**: Allows administrators to manage products, add Orders, and perform various administrative tasks.
- **Backend**: Handles authentication, CRUD operations for products, and other admin-related API endpoints.

### User Dashboard

- **Client**: Provides users with a user-friendly interface to browse products and view Orders.
- **Backend**: Manages user authentication, product retrieval, order processing, and other user-related API endpoints.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/Questra-Digital/manufacturing-progress-tracker.git
    cd manufacturing-progress-tracker
    ```

2. **Install dependencies for Admin Dashboard**

    - **Client**
        ```sh
        cd admin__dashboard/client
        npm install
        ```

    - **Backend**
        ```sh
        cd admin__dashboard/backend
        npm install
        ```

3. **Install dependencies for User Dashboard**

    - **Client**
        ```sh
        cd User__Dashboard/client
        npm install
        ```

    - **Backend**
        ```sh
        cd User__Dashboard/backend
        npm install
        ```

### Running the Project

1. **Admin Dashboard**

    - **Client**
        ```sh
        open a new terminal
        cd admin__dashboard/client
        npm start
        ```
      This will start the development server for the admin client at `http://localhost:3000`.

    - **Backend**
        ```sh
        open a new terminal
        cd admin__dashboard/backend
        npm start
        ```
      The admin backend server will run at `http://localhost:8080`.

2. **User Dashboard**

    - **Client**
        ```sh
        open a new terminal
        cd User__Dashboard/client
        npm start
        ```
      This will start the development server for the user client at `http://localhost:3000`.

    - **Backend**
        ```sh
        open a new terminal
        cd User__Dashboard/backend
        npm start
        ```
      The user backend server will run at `http://localhost:8080`.

