function script() {
  

    // All clicked
    const NavAll = document.querySelector("#nav-item-all");
    NavAll.addEventListener("click", async function () {
        const drinkAll = await getDrinksAll();
        updateUI(drinkAll);
        console.log(drink);
    });

    function getDrinksAll() {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then(response => response.json())
            .then(response => response.drinks);
    }

    // Alcoholic clicked
    const NavAlcoholic = document.querySelector("#nav-item-alcoholic");
    NavAlcoholic.addEventListener("click", async function () {
        const drinkAlc = await getDrinksAlcoholic();
        updateUI(drinkAlc);
        console.log(drink);
    });

    function getDrinksAlcoholic() {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(response => response.json())
            .then(response => response.drinks);
    }

    // Non-Alcoholic clicked
    const NavNonAlcoholic = document.querySelector("#nav-item-nonalcoholic");
    NavNonAlcoholic.addEventListener("click", async function () {
        const drinkNonAlc = await getDrinksNonAlcoholic();
        updateUI(drinkNonAlc);
        console.log(drink);
    });

    function getDrinksNonAlcoholic() {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
            .then(response => response.json())
            .then(response => response.drinks);
    }

// search drink

    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", async function () {
        const inputkeyword = document.querySelector(".input-keyword");
        const drink = await getDrinks(inputkeyword.value);
        updateUI(drink);
        console.log(drink);
    });
    function getDrinks(key) {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + key)
            .then(response => response.json())
            .then(response => response.drinks);
    }

    function updateUI(drink) {
        let cards = "";
        drink.forEach(d => cards += showcard(d));
        const drinksContainer = document.querySelector(".drink-container");
        drinksContainer.innerHTML = cards;
    }


    // Modal detail drinks

    document.addEventListener("click", async function (element) {
        if (element.target.classList.contains("modal_detail_button")) {
            const drinkid = element.target.dataset.drinkid;
            const drinkDetail = await getDrinkDetail(drinkid);
            updateUIDetail(drinkDetail);
            console.log(drinkid);
            console.log(drinkDetail);
        }

    });

    function getDrinkDetail(id) {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
            .then(response => response.json())
            .then(response => response.drinks);

    }

    function updateUIDetail(drinkid) {

        let modal = "";
        drinkid.forEach(d => modal = showModalDetail(d));
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = modal;
    }


    
    $(".nav-link").on("click", function ()
    {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        let navMenu = $(this).html();
        $("h2").html(navMenu);
    })


    // function to save div

    function showcard(d) {
        return `<div class="col-md-3">
                            <div class="card mt-5" style = "border : 2px solid #ad1f1a" >
                                <img src = "${d.strDrinkThumb }"class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title ">${d.strDrink }</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> ID: ${d.idDrink }</h6>
                                    <a href="#" class="btn btn-dark mt-3 modal_detail_button" 
                                    data-toggle="modal" data-target="#detailDrinkModal" data-drinkid = "${d.idDrink }"> Details</a>
                                </div>
                            </div>
                        </div>`

    }

    function showModalDetail(d) {
        return `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <img src = "${d.strDrinkThumb }"class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><h4>${d.strDrink } </h4></li>
                                    <li class="list-group-item"><strong>Type : ${ d.strAlcoholic}</strong></li>
                                    <li class="list-group-item"><strong>Category : ${d.strCategory}</strong></li>
                                    <li class="list-group-item"><strong>Glass Type : ${d.strGlass}</strong></li>
                                    <li class="list-group-item"><strong>Instruction : </strong><br>${d.strInstructions}</li>
                                </ul>
                            </div>
                        </div> 
                    </div>`
    }


}






// detail button clicked, event binding














export default script;