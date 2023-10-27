document.addEventListener("DOMContentLoaded", function () {
    const articleList = document.getElementById("articleList");
    const filterDate = document.getElementById("filterDate");
    const filterTag = document.getElementById("filterTag");
    const filterNumber = document.getElementById("filterNumber");
    const filterButton = document.getElementById("filterButton");

    filterButton.addEventListener("click", function () {
        const dateFilter = filterDate.value;
        const tagFilter = filterTag.value;
        const numberFilter = filterNumber.value;

        const articles = articleList.querySelectorAll("li");
        articles.forEach(function (article) {
            const date = article.getAttribute("data-date");
            const tags = article.getAttribute("data-tags");
            const number = article.getAttribute("data-numero");

            if (
                (dateFilter === "" || date === dateFilter) &&
                (tagFilter === "" || tags.includes(tagFilter)) &&
                (numberFilter === "" || number === numberFilter)
            ) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});