function addProductRow() {
    const rows =
document.querySelectorAll(".product-row");

if (rows.length >= 5) {
    alert("You can add maximum 5 products.");
    return;
}

    const container =
        document.getElementById("productsContainer");

    const row = document.createElement("div");

    row.className = "product-row";

    row.innerHTML = `
        <label>Product</label>
        <select class="product">
            <option>Haldi Powder / Khada Haldi</option>
            <option>Jeera</option>
            <option>Red Chili Powder / Khada Marcha</option>
            <option>Meethi</option>
            <option>Khada Dhaniya</option>
            <option>Makhana</option>
        </select>

        <label>Quantity</label>
        <input
            class="quantity"
            type="text"
            required
        >

        <button
            type="button"
            onclick="this.parentElement.remove()"
        >
            Remove
        </button>
    `;

    container.appendChild(row);
}
console.log("SCRIPT LOADED");
function handleOrder(evt) {
    evt.preventDefault();

    console.log("BUTTON CLICKED");

    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const notes = document.getElementById("notes").value;
    const address = document.getElementById("address").value;

    const items = [];

    document.querySelectorAll(".product-row")
    .forEach(row => {

        const product =
            row.querySelector(".product").value;

        const quantity =
            row.querySelector(".quantity").value;

        if (quantity.trim() !== "") {
    items.push({
        product,
        quantity
    });
}

    });

    const shopAddress =
        "Railway Road, Birgunj (Ward No: 16)";

    const shopMobile =
        "+9779855036845";

    const productsText =
        items
        .map(item =>
            `${item.product} - ${item.quantity}`
        )
        .join("\n");

    const body = encodeURIComponent(
`📦 New Order

Name: ${name}
Phone: ${phone}

Products:
${productsText}

Notes: ${notes}
Delivery Address: ${address}

Shop Address: ${shopAddress}
Shop Mobile: ${shopMobile}`
    );

    window.open(
        "https://wa.me/9779855036845?text=" + body,
        "_blank"
    );

    console.log("FETCH STARTING");

    fetch(
        "https://shree-niwash-trading-production.up.railway.app/order",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                items,
                notes,
                address
            })
        }
    )
    .then(res => {
        console.log(
            "RESPONSE RECEIVED",
            res.status
        );
        return res.json();
    })
    .then(data => {
        console.log(
            "SUCCESS",
            data
        );
    })
    .catch(err => {
        console.error(
            "FETCH ERROR",
            err
        );
    });

    alert(
        "✅ Order placed successfully! We will contact you soon."
    );
}

const languageSelect =
document.getElementById("language");

languageSelect.addEventListener("change", () => {

    const lang = languageSelect.value;

    if(lang === "hi"){

        document.getElementById("hero-title").innerText =
"अच्छी गुणवत्ता वाले मसाले और खाद्य उत्पाद";

document.getElementById("hero-desc").innerText =
"मसालों, अनाज और खाद्य उत्पादों के लिए आपका भरोसेमंद व्यापारिक साथी";

document.getElementById("about-title").innerText =
"श्री निवास ट्रेडिंग के बारे में";

document.getElementById("about-text1").innerText =
"श्री निवास ट्रेडिंग मसाले, अनाज और खाद्य उत्पादों की भरोसेमंद दुकान है।";

document.getElementById("about-text2").innerText =
"हम बिरगंज से ग्राहकों और व्यापारियों को अच्छी गुणवत्ता के उत्पाद उपलब्ध कराते हैं।";

document.getElementById("order-title").innerText =
"ऑर्डर करें";

document.getElementById("name-label").innerText =
"नाम";

document.getElementById("phone-label").innerText =
"मोबाइल नंबर";

document.getElementById("notes-label").innerText =
"जरूरी जानकारी";

document.getElementById("address-label").innerText =
"डिलीवरी का पता";

document.getElementById("order-btn").innerText =
"ऑर्डर भेजें";

document.getElementById("contact-title").innerText =
"संपर्क करें";

    } else {

        document.getElementById("hero-title").innerText =
        "Premium Quality Spices & Food Products";

        document.getElementById("hero-desc").innerText =
        "Trusted supplier of spices, grains and food products.";

        document.getElementById("products-heading").innerText =
        "Our Popular Products";

        document.getElementById("nav-products").innerText =
        "Products";

        document.getElementById("nav-order").innerText =
        "Order";

        document.getElementById("nav-contact").innerText =
        "Contact";

        document.getElementById("about-title").innerText =
        "About Shree Niwash Trading";

        document.getElementById("about-text1").innerText =
        "Shree Niwash Trading is a trusted supplier of premium-quality spices, grains, and food products. We serve retailers, wholesalers, and customers with a commitment to quality, reliability, and customer satisfaction.";

        document.getElementById("about-text2").innerText =
        "Based in Birgunj, we provide carefully selected products including turmeric, cumin, coriander, red chili, makhana, and other food essentials at competitive prices.";

        document.getElementById("order-title").innerText =
        "Place Your Order";

        document.getElementById("name-label").innerText =
        "Your Name";

        document.getElementById("phone-label").innerText =
        "Mobile Number";

        document.getElementById("notes-label").innerText =
        "Notes";

        document.getElementById("address-label").innerText =
        "Your Delivery Address";

        document.getElementById("order-btn").innerText =
        "Send Order";

        document.getElementById("contact-title").innerText =
        "Contact";
    }

});

    
