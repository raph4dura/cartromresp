fetch('/api/responses')
    .then(response => response.json())
    .then(data => {
        const responsesDiv = document.getElementById('responses');
        data.forEach(item => {
            const responseDiv = document.createElement('div');
            responseDiv.className = 'response';
            responseDiv.innerHTML = `
                <strong>Pergunta:</strong> ${item.question}<br>
                <strong>Avaliação:</strong> ${item.rating}<br>
                <strong>Comentário:</strong> ${item.comment}
            `;
            responsesDiv.appendChild(responseDiv);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar as respostas:', error);
    });
