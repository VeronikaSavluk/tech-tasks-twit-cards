import { NavLink } from "react-router-dom";
import './Header.css';
import '../section/Section.css';

export function Header (){
	return (
		<header className="header">
			<div className="container">
			<NavLink to='/' className="nav">
				Twit Cards
			</NavLink>
			</div>
		</header>
	)
};