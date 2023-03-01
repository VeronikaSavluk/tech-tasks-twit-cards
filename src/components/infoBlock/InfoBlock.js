import useLocalStorage from "../../hooks/useLocalStorage";
import './InfoBlock.css';

import avatar from '../../images/avatar.png';

function InfoBlock({tweets = 777}) {
	const [followers, setFollowers] = useLocalStorage('followers', 100500);
	const [isActive, setIsActive] = useLocalStorage('isActive', false);

	return (
		<div className="info-block">
			<div className="info-block__line"></div>
			<div className="info-block__avatar">
				<img src={avatar} alt='avatar'/>
			</div>
			<ul className="info-block__list">
				<li className="info-block__item">{new Intl.NumberFormat('ja-JP').format(tweets)} tweets</li>
				<li className="info-block__item">{new Intl.NumberFormat('ja-JP').format(followers)} followers</li>
			</ul>
			{isActive ? (
			<button className="followingButton" onClick={() => {
				setFollowers(prevState => prevState - 1);
				setIsActive(false);
			}}>Following</button>
			) : (
			<button className="followButton" onClick={() => {
				setFollowers(prevState => prevState + 1);
				setIsActive(true);
			}}>Follow</button>
		)}
		</div>
	);
};

export default InfoBlock;