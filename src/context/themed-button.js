import { ThemeContext } from './theme-context';
import React , {Component} from 'react';

class ThemeButton extends Component{
    render(){
        let props = this.props;
        let theme = this.context;
        return (
            <button {...props} style={{backgroundColor:theme.background}}>button</button>
        )
    }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;