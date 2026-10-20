const container = document.querySelector(".summary-cards");

function createCard({category, score, icon}){
    const card = document.createElement("div");
    card.className = `summary-card summary-card--${category.toLowerCase()}`;

    const innerHtml = `
        <div class="heading">
            <div class="icon">
                <img src="${icon}" alt="${category}"/>
            </div>
            <div class="description">${category}</div>
        </div>
        <div class="score">
            <div class="score-percentage">${score}</div>
            <div class="score-of">
                <span>/</span>
                <span>100</span>
            </div>
        </div>
    `;

    card.innerHTML = innerHtml;

    return card;
}

async function loadSummary() {
    try{
        const response = await fetch("./data.json");
        if (!response.ok) {
            throw Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();
        container.replaceChildren(...data.map(createCard));
    }catch(error){
        console.error("Could not load summary. Error: ", error);
    }
}

loadSummary();