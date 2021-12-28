
const checkURL = (url) => {
    const validUrl = require('valid-url')
    if(validUrl.isUri(url)) {
        return true
    } else {
        return false
    }
}

export default checkURL