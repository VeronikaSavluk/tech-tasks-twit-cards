import TwitCard from '../twitCard/TwitCard';
import './TwitCards.css';
import cards from '../../users.json';

function TwitCards () {
	return(
		<ul className='twit-cards'>
			{cards && cards.map(({id, followers, tweets, avatarURL}) => 
			<TwitCard key={id} cardInfo={{id, followers, tweets, avatarURL}}/>
			)}
		</ul>
	)
};

export default TwitCards;