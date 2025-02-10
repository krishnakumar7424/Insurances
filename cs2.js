let claims = [];
let claimCounter = 1;

document.getElementById('claimSubmissionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const policyNumber = document.getElementById('policyNumber').value;
    const incidentDate = document.getElementById('incidentDate').value;
    const incidentDescription = document.getElementById('incidentDescription').value;

    const claim = {
        id: `CLM00${claimCounter}`,
        policyNumber: policyNumber,
        incidentDate: incidentDate,
        incidentDescription: incidentDescription,
        status: 'In Review',
        dateSubmitted: new Date().toLocaleDateString(),
    };
    
    claims.push(claim);
    claimCounter++;

    displayClaims();
    showMessage('Claim submitted successfully!', 'submissionMessage');

    document.getElementById('claimSubmissionForm').reset();
});

function displayClaims() {
    const tableBody = document.querySelector('#claimsTable tbody');
    tableBody.innerHTML = '';

    claims.forEach(claim => {
        const row = `<tr>
            <td>${claim.id}</td>
            <td>${claim.status}</td>
            <td>${claim.dateSubmitted}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function showMessage(message, elementId) {
    const messageElement = document.getElementById(elementId);
    messageElement.innerText = message;
    messageElement.classList.remove('hidden');
    setTimeout(() => messageElement.classList.add('hidden'), 3000);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Search functionality
const articles = [
    "How to file a claim?",
    "What is the claims process?",
    "Common questions about insurance."
];

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = articles.filter(article => article.toLowerCase().includes(query));
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = results.map(result => `<p>${result}</p>`).join('') || '<p>No results found</p>';
});
