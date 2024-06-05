import styled from '../lib/styled-components.js'
import { Component, createElement } from '../lib/react/index.js'

const UserStyled = styled.div`
background-image: linear-gradient(to bottom, #030303 0%, #131111 130px,rgb(231, 199, 15) 130px, rgb(235, 194, 12) 141px, rgb(20, 20, 20) 131px, rgb(19, 18, 18) 100%);
  /* background: ${(props) => props.primaryColor}; */
  color: ${({ fontColor }) => fontColor} ;
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: 2rem;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  cursor: pointer;
  user-select: none;

`

const AvatarStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
  box-shadow:0px 0px 0px 8px rgb(245, 200, 2);;

`
const theme = {
  light: {
    primaryColor: '#f9f9f9',
    secondaryColor: 'white',
    tertiaryColor: 'rgba(0,0,0,.15)',
    fontColor: 'black',
  },
  dark: {
    primaryColor: '#212429',
    secondaryColor: '#212429',
    tertiaryColor: 'white',
    fontColor: 'white',
  }
}

class User extends Component {
  state = {
    mode: 'light'
  }
  setMode = (event) => {
    // console.log(event.matches)
    if(event.matches) {
      return this.setState({
        mode: 'dark'
      })
    }
    this.setState({
      mode: 'light'
    })
  }
  componentDidMount() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    this.setMode(mediaQuery)
    mediaQuery.addEventListener('change', this.setMode)
  }
  render() {
    const { mode } = this.state
    const colors = (mode === 'light') ? theme.light : theme.dark
    const { name, avatar } = this.props
    console.log(colors)
    return UserStyled({
      ...colors,
      children: [
        AvatarStyled({
          src: avatar
        }),
        createElement('h2', null, `${name} ${mode} mode`)
      ]
    }, '')
  }
}

export default User