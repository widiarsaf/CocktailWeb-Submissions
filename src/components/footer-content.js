class FooterContent extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })

    }

    connectedCallback() {

        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        .card-body, .card-title, .card-text, .link1, .link2 {
            display : block;
            background-color: #8a877b;
            text-align: center;
            padding-top : 6px;
            padding-bottom : 6px;
            margin-top : 10px;
        }

        .card-title{
            margin-top : 5px;
        }

        </style>

        <div class="card-body">
          <h3 class="card-title" style = "color : #ffff;" >THANK YOU</h3>
          <p class="card-text" >I learned a lot while creating this website even though it was so imperfect.</p>
          <h4 >Supported By : </h4>
          <a href="https://www.dicoding.com/" class="link1">Dicoding.com</a>
          <a href="https://www.thecocktaildb.com/api.php" class="link2">www.thecocktaildb.com</a>
        </div>`
    }
}

customElements.define("footer-content", FooterContent);