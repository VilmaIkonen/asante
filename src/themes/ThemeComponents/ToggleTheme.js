import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { CustomThemeContext } from './CustomThemeProvider';

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
				{'Change theme'}
			</ToggleButton>
			{/* <ToggleButton value='themeDark'>
			{'Change to theme "Dark"'}
			</ToggleButton> */}
		</ToggleButtonGroup>
	);
}