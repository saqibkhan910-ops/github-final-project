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
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beautiful Beach">
                <div class="card-content">
                    <h3>Beautiful Beach</h3>
                    <p>Enjoy relaxing beaches, clear water and beautiful scenery.</p>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda" alt="Tropical Beach">
                <div class="card-content">
                    <h3>Tropical Beach</h3>
                    <p>Relax on a tropical beach and enjoy the peaceful environment.</p>
                </div>
            </div>
        `;
    }

    else if (searchText.includes("temple")) {
        resultContainer.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Beautiful Temple">
                <div class="card-content">
                    <h3>Beautiful Temple</h3>
                    <p>Explore historic temples and amazing architecture.</p>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523" alt="Historic Temple">
                <div class="card-content">
                    <h3>Historic Temple</h3>
                    <p>Discover ancient temples and their beautiful cultural heritage.</p>
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
                <img src="https://images.unsplash.com/photo-1521292270410-a8c4d716d518" alt="Beautiful Country">
                <div class="card-content">
                    <h3>Explore Countries</h3>
                    <p>Discover new countries, cultures and unforgettable places.</p>
                </div>
            </div>

            <div class="card">
                <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" alt="Beautiful Destination">
                <div class="card-content">
                    <h3>Beautiful Destination</h3>
                    <p>Explore wonderful destinations and experience different cultures.</p>
                </div>
            </div>
        `;
    }

    else {
        resultContainer.innerHTML = "<p>No recommendation found. Try Beach, Temple, or Country.</p>";
    }
}

function clearSearch() {
    searchInput.value = "";
    resultContainer.innerHTML = "";
}
