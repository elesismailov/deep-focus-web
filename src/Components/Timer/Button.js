
function Button(props) {

	const {text, src, handler} = props;

	return(
		<button onClick={ handler }>
			<img src={ src } alt="" />
		</button>
	);
}


export default Button;