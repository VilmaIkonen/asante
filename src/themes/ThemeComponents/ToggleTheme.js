import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { CustomThemeContext } from './CustomThemeProvider';
import PaletteIcon from '@material-ui/icons/Palette';
import StarIcon from '@material-ui/icons/Star';

export default function ThemeToggle() {

	const { currentTheme, setTheme } = useContext(CustomThemeContext);
	const isDefault = Boolean(currentTheme === 'themeBreeze');

	const handleThemeChange = (event, newTheme) => {
		if (isDefault) {
			setTheme(newTheme)
		} 
    else {
			setTheme('themeBreeze');
		}
	};

	return (
		<ToggleButtonGroup
			value={currentTheme}
			exclusive
			size='small'
			onChange={handleThemeChange}>
			<ToggleButton value='themeSoft'>
				<PaletteIcon />
			</ToggleButton>
			<ToggleButton value='fluor'>
				<StarIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}