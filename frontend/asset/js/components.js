fetch("/frontend/pages/composant/header.html")
.then(res => res.text())
.then(data => {
    const header = document.getElementById("header");
    if(header) header.innerHTML = data;
});

fetch("/frontend/pages/composant/footer.html")
.then(res => res.text())
.then(data => {
    const footer = document.getElementById("footer");
    if(footer) footer.innerHTML = data;
});