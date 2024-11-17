
# Contact Management System (CMS)

**Contact Management System (CMS)** is a multi-user contact management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Material UI for the user interface. It allows users to efficiently manage their contacts with features like adding, editing, deleting, and searching contacts.

## Features

### Roles and Functionalities
The CMS application supports the following functionalities:



- **Contact Management**
  - Add new contacts with details such as name, phone number, email, and address.
  - Edit existing contact details.
  - Delete contacts from the database.
  - View contacts in a paginated table with sort functionalities.

- **Error Handling and Validation**
  - Input validation on the backend to ensure data integrity.
  - Friendly error messages displayed to users for invalid actions.

- **Responsive Design**
  - Built with Material UI for a clean and responsive user interface.

---

## Installation

### Clone the Repository
```bash
git clone https://github.com/nivin2004/contact-management.git
```

Navigate to the root directory of the project:
```bash
cd contact-management
```

### Backend Setup
1. Open a new terminal in the project's root directory and navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create a `.env` file in the backend directory and add the following content:
    ```env
    MONGO_URI=your_mongo_db_uri_here
    ```
    Replace `your_mongo_db_uri_here` with your actual MongoDB connection URL.

    I have already given my sample mongodb url in the env file for testing.

3. Install backend dependencies:
    ```bash
    npm install
    ```

4. Run the backend server:
    ```bash
    npm start
    ```

---

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Run the frontend:
    ```bash
    npm start
    ```
