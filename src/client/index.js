import handleSubmit from './js/formHandler';

window.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.querySelector('.btn-submit');

    btnSubmit.addEventListener('click', (e) => {
        handleSubmit(e)
    })
})

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    handleSubmit
}