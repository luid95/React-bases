import React from 'react';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			{children} {/* Recibir un hijo */}
		</div>
	);
}

export default Layout;