
import MenuButton from './MenuButton';

const Menu = function() {

	return(
		<nav id="menu-bar" className='absolute w-screen flex flex-row-reverse gap-3 p-3'>
					
			<MenuButton className='hello' />
			<MenuButton />

		</nav>
	);
}

export default Menu;