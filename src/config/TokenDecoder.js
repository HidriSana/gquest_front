import jwt_decode from "jwt-decode";

const guildDecoder = () => {
    let guild;
    const token = localStorage.getItem('access');
    if (token != null){
        guild = jwt_decode(token).guild
    }
    return guild
}

const userDecoder = () => {
    let user;
    const token = localStorage.getItem('access');
    if (token != null){
        user = jwt_decode(token)
    }
    return user
}

const decoder = {
    guildDecoder,userDecoder
}

export default decoder

