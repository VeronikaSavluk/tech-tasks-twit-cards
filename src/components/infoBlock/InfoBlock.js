import React, {useContext} from "react";
import Context from "../../Context";
import './InfoBlock.css';

import frame from '../../images/frame.png';

function InfoBlock ({cardInfo}) {

	let {followings, handleFollowings} = useContext(Context);

	let {id, followers, tweets, avatarURL} = cardInfo;

	let followingUserId = followings.filter(userId => userId === id);

	let countFollowers = followingUserId.length > 0 ? followers + 1 : followers;

	return (
		<div className="info-block">
			<div className="info-block__line"/>
			<div className="info-block__avatar">
			<img src={frame} alt='frame of avatar'/>
			{avatarURL && <img src={"/tech-tasks-twit-cards/" + avatarURL}
			alt='avatar' className="info-block__user"
			/>}
			</div>
			<ul className="info-block__list">
				<li className="info-block__item">{new Intl.NumberFormat('ja-JP').format(tweets)} tweets</li>
				<li className="info-block__item">{new Intl.NumberFormat('ja-JP').format(countFollowers)} followers</li>
			</ul>
			{followingUserId.length > 0 ? (
			<button className="followingButton" onClick={() => handleFollowings(id)}>Following</button>
			) : (
			<button className="followButton" onClick={() => handleFollowings(id)}>Follow</button>
		)}
		</div>
	);
};

export default InfoBlock;