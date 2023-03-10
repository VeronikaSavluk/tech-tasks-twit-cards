import { NavLink } from "react-router-dom";
import './Header.css';

export function Header (){
	return (
		<header className="header">
			<NavLink to='/'>
				Twit Cards
			</NavLink>
		</header>
	)
};