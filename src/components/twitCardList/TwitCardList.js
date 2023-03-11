import TwitCard from '../twitCard/TwitCard';
import './TwitCardList.css';
import cards from '../../users.json';

function TwitCardList () {
	return(
		<ul className='twit-cards'>
			{cards && cards.map(({id, followers, tweets, avatarURL}) => 
			<TwitCard key={id} cardInfo={{id, followers, tweets, avatarURL}}/>
			)}
		</ul>
	)
};

export default TwitCardList;