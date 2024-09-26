const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let feedbacks = []; // Aqui você poderia usar um banco de dados

app.post('/feedback', (req, res) => {
    feedbacks.push(req.body);
    res.status(201).send(req.body);
});

app.get('/feedback', (req, res) => {
    res.send(feedbacks);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Salvar feedback
async function addFeedback() {
    const feedback = {
        commentText: document.getElementById('comment-text').value,
        rating: document.getElementById('rating').value,
        name: document.getElementById('name').value
    };

    const response = await fetch('https://your-api-url/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    });

    if (response.ok) {
        loadFeedbacks(); // Atualizar a lista de feedbacks
    }
}

// Carregar feedbacks
async function loadFeedbackFromStorage() {
    const response = await fetch('https://your-api-url/feedback');
    const feedbacks = await response.json();
    
    feedbacks.forEach(feedback => {
        // Crie seus cards aqui
    });
}
