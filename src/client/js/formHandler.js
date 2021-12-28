import checkURL from "./checkURL"


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
