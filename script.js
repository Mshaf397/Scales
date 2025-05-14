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
                Battery: "4000mAh",
                Camera: "12MP",
                Display: "6.5 inches, 1080p",
                Storage: "128GB",
                Charging: "30W"
            }
        },
        {
            name: "Smartwatch Y",
            category: "Smartwatch",
            score: 92,
            specs: {
                CPU: "ABC",
                RAM: "2GB",
                Battery: "300mAh",
                Camera: "None",
                Display: "1.4 inches, 320x320",
                Storage: "16GB",
                Charging: "5W"
            }
        }
    ];

    function renderDevices() {
        container.innerHTML = ""; // Clear container before rendering

        devices.forEach(device => {
            const card = document.createElement("div");
            card.className = "device-card";

            card.innerHTML = `
                <h2>${device.name}</h2>
                <p>Category: ${device.category}</p>
                <p>Score: <span class="score">${device.score}</span></p>
                <p>Specs:</p>
                <ul>
                    <li>CPU: ${device.specs.CPU}</li>
                    <li>RAM: ${device.specs.RAM}</li>
                    <li>Battery: ${device.specs.Battery}</li>
                    <li>Camera: ${device.specs.Camera}</li>
                    <li>Display: ${device.specs.Display}</li>
                    <li>Storage: ${device.specs.Storage}</li>
                    <li>Charging Speed: ${device.specs.Charging}</li>
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
                Battery: document.getElementById("battery").value,
                Camera: document.getElementById("camera").value,
                Display: document.getElementById("display").value,
                Storage: document.getElementById("storage").value,
                Charging: document.getElementById("charging").value
            }
        };

        devices.push(newDevice);
        renderDevices();

        // Reset form fields
        form.reset();
    });

    renderDevices();
});