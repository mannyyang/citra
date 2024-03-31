const flipCards = {
  styles: `
  .block-flip-cards * {
    box-sizing: border-box;
  }

  .block-flip-cards .section-plans {
    display: flex;
    justify-content: space-between;
    font-family: "Lato", sans-serif;
    max-width: 44rem;
    margin: 0 auto;
  }

  .block-flip-cards .card {
    text-align: center;
    position: relative;
    perspective: 50rem;
    background-color: #fff;
    width: 12.5rem;
    height: 20rem;
    margin: 0.833rem;
  }

  .block-flip-cards .card__side--front img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .block-flip-cards .card__side--front h3 {
    font-size: 1rem;
    font-weight: 700;
  }

  .block-flip-cards .card h4 {
    margin: 0;
    font-weight: 500;
  }

  .block-flip-cards .card__side {
    transition: transform 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 0.133rem;
    overflow: hidden;
    box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.15);
  }

  .block-flip-cards .card__side--front,
  .block-flip-cards .card__side--back {
    padding: 0.833rem;
  }

  .block-flip-cards .card__side--back {
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .block-flip-cards .card:hover .card__side--front {
    transform: rotateY(-180deg);
  }

  .block-flip-cards .card:hover .card__side--back {
    transform: rotateY(0);
  }

  .block-flip-cards .btn.btn--white {
    text-transform: uppercase;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    color: #777;
    border-radius: 0.133rem;
    padding: 0.833rem 1.2rem;
    font-size: 1rem;
  }

  .block-flip-cards .card__side {
    width: 100%;
    height: 100%;
  }

  .block-flip-cards .card__side--front {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .block-flip-cards .card-side-config button {
    margin-right: 0.133rem;
    color: #1f75fe;
    border: 0.033rem solid #1f75fe;
    padding: 0.133rem 0.2rem;
    border-radius: 0.133rem;
    background-color: white;
    border: 0.033rem solid #1f75fe;
    cursor: pointer;
  }

  .block-flip-cards .card-side-config button.active {
    background-color: #1f75fe;
    color: #fff;
  }

  .block-flip-cards .card.show-front .card__side--front {
    transform: none !important;
  }

  .block-flip-cards .card.show-front:hover .card__side--back {
    transform: rotateY(180deg);
  }

  .block-flip-cards .card.show-back .card__side--front {
    transform: rotateY(180deg);
  }

  .block-flip-cards .card.show-back .card__side--back {
    transform: none !important;
  }

  .gjs-dashed .block-flip-cards .card-side-config {
    display: block !important;
    margin-bottom: 0.133rem;
  }

  @media (max-width: 36rem) {
    .block-flip-cards .section-plans {
      flex-direction: column;
    }
    .block-flip-cards .card {
      margin: 0 auto;
    }
    .block-flip-cards .card:nth-child(2) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  `,
  content: `
  <div class="block-flip-cards">
    <div class="card-side-config" style="display: none;" data-gjs-editable="false">
      <button class="card-side-config-btn" data-config="show-front">
        Edit card front
      </button>
      <button class="card-side-config-btn" data-config="show-back">
        Edit card back
      </button>
      <button class="card-side-config-btn" data-config="allow-flip">
        Allow flip
      </button>
    </div>
    <section class="section-plans" id="section-plans">
      <div class="card">
        <div class="card__side card__side--front">
          <img src="https://ntvassets-a.akamaihd.net/A10C8D7B855F432281DC351355FBF1AF.jpg">
          <h3>Whipped Body Butter</h3>
        </div>
        <div class="card__side card__side--back">
          <h3>Whipped Body Butter</h3>
          <h4>By Tarte</h4>
          <p>
            Indulge in the luxurious blend of nourishing ingredients as you pamper your skin with tarte's Whipped Body Butter, making it a heavenly bedtime ritual for unparalleled hydration.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card__side card__side--front">
          <img src="https://ntvassets-a.akamaihd.net/4DD91CB7584F4D2B81F74C0163F69A30.jpg">
          <h3>Mountain Herbal Body Moisturizer</h3>
        </div>
        <div class="card__side card__side--back">
          <h3>Mountain Herbal Body Moisturizer</h3>
          <h4>By Hempz</h4>
          <p>
            Experience the joy of holiday hydration with Hempz Vanilla Frost Mountain Herbal Body Moisturizer, leaving your skin smooth and infused with a festive essence.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card__side card__side--front">
          <img src="https://ntvassets-a.akamaihd.net/ADD936C2E9574798A2A80A9A2B4B6E98.jpg">
          <h3>Full-On Satin Lipstick</h3>
        </div>
        <div class="card__side card__side--back">
          <h3>Full-On Satin Lipstick</h3>
          <h4>By Buxom</h4>
          <p>
            Elevate your makeup routine with the seamless fusion of controlled precision application and vibrant color payoff, all achieved effortlessly in just one swipe.
          </p>
        </div>
      </div>
    </section>
  </div>
  `,
  script: function () {
    const cardSideConfigBtns = this.querySelectorAll('.card-side-config-btn');
    const cards = this.querySelectorAll('.card');
    cardSideConfigBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        removePrevClasses();

        btn.classList.add('active');
        const cssClass = btn.dataset.config;
        cards.forEach((card) => card.classList.add(cssClass));
      });
    });

    function removePrevClasses() {
      cardSideConfigBtns.forEach((btn) => btn.classList.remove('active'));
      cards.forEach((card) => {
        card.classList.remove('show-front', 'show-back');
      });
    }
  }
};

export default flipCards;
