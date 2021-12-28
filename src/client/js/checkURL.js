// I used that package valid-url to check if the user submit url or not
const checkURL = (url) => {
    const validUrl = require('valid-url')
    if(validUrl.isUri(url)) {
        return true
    } else {
        return false
    }
}

export default checkURL