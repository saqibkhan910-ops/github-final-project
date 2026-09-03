const searchInput = document.getElementById("searchInput");
const resultContainer = document.getElementById("resultContainer");

function searchDestination() {
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        resultContainer.innerHTML = "<p>Please enter a destination or category.</p>";
        return;
    }

    if (searchText.includes("beach")) {
        resultContainer.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach">
                <div class="card-content">
                    <h3>Beautiful Beach</h3>
                    <p>Relax and enjoy the beautiful beach and clear water.</p>
                </div>
            </div>
        `;
    } 
    else if (searchText.includes("temple")) {
        resultContainer.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Temple">
                <div class="card-content">
                    <h3>Famous Temple</h3>
                    <p>Explore amazing temples and their beautiful architecture.</p>
                </div>
            </div>
        `;
    } 
    else if (
        searchText.includes("country") ||
        searchText.includes("pakistan") ||
        searchText.includes("japan") ||
        searchText.includes("france")
    ) {
        resultContainer.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1521292270410-a8c4d716d518" alt="Country">
                <div class="card-content">
                    <h3>Explore Countries</h3>
                    <p>Discover beautiful countries, cultures and destinations.</p>
                </div>
            </div>
        `;
    } 
    else {
        resultContainer.innerHTML = `
            <p>No recommendation found. Try searching for Beach, Temple, or Country.</p>
        `;
    }
}

function clearSearch() {
    searchInput.value = "";
    resultContainer.innerHTML = "";
}
