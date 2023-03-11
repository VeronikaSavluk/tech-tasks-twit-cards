import { useContext } from "react";
import CardContext from "../../Context";

import './Button.css';

export function Button ({followingUserId, id}){
	let {handleFollowings} = useContext(CardContext);

	return (
		<div>
			{followingUserId.length > 0 ? (
			<button className="followingButton" onClick={() => handleFollowings(id)}>Following</button>
			) : (
			<button className="followButton" onClick={() => handleFollowings(id)}>Follow</button>
		)}
		</div>
	)
}