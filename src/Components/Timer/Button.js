
function Button(props) {

	const {text, src, handler} = props;

	return(
		<button onClick={ handler }>
			<img src={ src } alt="" width="50" height="50" />
		</button>
	);
}


export default Button;