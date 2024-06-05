import { Component, createElement } from '../lib/react/index.js'
// import User from './user.js'
// import Wrapper from './wrapper.js'
// import UserStyled from './user-styled.js'

const element = createElement('h2', {
  class: 'title',
}, 'hello world! create element')
console.log(element)


class App extends Component {
  render() {
    return `
      <div class="app">
        <h2> hola </h2>
      </div>
    `
  }
}
  // ${new Wrapper({
  //   children: `
  //     <h1>React.js ⭐️⭐️⭐️⭐️⭐️</h1>
  //     ${new User({
  //       name: 'Ash',
  //       avatar: './images/ash.jpg'
  //     }).render()}
  //     ${new UserStyled({
  //       name: 'Ash',
  //       avatar: './images/ash.jpg'
  //     }).render()}
  //   `
  // }).render()}
  
export default App