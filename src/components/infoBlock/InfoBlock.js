import React, {useContext} from "react";
import CardContext from "../../Context";
import { Avatar } from "../avatar/Avatar";
import {Button} from "../button/Button";
import './InfoBlock.css';

function InfoBlock ({cardInfo}) {

	let {followings} = useContext(CardContext);

	let {id, followers, tweets, avatarURL} = cardInfo;

	let followingUserId = followings.filter(userId => userId === id);

	let countFollowers = followingUserId.length > 0 ? followers + 1 : followers;

	return (
		<div className="info-block">
			<Avatar avatarURL={avatarURL}/>
			<ul className="info-block__list">
				<li className="info-block__item">{new Intl.NumberFormat('ja-JP').format(tweets)} tweets</li>
				<li className="info-block__item">{new Intl.NumberFormat('ja-JP').format(countFollowers)} followers</li>
			</ul>
			<Button followingUserId={followingUserId} id={id}/>
		</div>
	);
};

export default InfoBlock;