/* eslint-disable react/react-in-jsx-scope */

import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { getUser } from './features/auth/authSlice';

import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import { selectAuthChecked } from './features/auth/selectors';
import AdminCabinet from './components/main/AdminCabinet';
import Layout from './components/layouts/Layout';
import Tasks from './features/tasks/Tasks';
import Confirm from './features/auth/Confirm';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Contacts from './components/Pages/Contacts/Contacts';
import Clinics from './components/Pages/Clinics/Clinics';
import Kennels from './components/Pages/Kennel/Kennels';
import Admin from './components/Pages/AdminRoom/Admin';
import ButtonsClinic from './components/Pages/AdminRoom/Clinics/ButtonsClinic';

function App(): JSX.Element {
	const dispatch = useAppDispatch();
	const authChecked = useAppSelector(selectAuthChecked);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	if (!authChecked) {
		return (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="confirm" element={<Confirm />} />
					<Route path="about" element={<About />} />
					<Route path="clinics" element={<Clinics />} />
					<Route path="kennels" element={<Kennels />} />
					<Route path="contact" element={<Contacts />} />
					<Route path="admin" element={<Admin />} />
					<Route path="buttonsClinic" element={<ButtonsClinic />} />
					{/* <Route path="tasks" element={<AdminCabinet />} /> */}
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
