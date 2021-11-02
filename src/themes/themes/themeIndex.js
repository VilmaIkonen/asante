import themeBreeze from './themeBreeze';
import themeSoft from './themeSoft';
import themeDark from './themeDark';

const themes = { themeBreeze, themeSoft, themeDark };

export default function getTheme(theme) {
	return themes[theme];
}
