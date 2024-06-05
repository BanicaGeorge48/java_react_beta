import styled from '../lib/styled-components.js'
import { Component } from '../lib/react.js'


const UserStyled = styled.div`
    background-image: linear-gradient(to bottom, #a51111 0%, #ff0000 130px,rgba(0,0,0,.15) 130px, rgba(0,0,0,.15) 141px, rgb(255, 255, 255) 131px, rgb(197, 197, 197) 100%);
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
    box-shadow:0px 0px 0px 8px rgb(32, 32, 32);;
`

class User extends Component {
    render() {
        const { name, avatar } = this.props
        return`
            ${UserStyled(`
                ${AvatarStyled(`
                    src=${avatar}
                `)}
                <h1>${name}</h1>
            `)}
        `
    }
}

export default User