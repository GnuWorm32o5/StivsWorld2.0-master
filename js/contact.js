

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) => {
        e.preventDefault()


    // ServiceID - templteID - #form - publicKey
emailjs.sendForm('service_9fofyu5','template_k3e8x8m','#contact-form','xiA3xdZnp8_pWItSB')
.then(() => {
    contactMessage.textContent = 'Message has been sent successfully ✅ '

    setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000)

    contactForm.reset()
}, () => {
    contactMessage.textContent = 'Message has not been sent (service error) ❌'
})
}

contactForm.addEventListener('submit', sendEmail)


