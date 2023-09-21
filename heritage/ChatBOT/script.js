document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const typingIndicator = document.getElementById('typing-indicator');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const predefinedPrompts = document.querySelectorAll('.predefined-prompt');

    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`;
        const messageContainer = document.createElement('div');
        messageContainer.className = `bg-${sender === 'user' ? 'blue-500' : 'gray-200'} text-${sender === 'user' ? 'white' : 'gray-800'} rounded-lg p-2 max-w-md`;
        messageContainer.textContent = message;
        messageDiv.appendChild(messageContainer);
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botResponse(userMessage) {
        setTimeout(function () {
            typingIndicator.style.display = 'none';
            const predefinedResponses = {
                'Hello': 'How can I help you?',
                'Puri': 'Puri, located in the eastern Indian state of Odisha, is a coastal gem renowned for its pristine beaches and vibrant cultural heritage. Home to the famous Jagannath Temple, this sacred town attracts pilgrims and tourists alike, offering a unique blend of spirituality and natural beauty along its sun-kissed shores.',
                'Haridwar':'Haridwar, situated in the northern Indian state of Uttarakhand, is a sacred city nestled along the banks of the holy Ganges River. Known for its spiritually charged atmosphere, it is a revered pilgrimage destination where visitors can witness the mesmerizing Ganga Aarti rituals.',
                'Dwarka':'It is a historic city located along the western coast of India in the state of Gujarat. It holds immense religious significance as it is believed to be the ancient kingdom of Lord Krishna.This coastal town also offers picturesque sea views and a glimpse into the rich mythology.',
                'Travel plan to puri':'Day 1: Arrive in Puri, check into your hotel, and unwind at Puri Beach. \nDay 2: Visit Jagannath Temple, Gundicha Temple, and enjoy Puri Sea Beach. Attend the Ganga Aarti in the evening. \nDay 3: Take a day trip to Konark Sun Temple and explore Chandrabhaga Beach.\nDay 4: Explore Raghurajpur Artist Village, Sudarshan Craft Museum, and enjoy an Ayurvedic massage.\nDay 5: Depart from Puri, with optional shopping for local handicrafts and souvenirs.'
            };

            const botReply = predefinedResponses[userMessage] || `You said: ${userMessage}`;
            addMessage('bot', botReply);
        }, 1000);
    }

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            addMessage('user', userMessage);
            userInput.value = '';

            typingIndicator.style.display = 'block';

            
            botResponse(userMessage);
        }
    });

    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    
    predefinedPrompts.forEach(function (promptButton) {
        promptButton.addEventListener('click', function () {
            const promptText = promptButton.getAttribute('data-prompt');
            addMessage('user', promptText);
            typingIndicator.style.display = 'block';
            botResponse(promptText);
        });
    });
});