import axios from 'axios'

exports.send = function () {
    const url = window.location.href
    let contact_id = document.cookie

    if (!contact_id) {
        const randomId = Math.floor(Math.random() * 100000000) + 1
        document.cookie = "contact_id=" + randomId
        contact_id = randomId
    }else{
        const idPosition = contact_id.indexOf('=')
        contact_id = contact_id.substr(idPosition + 1)
    }
    
    axios.post('https://rails-contact-tracking.herokuapp.com/accesses', {
        access : {
            url: url,
            contact_id: contact_id
        }
    })
}