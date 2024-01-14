let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    // Creating Result Item

    let {
        link,
        title,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");



    // Creating Tital Item

    let titleEl = document.createElement('a');
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    // Creating Break Element
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    // Creating Url Element
    let urlEl = document.createElement('a');
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    // Creating Break Element
    let lineBreakEl = document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    // Creating Description Element
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";
        let searchInputVal = searchInputEl.value;
        //console.log(searchInputVal);
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputVal;
        //console.log(url);
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
searchInputEl.addEventListener("keydown", searchWikipedia);

// Day 22....
// Day 23....