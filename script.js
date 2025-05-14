document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const form = document.getElementById("device-form");

    // Example device data
    const devices = [
        {
            name: "Phone Model X",
            category: "Phone",
            score: 85,
            specs: {
                CPU: "XYZ",
                RAM: "8GB",
                Battery: "4000mAh"
            },
            image: "placeholder.png"
        },
        {
            name: "Smartwatch Y",
            category: "Smartwatch",
            score: 92,
            specs: {
                CPU: "ABC",
                RAM: "2GB",
                Battery: "300mAh"
            },
            image: "placeholder.png"
        }
    ];

    function renderDevices() {
        container.innerHTML = ""; // Clear container before rendering

        devices.forEach(device => {
            const card = document.createElement("div");
            card.className = "device-card";

            card.innerHTML = `
                <img src="${device.image}" alt="${device.name}">
                <h2>${device.name}</h2>
                <p>Category: ${device.category}</p>
                <p>Score: <span class="score">${device.score}</span></p>
                <p>Specs:</p>
                <ul>
                    <li>CPU: ${device.specs.CPU}</li>
                    <li>RAM: ${device.specs.RAM}</li>
                    <li>Battery: ${device.specs.Battery}</li>
                </ul>
            `;

            container.appendChild(card);
        });
    }

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const newDevice = {
            name: document.getElementById("name").value,
            category: document.getElementById("category").value,
            score: parseInt(document.getElementById("score").value),
            specs: {
                CPU: document.getElementById("cpu").value,
                RAM: document.getElementById("ram").value,
                Battery: document.getElementById("battery").value
            },
            image: document.getElementById("image").value
        };

        devices.push(newDevice);
        renderDevices();

        // Reset form fields
        form.reset();
    });

    renderDevices();
});