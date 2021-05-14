import themeBreeze from './themeBreeze';
import themeSoft from './themeSoft';

const themes = { themeBreeze, themeSoft };

export default function getTheme(theme) {
	return themes[theme];
}
