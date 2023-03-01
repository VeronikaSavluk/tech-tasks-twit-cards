import InfoBlock from "../infoBlock/InfoBlock";
import Logo from "../logo/Logo";

import './TwitCard.css';

function TwitCard() {
	return (
		<div className="twit-card">
		<Logo/>
		<InfoBlock/>
		</div>
	);
};

export default TwitCard;