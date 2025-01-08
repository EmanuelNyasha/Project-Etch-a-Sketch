document.addEventListener("DOMContentLoaded", function () {
    const GRIDSIDE = 600;
    const sketchArea = document.querySelector(".container");
    const message = document.querySelector("#message");
    let colorMode = "black";

    // Create initial grid
    createGridCells(16);

    document.querySelector("#popup").addEventListener("click", function () {
        const size = getSize();
        if (size) {
            createGridCells(size);
        }
    });

    document.querySelector("#black-btn").addEventListener("click", function () {
        colorMode = "black";
    });

    document.querySelector("#random-btn").addEventListener("click", function () {
        colorMode = "random";
    });

    document.querySelector("#reset-btn").addEventListener("click", function () {
        createGridCells(16); // Reset to default 16x16
        message.textContent = "Grid reset!";
    });

    
    function createGridCells(size) {
        // Clear existing grid
        sketchArea.innerHTML = "";

        // Calculate cell size
        const cellSize = GRIDSIDE / size;

        // Create grid cells
        for (let i = 0; i < size * size; i++) {
            const gridCell = document.createElement("div");
            gridCell.style.width = `${cellSize}px`;
            gridCell.style.height = `${cellSize}px`;
            gridCell.classList.add("cell");

            // Add hover effect
            gridCell.addEventListener("mouseover", function () {
                if (colorMode === "black") {
                    gridCell.style.backgroundColor = "black";
                } else if (colorMode === "random") {
                    gridCell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                }
            });

            sketchArea.appendChild(gridCell);
        }
    }

    function getSize() {
        const input = prompt("Enter grid size (1-100):");
        const size = parseInt(input);
        if (isNaN(size) || size < 1 || size > 100) {
            message.textContent = "Please enter a number between 1 and 100.";
            return null;
        }
        message.textContent = "Now you play!";
        return size;
    }
});
