import React, {Component} from 'react';

class CustomTextInput extends Component{
  constructor(props){
    super(props)

    this.textInput = React.createRef();
  }

  focusTextInput= () => {
    this.textInput.current.focus();
  }

  render(){
    return (
      <div>
        <input type='text' ref={this.textInput}></input>
        <input type='button' value='Focus the text button' onClick={this.focusTextInput}></input>
      </div>
    )
  }
}

export default CustomTextInput;