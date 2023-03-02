import InfoBlock from "../infoBlock/InfoBlock";
import Logo from "../logo/Logo";

import './TwitCard.css';

function TwitCard({cardInfo}) {
	return (
		<li className="twit-card">
		<Logo/>
		<InfoBlock cardInfo={cardInfo}/>
		</li>
	);
};

export default TwitCard;