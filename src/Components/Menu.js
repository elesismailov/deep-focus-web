import { useState } from 'react';

import MenuButton from './MenuButton';
import MenuSettingsModel from './MenuSettingsModel';

const Menu = function() {

	const [model, setModel] = useState(null);
	const [settings, setSettings] = useState(false);

	return(
		<nav id="menu-bar" className='absolute w-screen flex gap-3 p-3 justify-end'>
					
			<MenuButton className='hello' />
			<MenuButton handler={ () => setSettings(true) }/>

			{settings && <MenuSettingsModel close={() => setSettings(false)} />}

		</nav>
	);
}

export default Menu;