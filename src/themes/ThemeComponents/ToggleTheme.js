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
				<i className="fas fa-feather"></i>
			</ToggleButton>
			<ToggleButton value='themeDark'>
			<i className="fas fa-cloud-moon"></i>
			</ToggleButton>
		</ToggleButtonGroup>
	);
}