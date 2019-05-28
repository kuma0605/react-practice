import React , {Component} from 'react';
// import ErrorBoundary from '@/components/ErrorBoundary.js'

// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

const UserContext = React.createContext({
  name: 'Guest'
})

class ConsumeMultiContext extends Component{
  render(){
    const {signedUser, theme} = this.props;
    
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedUser}>
          <Layout></Layout>
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

{/* <ThemeContext.Provider >
        <UserContext.Provider >
          <Layout></Layout>
        </UserContext.Provider>
      </ThemeContext.Provider> */}

function Layout(){
  return (
    <div>
      <Content></Content>
    </div>
  )
}

// 一个组件可能会消费多个 context
function Content(){
  return(
    <ThemeContext.Consumer>
      {theme=>(
        <UserContext.Consumer>
          {user=>(
            <div>{user?user.name:"none"}:{theme}</div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

export default ConsumeMultiContext;
