import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { CustomThemeContext } from './CustomThemeProvider';
import useStyles from './stylesToggleBtn'

export default function ThemeToggle() {

	const classes = useStyles()

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
			size='small' className={classes.togglebtn}
			onChange={handleThemeChange}>
			<ToggleButton value='themeSoft' style={{border: 'none'}}>
				{'Change theme'}
			</ToggleButton>
			{/* <ToggleButton value='themeDark'>
			{'Change to theme "Dark"'}
			</ToggleButton> */}
		</ToggleButtonGroup>
	);
}