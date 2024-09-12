<div align="center">

  <img src="https://user-images.githubusercontent.com/99184393/185779974-a31a9f47-f8d3-42ea-b7f8-4a2971774615.png" alt="logo" width="250" height="auto" />

# Airbnb Clone
  
  <p>
MERN Stack Airdnd Clone with MongoDB, Express, React.js, Node.js and Tailwind CSS. This project is designed to resemble the core functionality of Airbnb, offering users the ability to search for, book, and manage accommodations, along with other essential features.
  </p>
  
</div>

<br />

---

## :star2: About the Project

The **Airdnd Clone** is a fully functional web application built using the **MERN** stack (MongoDB, Express, React.js, and Node.js), designed to replicate the core functionality of **Airbnb**. It allows users to search for accommodations, make bookings, manage reservations, and even host their own properties. The project demonstrates a deep understanding of full-stack development using modern technologies and industry-standard best practices.

### :house_with_garden: Key Features

- **User Authentication**: Users can register, log in, and manage their accounts. The app supports full authentication with password encryption for secure access.
  
- **Search and Book Accommodations**: The platform allows users to search for available places using various filters and make reservations for desired dates.
  
- **Host Management**: Users can list their properties as hosts, complete with photos, descriptions, and availability management.
  
- **Booking Management**: Users can view their past and upcoming reservations, with options to modify or cancel bookings as needed.
  
- **Responsive Design**: The application is fully responsive and optimized for a seamless experience across devices, including desktops, tablets, and smartphones.
  
- **Modern UI with Tailwind CSS**: The application UI is built using Tailwind CSS, offering a sleek and modern design that mimics Airbnb's user interface.

### :video_camera: Video Demos

<div align="left">
  <a href="./assets/Untitled1.mov" download>1. Logging in and Making a Reservation</a>
</div>
<div align="left">
  <a href="./assets/Untitled4.mov" download>2. Download or view the booking demo</a>
</div>
<div align="left">
  <a href="./assets/Untitled2.mov" download>3. Download or view user bookings and hosting demo</a>
</div>
<div align="left">
  <a href="./assets/Untitled3.mov" download>4. Download or view the cancellation demo</a>
</div>




  
### :wrench: Architecture and Design

#### Frontend:
- **React.js**: The client side is built with React.js, using component-based architecture to ensure scalability and reusability. The application follows a clean structure to support various features like user authentication, accommodation listing, and bookings.
- **Tailwind CSS**: The app uses Tailwind CSS to create a responsive and aesthetically pleasing user interface with utility-first styling.
  
#### Backend:
- **Node.js & Express**: The server side is built using Node.js and Express.js, handling the logic for user authentication, data validation, and routing.
- **MongoDB**: MongoDB is used as the primary database for storing user data, bookings, and property listings. It’s a NoSQL database well-suited for scalable applications like Airdnd.
  
#### Additional Features:
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT), allowing for protected routes and personalized user experiences.
- **Image Uploads**: Integrated image upload feature for property listings, allowing hosts to upload images of their properties.
- **Real-time Availability**: Check-in and check-out dates are validated in real-time to prevent double bookings or availability conflicts.
  
### :rocket: Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ishaanJ91/airdnd-clone.git
   ```

2. **Install Dependencies**:
   Navigate to both the `client` and `server` directories and install the necessary packages:
   ```bash
   cd client
   npm install
   ```
   ```bash
   cd ../server
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `server` folder and include the following environment variables:
   - `MONGO_URL`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT authentication

4. **Run the App**:
   - Start the server:
     ```bash
     cd server
     npm run start
     ```
   - Start the client:
     ```bash
     cd client
     npm run start
     ```

### :space_invader: Tech Stack

The project is built using the following technologies:

#### Client:
- **React.js**: For building the user interface and handling user interactions.
- **TailwindCSS**: A utility-first CSS framework to design a responsive and modern UI.
- **Axios**: To handle API requests between the client and server.
  
#### Server:
- **Node.js & Express**: To handle server-side logic, route management, and business logic.
- **MongoDB**: A NoSQL database for storing user data, bookings, and property listings.
---

### :construction_worker: Contribution

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.
