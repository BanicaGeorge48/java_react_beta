import { Component } from "../lib/react.js";

class User extends Component {
    render() {
        const { avatar, name } = this.props
        return `
            <div class="user">
                <div class="avatar">
                    <img src="${avatar}" alt=""/>
                </div>
                <h1>${name}</h1>
            </div>
        `
    }
}

export default User