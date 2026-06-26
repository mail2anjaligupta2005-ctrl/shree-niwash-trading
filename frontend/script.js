console.log("SCRIPT LOADED");
function handleOrder(evt) {
    evt.preventDefault();

    console.log("BUTTON CLICKED");

    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const product = document.getElementById("product").value;
    const qtyNum = document.getElementById("qtyNum").value;

    const qty = qtyNum;

    const notes = document.getElementById("notes").value;
    const address = document.getElementById("address").value;

    const shopAddress = "Railway Road, Birgunj (Ward No: 16)";
    const shopMobile = "+9779855036845";
 
    const subject = encodeURIComponent("New Order from " + name + " (" + phone + ")");
    const body = encodeURIComponent(
    `📦 New Order

    Name: ${name}
    Phone: ${phone}
    Product: ${product}
    Quantity: ${qty}
    Notes: ${notes}
    Delivery Address: ${address}

    Shop Address: ${shopAddress}
    Shop Mobile: ${shopMobile}`
    );

window.open("https://wa.me/9779855036845?text=" + body, "_blank");

window.open("mailto:sntraxaul1980@gmail.com?subject=" + subject + "&body=" + body);

console.log("FETCH STARTING");
fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name,
        phone,
        product,
        quantity: qty,
        notes,
        address
    })
})
.then(res => {
    console.log("RESPONSE RECEIVED", res.status);
    return res.json();
})
.then(data => {
    console.log("SUCCESS", data);
})
.catch(err => {
    console.error("FETCH ERROR", err);
});

alert("Order prepared! Your email app should open now ");
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

document.getElementById("product-label").innerText =
"सामान";

document.getElementById("quantity-label").innerText =
"मात्रा";

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

        document.getElementById("product-label").innerText =
        "Product";

        document.getElementById("quantity-label").innerText =
        "Quantity";

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

    
