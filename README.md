Personal Finance Tracker
A web application to help users manage their personal finances by tracking income, expenses, and budgets. Built using React and Firebase.

Features
User authentication (signup, login, logout) using Firebase.
Dashboard displaying an overview of the user's financial status.
Add, edit, and delete transactions.
Categorize transactions (e.g., groceries, entertainment, bills).
Track spending against the budget.
Responsive design for both desktop and mobile devices.

Technologies Used
Frontend: React, Vite, React Router
Backend: Firebase (Authentication, Firestore)
Styling: CSS

Getting Started
Prerequisites
Node.js and npm installed on your machine.
Firebase account for backend services.

Installation
Clone the repository:

git clone https://github.com/yourusername/personal-finance-tracker.git
cd personal-finance-tracker

Install dependencies:
npm install

Set up Firebase:
Go to the Firebase Console.
Create a new project.
Add a web app to the project and copy the Firebase SDK configuration.

Create a .env file in the root of your project and add the Firebase configuration variables:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

Running the App
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:3000.

Usage
Sign up for a new account or log in with an existing account.
Navigate to the dashboard to see an overview of your financial status.
Add new transactions by filling out the form with the description, amount, and category.
View your transactions in the transaction list.
Set monthly budgets for different categories and track your spending against these budgets.

