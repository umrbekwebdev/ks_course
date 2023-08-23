
const chat_id = '324304236', 
botID ='bot5404291053:AAHAR8V62-ZnpSoOeLYdCZprV09uJmxN6YE';
const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

document.querySelector('#messageForm').addEventListener("submit", async e => { // When the user submits the form
    e.preventDefault(); // Don't submit
    let texty = JSON.stringify( // Convert the form data to a string to send as our Telegram message
        Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
        null, 2); // Prettify the JSON so we can read the data easily
    
    text = JSON.parse(texty);
    text = `🙋‍♂️Ismi: - ${text.name} \n🔗Telegram Username: - ${text.telegram_username} \n📞Telefon raqami: +998-${text.phone_number} \n📩Xabar: - ${text.message}`;
    console.log(JSON.stringify({ chat_id, text }));
    const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
        method: 'POST',
        headers: { "Content-Type": "application/json" }, // This is required when sending a JSON body.
        body: JSON.stringify({ chat_id, text }), // The body must be a string, not an object
    });
    const messageStatus = document.querySelector('#status');
    if (sendMessage.ok) // Update the user on if the message went through
        messageStatus.innerHTML = `<i class="fas fa-check-square text-success fa-2x me-3"></i> Xabaringiz jo'natildi! `;
    else
        messageStatus.innerHTML = "Xabaringiz jo'natilmadi! :( <br> Iltimos qaytadan urinib ko'ring! ";
    e.target.reset(); // Clear the form fields.
});
