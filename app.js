let button = document.getElementById('button');
const form = document.getElementById('form');

button.addEventListener('click', function (e) {
    e.preventDefault();
    button.value = 'Send';
    const serviceID = 'default_service';
   const templateID = 'template_kpa3589';

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      button.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      button.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

