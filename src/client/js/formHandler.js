import checkURL from "./checkURL"

// this function will get that data and if something wrong happened will output error message

const postData = async (url = "", data = { url: ''}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return await response.json();  
    } catch (error) {
        console.log('error', error)
    }
}

/* 
    - this function first will preventDefault
    - get the url from user input
    - check if user provided url or not by calling checkURL function
    - provide the route and the url
    - set the data for each element 
*/
const handleSubmit = async(e) => {
    e.preventDefault();
    const url = document.getElementById('article-url').value
    if(checkURL(url)) {
        postData('http://localhost:8081/saveData', {url})
            .then((data) => {
                document.getElementById('text').innerHTML = `Text: ${data.text}`
                document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
                document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
                document.getElementById('score_tag').innerHTML = `Score_tag: ${data.score_tag}`
                document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
            })
    } else {
        alert('Please try with another URL')
    }
}

export default handleSubmit
