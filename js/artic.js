function compararArticulos(a, b) {
    const fechaA = a.getAttribute("data-date");
    const fechaB = b.getAttribute("data-date");
    const numeroA = parseInt(a.getAttribute("data-article-number"));
    const numeroB = parseInt(b.getAttribute("data-article-number"));

    // Ordenar primero por fecha
    if (fechaA < fechaB) {
        return -1;
    } else if (fechaA > fechaB) {
        return 1;
    }

    // Si las fechas son iguales, ordenar por número de artículo
    if (numeroA < numeroB) {
        return -1;
    } else if (numeroA > numeroB) {
        return 1;
    }

    return 0; // Igual en ambas fechas y números de artículo
}

const articleList = document.querySelectorAll(".article-list li");
const articleArray = Array.from(articleList);

articleArray.sort(compararArticulos);

articleArray.forEach(function (article, index) {
    article.style.order = index;
});


function filtrarArticulos() {
    const topicFilter = document.getElementById("topic-filter").value;
    const dateFilter = document.getElementById("date-filter").value;
    const articleNumberFilter = parseInt(document.getElementById("article-number-filter").value);

    const articleList = document.querySelectorAll(".article-list li");

    articleList.forEach(function (article) {
        const topic = article.querySelector("h2").getAttribute("data-topic");
        const date = article.querySelector("p").getAttribute("data-date");
        const articleNumber = parseInt(article.querySelector("h2").getAttribute("data-article-number"));

        if ((topicFilter === "todos" || topic === topicFilter) &&
            (dateFilter === "" || date === dateFilter) &&
            (isNaN(articleNumberFilter) || articleNumber === articleNumberFilter)) {
            article.style.display = "block"; // Mostrar artículo
            article.classList.remove("hidden"); // Asegúrate de que no esté oculto
        } else {
            article.style.display = "none"; // Ocultar artículo
            article.classList.add("hidden"); // Marca como oculto
        }
    });

    mostrarVistaPrevia();
}

function mostrarVistaPrevia() {
    const selectedArticle = document.querySelector(".article-list li:not([style*='none'])");
    if (!selectedArticle) return; // Si no se seleccionó ningún artículo, sal de la función

    const articleList = document.querySelectorAll(".article-list li");
    const selectedDate = selectedArticle.querySelector("p").getAttribute("data-date");
    const selectedArticleNumber = parseInt(selectedArticle.querySelector("h2").getAttribute("data-article-number"));

    // Filtra los artículos que están dentro del rango de fecha y número de artículo
    articleList.forEach(function (article) {
        const date = article.querySelector("p").getAttribute("data-date");
        const articleNumber = parseInt(article.querySelector("h2").getAttribute("data-article-number"));

        if (date >= selectedDate && articleNumber >= selectedArticleNumber - 5 &&
            date <= selectedDate && articleNumber <= selectedArticleNumber + 5) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}
