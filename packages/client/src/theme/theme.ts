import { createMuiTheme } from '@material-ui/core/styles';
import {
  makeStyles as _makeStyles,
  useTheme as _useTheme,
} from '@material-ui/styles';
import { WithStylesOptions, Styles } from '@material-ui/styles/withStyles';
import palette from './palette';
import typography from './typography';

const customizedTheme = {
  palette,
  typography,
};

const theme = createMuiTheme(customizedTheme);
type Theme = typeof theme & typeof customizedTheme;

//  Re-export typed makeStyles and useTheme for convience.
export const makeStyles = <S extends Styles<Theme, any>>(
  styles: S,
  options?: WithStylesOptions<Theme>
) => _makeStyles(styles, options);
export const useTheme = () => _useTheme<Theme>();

export default theme;
