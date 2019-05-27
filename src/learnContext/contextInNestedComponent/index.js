import React, {Component} from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './themed-toggler-button';

class ContextInNestedComponent extends Component {
  constructor(props){
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render(){
    // 整个 state 都被传递进 provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content></Content>
      </ThemeContext.Provider>
    );
  }
}

function Content(){
  return (
    <div>
      <ThemeTogglerButton></ThemeTogglerButton>
    </div>
  )
}

export default ContextInNestedComponent;