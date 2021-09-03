const closeAll = document.querySelector("#close");
const btn = document.querySelector('#done');
const btn2 = document.querySelector('#second')
const input = document.querySelector('input');
const message1 = document.querySelector('#leftMessage');
const newMessage = document.createElement('p');
btn.addEventListener('click', function () {
    closeAll.setAttribute('class', 'nodisplay');

})
btn2.addEventListener('click', function () {
    alert(`Your message is: ${input.value}, it is sent to Mark Zuckerberg's assistent's assistent.He will reply shortly. Thank you!`)
    newMessage.appendChild(input);
    message1.appendChild(newMessage);
})
