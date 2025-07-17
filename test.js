
let chatMessages = document.getElementById('chat-messages');
let messageInput = document.getElementById('message-input');
let sendBtn = document.getElementById('send-btn');
let video = document.getElementById('video');
let snapBtn = document.getElementById('snap-btn');
let canvas = document.getElementById('canvas');
let snapshot = document.getElementById('snapshot');


// Get access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing camera:', error);
    });

snapBtn.addEventListener('click', () => {
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    snapshot.src = canvas.toDataURL();
    snapshot.style.display = 'block';
});

sendBtn.addEventListener('click', () => {
    let message = messageInput.value.trim();
    if (message !== '') {
        let messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        // Send the message to the web creator's Gmail
        let mailtoLink = `mailto:janetpearls09@gmail.com?subject=Live Chat Message&body=${message}`;
        window.location.href = mailtoLink;
    }
});


