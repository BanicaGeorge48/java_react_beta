import { Component } from '../lib/react.js'
import User from './user.js'
import Wrapper from './wrapper.js'

class App extends Component {
  render() {
    return `
      <div class="app">
        ${new Wrapper({
          children: `
            <h2>React.js ⭐️⭐️⭐️⭐️⭐️</h2>
            ${new User({
              name: 'Ash',
              avatar: './images/ash.jpg'
            }).render()}
          `
        }).render()}
      </div>
    `
  }
}

export default App