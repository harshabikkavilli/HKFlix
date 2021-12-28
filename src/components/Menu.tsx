import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

export default function Menu() {
	return (
		<StyledNavBar expand="lg" variant="dark">
			<Navbar.Brand href="#home">
				<StyledLogo src={Logo} />
			</Navbar.Brand>
		</StyledNavBar>
	);
}

const StyledNavBar = styled(Navbar)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
	padding: 20px;
	background-image: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.8),
		rgba(255, 255, 255, 0)
	);
`;

const StyledLogo = styled.img`
	width: 90px;
	margin: 0 5px;
`;
