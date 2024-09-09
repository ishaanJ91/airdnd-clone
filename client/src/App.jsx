import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './Layout'
import IndexPage from './components/IndexPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProfilePage from './components/ProfilePage'
import PlacesPage from './components/PlacesPage'
import PlacePage from './components/PlacePage'
import PlacesFormPage from './components/PlacesFormPage'
import MyBookingsPage from './components/MyBookingsPage'
import BookingsPage from './components/BookingsPage'

import axios from 'axios'
import { UserContextProvider } from './UserContext'


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/account/places" element={<PlacesPage />} />
        <Route path="/account/places/new" element={<PlacesFormPage />} />
        <Route path="/account/places/:id" element={<PlacesFormPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
        <Route path="/account/bookings" element={<MyBookingsPage />} />
        <Route path="/account/bookings/:id" element={<BookingsPage />} />
      </Route>
    </Routes>
    </UserContextProvider>

  )
}

export default App
