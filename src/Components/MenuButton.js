
const MenuButton = function({ handler, imgSrc, cl }) {


	return(
		<button onClick={ handler } className={'bg-purple w-10 h-10 rounded-md ' + cl}>
			S
		</button>
	);
}


export default MenuButton;