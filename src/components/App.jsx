import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
	return (
		<Layout>
		//Aqui van a vivir los hijos de layout
			<Login />
		</Layout>
	);
}

export default App;