import { BuilderComponent } from "../enum";

const socialCards = {
  styles: `
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} {
    width: 100%;
    max-width: 62.5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} {
    position: relative;
    border-radius: 1.25rem;
    width: 33.333%;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 1;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class} img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    transition: 0.7s;
    color: #fff;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:nth-child(1) .${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class} {
    background: #e07768;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:nth-child(2) .${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class} {
    background: #6eadd4;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:nth-child(3) .${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class} {
    background: #4aada9;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class} {
    width: 100%;
    height: 12.5rem;
    transition: 0.5s;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(6.25rem);
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} {
    opacity: 1;
    transition: 0.5s;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} i {
    max-width: 6.25rem;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    box-sizing: border-box;
    box-shadow: 0 1.25rem 3.125rem rgba(0, 0, 0, 0.8);
    transform: translateY(-6.25rem);
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face2 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} p, .block-social-cards .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .face.face2 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} h3 {
    margin: 0;
    padding: 0;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face2 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} p {
    text-align: center;
    color: #414141;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face2 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} h3 {
    margin-bottom: 0.625rem;
    font-size: 1.5rem;
    text-align: center;
    color: #414141;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:hover .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 {
    background: #ff0057;
    transform: translateY(0);
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:hover .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} {
    opacity: 1;
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:hover .${BuilderComponent.SOCIAL_CARD_FACE.class}.face2 {
    transform: translateY(0);
  }
  
  .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} a {
    text-decoration: none;
    color: #414141;
  }
  @media (max-width: 36rem) {
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} {
      border: solid 1px red;
      flex-direction: column;
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} {
      width: 100%;
      margin-bottom: 1.25rem;
      max-width: 20rem;
      margin: 0 auto;
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class} {
      height: 8.5rem;
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class} img {
      width: 75px;
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class}:nth-child(2) {
      border: solid 1px red;
      margin: 1rem auto;
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face2 {
      transform: translateY(0);
      box-shadow: 0 1.25rem 3.125rem rgba(0, 0, 0, 0.4);
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 {
      background: #ff0057;
      transform: translateY(0);
    }
    .${BuilderComponent.SOCIAL_CARDS_CONTAINER.class} .${BuilderComponent.SOCIAL_CARDS_WRAPPER.class} .${BuilderComponent.SOCIAL_CARD.class} .${BuilderComponent.SOCIAL_CARD_FACE.class}.face1 .${BuilderComponent.SOCIAL_CARD_CONTENT.class} {
      opacity: 1;
    }
  }
  `,
  content: `
  <div class="${BuilderComponent.SOCIAL_CARDS_CONTAINER.class}" data-gjs-editable="true">
  <div class="${BuilderComponent.SOCIAL_CARDS_WRAPPER.class}">
  <div class="${BuilderComponent.SOCIAL_CARD.class}">
    <div class="face1 ${BuilderComponent.SOCIAL_CARD_FACE.class}">
      <div class="${BuilderComponent.SOCIAL_CARD_CONTENT.class}">
        <div class="${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class}">
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643414/Msc/linkedin-brands_xmow0o.jpg?_s=public-apps">
        </div>
      </div>
    </div>
    <div class="face2 ${BuilderComponent.SOCIAL_CARD_FACE.class}">
      <div class="${BuilderComponent.SOCIAL_CARD_CONTENT.class}">
        <h3><a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_nativodev</a></h3>
        <p>This is where I network and build my professional protfolio.</p>
      </div>
    </div>
  </div>
  <div class="${BuilderComponent.SOCIAL_CARD.class}">
    <div class="face1 ${BuilderComponent.SOCIAL_CARD_FACE.class}">
      <div class="${BuilderComponent.SOCIAL_CARD_CONTENT.class}">
        <div class="${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class}">
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643416/Msc/twitter-square-brands_tzgscq.jpg?_s=public-apps">
        </div>
      </div>
    </div>
    <div class="face2 ${BuilderComponent.SOCIAL_CARD_FACE.class}">
      <div class="${BuilderComponent.SOCIAL_CARD_CONTENT.class}">
        <h3><a href="https://twitter.com/AdamDipinto" target="_blank">@NativoDev</a></h3>
        <p>This is where I read news and network with different social groups.</p>
      </div>
    </div>
  </div>
  <div class="${BuilderComponent.SOCIAL_CARD.class}">
    <div class="face1 ${BuilderComponent.SOCIAL_CARD_FACE.class}">
      <div class="${BuilderComponent.SOCIAL_CARD_CONTENT.class}">
        <div class="${BuilderComponent.SOCIAL_CARD_CONTENT_ICON.class}">
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706899903/facebook_1_100x100_ezd2aw.jpg?_s=public-apps">
        </div>
      </div>
    </div>
    <div class="face2 ${BuilderComponent.SOCIAL_CARD_FACE.class}">
      <div class="${BuilderComponent.SOCIAL_CARD_CONTENT.class}">
        <h3><a href="https://facebook.com" target="_blank">@nativoDev</a></h3>
        <p>This is where I connect with friends and family.</p>
      </div>
    </div>
  </div>
</div>
</div>
    `
};

export default socialCards;
