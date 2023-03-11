import './Avatar.css';

export function Avatar ({avatarURL}){
	return(
		<div className="info-block__avatar">
			{avatarURL && <img src={"/tech-tasks-twit-cards/" + avatarURL}
			alt='avatar' className="info-block__user"
			/>}
			</div>
	)
}