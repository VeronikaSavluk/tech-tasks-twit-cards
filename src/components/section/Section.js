import './Section.css';

export function Section ({children}){
	return (
		<section className='section'>
			<div className='container'>
			{children}
			</div>
		</section>
	)
};