# Personal Finance Tracker

<p style="font-size: 20px;">A web application to help users manage their personal finances by tracking income, expenses, and budgets. Built using React and Firebase.</p>

## Features

<ul style="font-size: 18px;">
  <li><strong>User Authentication</strong>: Signup, login, logout using Firebase.</li>
  <li><strong>Dashboard</strong>: Display an overview of the user's financial status.</li>
  <li><strong>Transaction Management</strong>: Add, edit, and delete transactions.</li>
  <li><strong>Categorization</strong>: Categorize transactions (e.g., groceries, entertainment, bills).</li>
  <li><strong>Budget Tracking</strong>: Track spending against the budget.</li>
  <li><strong>Responsive Design</strong>: Works well on both desktop and mobile devices.</li>
</ul>

## Technologies Used

<ul style="font-size: 18px;">
  <li><strong>Frontend</strong>: React, Vite, React Router</li>
  <li><strong>Backend</strong>: Firebase (Authentication, Firestore)</li>
  <li><strong>Styling</strong>: CSS</li>
</ul>

## Getting Started

### Prerequisites

<ul style="font-size: 18px;">
  <li>Node.js and npm installed on your machine.</li>
  <li>Firebase account for backend services.</li>
</ul>

### Installation

<ol style="font-size: 18px;">
  <li><strong>Clone the repository:</strong></li>

<pre><code>git clone https://github.com/yourusername/personal-finance-tracker.git
cd personal-finance-tracker
</code></pre>

  <li><strong>Install dependencies:</strong></li>

<pre><code>npm install
</code></pre>

  <li><strong>Set up Firebase:</strong></li>
  <ul style="font-size: 18px;">
    <li>Go to the <a href="https://console.firebase.google.com/">Firebase Console</a>.</li>
    <li>Create a new project.</li>
    <li>Add a web app to the project and copy the Firebase SDK configuration.</li>
  </ul>

  <li><strong>Create a <code>.env</code> file in the root of your project and add the Firebase configuration variables:</strong></li>

<pre><code>VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
</code></pre>
</ol>

### Running the App

<ol style="font-size: 18px;">
  <li><strong>Start the development server:</strong></li>

<pre><code>npm run dev
</code></pre>

  <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
</ol>

## Usage

<ol style="font-size: 18px;">
  <li><strong>Sign up</strong> for a new account or <strong>log in</strong> with an existing account.</li>
  <li>Navigate to the <strong>dashboard</strong> to see an overview of your financial status.</li>
  <li><strong>Add new transactions</strong> by filling out the form with the description, amount, and category.</li>
  <li><strong>View your transactions</strong> in the transaction list.</li>
  <li><strong>Set monthly budgets</strong> for different categories and track your spending against these budgets.</li>
</ol>

## Project Structure

<pre style="font-size: 18px;">
src/
├── assets/              # Images, icons, etc.
├── components/          # React components
│   ├── Auth/            # Authentication components (Login, Signup, AuthProvider, PrivateRoute)
│   ├── Transactions/    # Transaction components (AddTransaction, TransactionList)
│   └── Dashboard.js     # Main Dashboard component
├── firebase.js          # Firebase configuration and initialization
├── App.css              # Global styles
├── App.js               # Main app component
├── index.css            # Base CSS styles
└── main.js              # Main entry point
</pre>

## Contributing

<p style="font-size: 18px;">Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.</p>

<ol style="font-size: 18px;">
  <li>Fork the repository.</li>
  <li>Create a feature branch (<code>git checkout -b feature-name</code>).</li>
  <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature-name</code>).</li>
  <li>Create a new Pull Request.</li>
</ol>
