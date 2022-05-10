import MenuButton from './MenuButton';

const MenuSettingsModel = ({ text, close }) => {

	return(
		<div className='fixed h-full w-full bg-green inset-0 z-10'>

			<MenuButton handler={close} cl='absolute right-3 top-3'/>

		</div>
	);
}

export default MenuSettingsModel;