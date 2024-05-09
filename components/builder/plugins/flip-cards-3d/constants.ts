import { BuilderComponent } from "../enum";

const flipCards3d = {
  styles: `
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} {
      box-sizing: border-box;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} * {
      box-sizing: border-box;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARDS_3D_WRAPPER.class} {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 100%;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D.class} {
      width: 25rem;
      height: 21.25rem;
      margin: 1rem;
      perspective: 93.75rem;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D.class} .${BuilderComponent.FLIP_CARD_3D_CONTENT.class} {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D.class}.flipped .${BuilderComponent.FLIP_CARD_3D_CONTENT.class} {
      transform: rotateY(180deg);
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} h2 {
      text-align: center;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class}, .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      border-radius: 6px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class} .${BuilderComponent.FLIP_CARD_3D_INNER.class}, .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INNER.class} {
      height: 100%;
      display: grid;
      padding: 1.5em;
      transform: translateZ(80px) scale(0.94);
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class} {
      background-color: #fff;
      background-size: cover;
      background-position: center center;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class}:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 6px;
      backface-visibility: hidden;
      background: linear-gradient(40deg, rgba(67, 138, 243, 0.7), rgba(255, 242, 166, 0.7));
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class} .${BuilderComponent.FLIP_CARD_3D_INNER.class} {
      grid-template-rows: 5fr 1fr 1fr 2fr 1fr;
      justify-items: center;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class} h2 {
      grid-row: 2;
      margin-bottom: 0.3em;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #fff;
      font-weight: 500;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
      line-height: 30px;
      margin-bottom: 8px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class} .${BuilderComponent.FLIP_CARD_3D_IMAGE_CONTAINER.class} {
      grid-row: 3;
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_FRONT.class} .${BuilderComponent.FLIP_CARD_3D_IMAGE_CONTAINER.class} i {
      margin: 0 1px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} {
      transform: rotateY(180deg);
      background-color: #fff;
      border: 2px solid #f0f0f0;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INNER.class} {
      grid-template-rows: 1fr 2fr 1fr 2fr 14fr 1fr 1fr;
      grid-template-columns: repeat(4, auto);
      grid-column-gap: 0.8em;
      justify-items: center;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} {
      position: relative;
      display: flex;
      align-items: center;
      color: #355cc9;
      grid-row: 3;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class}:not(:first-of-type):before {
      content: "";
      position: absolute;
      left: -0.9em;
      height: 18px;
      width: 1px;
      background-color: #ccc;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} span {
      font-size: 2em;
      font-weight: 700;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} i {
      font-size: 1.2em;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} .icon::before {
      background: linear-gradient(40deg, #355cc9, #438af3);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} .icon {
      margin-left: 0.3em;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} .icon span {
      display: block;
      font-size: 0.8em;
      font-weight: 600;
      white-space: nowrap;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class} {
      grid-row: 5;
      grid-column: 1/-1;
      font-size: 0.86em;
      border-radius: 5px;
      font-weight: 600;
      line-height: 1.4em;
      overflow: auto;
      color: #355cc9;
      padding-right: 10px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class} p,
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class} ul li {
      color: #355cc9;
      font-size: 14px;
      line-height: 20px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class} ul li {
      margin: 0;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_LOCATION.class}, .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .back .${BuilderComponent.FLIP_CARD_3D_PRICE.class} {
      font-weight: 600;
      color: #355cc9;
      grid-row: 1;
      font-size: 0.86em;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_LOCATION.class} {
      grid-column: 1/3;
      justify-self: left;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_PRICE.class} {
      grid-column: 3/-1;
      justify-self: right;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .button {
      grid-column: 1/-1;
      justify-self: center;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .button {
      grid-row: -1;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      cursor: pointer;
      display: block;
      padding: 0 1.5em;
      height: 3em;
      line-height: 2.9em;
      min-width: 3em;
      background-color: transparent;
      border: solid 2px #fff;
      color: #fff;
      border-radius: 4px;
      text-align: center;
      left: 50%;
      backface-visibility: hidden;
      transition: 0.3s ease-in-out;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .button:hover {
      background-color: #fff;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
      text-shadow: none;
      color: #355cc9;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .button.return {
      line-height: 3em;
      color: #355cc9;
      border-color: #355cc9;
      text-shadow: none;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .button.return:hover {
      background-color: #355cc9;
      color: #fff;
      box-shadow: none;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} ::-webkit-scrollbar {
      width: 5px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} ::-webkit-scrollbar-thumb {
      background: #859ddf;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} ::-webkit-scrollbar-thumb:hover {
      background: #355cc9;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .icon img {
      width: 24px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .cta-arrow {
      width: 16px;
    }
    .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_IMAGE_CONTAINER.class} img {
      width: 16px;
      opacity: 0.8;
    }
    @media (max-width: 36rem) {
      .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INFO.class} { display: none; }
      .${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class} .${BuilderComponent.FLIP_CARD_3D_BACK.class} .${BuilderComponent.FLIP_CARD_3D_INNER.class} {
        grid-template-rows: 0fr 0fr 0fr 0fr 1fr 0fr 0fr;
      }
    }
  `,
  content: `
    <div class="${BuilderComponent.FLIP_CARDS_3D_CONTAINER.class}">
      <div class="${BuilderComponent.FLIP_CARDS_3D_WRAPPER.class}">
        <div class="${BuilderComponent.FLIP_CARD_3D.class}">
          <div class="${BuilderComponent.FLIP_CARD_3D_CONTENT.class}">
            <div class="${BuilderComponent.FLIP_CARD_3D_FRONT.class}" style="background-image: url('https://ntvassets-a.akamaihd.net/47DA11690F9F49E888078C706AB715D9.jpg')">
              <div class="${BuilderComponent.FLIP_CARD_3D_INNER.class}">
                <h2 class="${BuilderComponent.FLIP_CARD_3D_TITLE.class}">Embassy Suites Golf Resort</h2>
                <div class="${BuilderComponent.FLIP_CARD_3D_IMAGE_CONTAINER.class}">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                </div>
                <button class="button ${BuilderComponent.FLIP_CARD_3D_DETAIL.class}">Details</button>
              </div>
            </div>
            <div class="${BuilderComponent.FLIP_CARD_3D_BACK.class}">
              <div class="${BuilderComponent.FLIP_CARD_3D_INNER.class}">
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>5</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                    <span>people</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>3</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>2</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>1</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class}">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_LOCATION.class}">
                  Greenville, SC
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_PRICE.class}">
                  38€ / day
                </div>
                <button class="button return ${BuilderComponent.FLIP_CARD_3D_RETURN_BTN.class}">
                  <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="${BuilderComponent.FLIP_CARD_3D.class}">
          <div class="${BuilderComponent.FLIP_CARD_3D_CONTENT.class}">
            <div class="${BuilderComponent.FLIP_CARD_3D_FRONT.class}" style="background-image: url('https://ntvassets-a.akamaihd.net/D7E9791C8CEA48438053E7698361180F.jpg')">
              <div class="${BuilderComponent.FLIP_CARD_3D_INNER.class}">
                <h2 class="${BuilderComponent.FLIP_CARD_3D_TITLE.class}">Homewood Suites Downtown Cary</h2>
                <div class="${BuilderComponent.FLIP_CARD_3D_IMAGE_CONTAINER.class}">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651107/star-half-alt-solid_l1f1r1.jpg?_s=public-apps">
                </div>
                <button class="button ${BuilderComponent.FLIP_CARD_3D_DETAIL.class}">Details</button>
              </div>
            </div>
            <div class="${BuilderComponent.FLIP_CARD_3D_BACK.class}">
              <div class="${BuilderComponent.FLIP_CARD_3D_INNER.class}">
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>4</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                    <span>people</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>3</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>2</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>1</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class}">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_LOCATION.class}">
                  Cary, NC
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_PRICE.class}">
                  42€ / day
                </div>
                <button class="button return ${BuilderComponent.FLIP_CARD_3D_RETURN_BTN.class}">
                  <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="${BuilderComponent.FLIP_CARD_3D.class}">
          <div class="${BuilderComponent.FLIP_CARD_3D_CONTENT.class}">
            <div class="${BuilderComponent.FLIP_CARD_3D_FRONT.class}" style="background-image: url('https://ntvassets-a.akamaihd.net/37950159B6504FC4AD96E1E78018D50E.jpg')">
              <div class="${BuilderComponent.FLIP_CARD_3D_INNER.class}">
                <h2 class="${BuilderComponent.FLIP_CARD_3D_TITLE.class}">Aloft Downtown Chicago</h2>
                <div class="${BuilderComponent.FLIP_CARD_3D_IMAGE_CONTAINER.class}">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651107/star-half-alt-solid_l1f1r1.jpg?_s=public-apps">
                </div>
                <button class="button ${BuilderComponent.FLIP_CARD_3D_DETAIL.class}">Details</button>
              </div>
            </div>
            <div class="${BuilderComponent.FLIP_CARD_3D_BACK.class}">
              <div class="${BuilderComponent.FLIP_CARD_3D_INNER.class}">
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>8</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                    <span>people</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>3</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>2</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_INFO.class}">
                  <span>1</span>
                  <div class="icon">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                  </div>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_DESCRIPTION.class}">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore, temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut facilis laudantium nam!</p>
                  <p>Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt, repudiandae aspernatur explicabo numquam! Tenetur!</p>
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_LOCATION.class}">
                  Chicago, IL
                </div>
                <div class="${BuilderComponent.FLIP_CARD_3D_PRICE.class}">
                  60€ / day
                </div>
                <button class="button return ${BuilderComponent.FLIP_CARD_3D_RETURN_BTN.class}">
                  <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  script: function () {    
    const cards = document.querySelectorAll('.ntvc-flip-cards-3d-container .ntvc-flip-card-3d');
    cards.forEach((card) => {
      card.querySelector('.ntvc-flip-card-3d-detail')?.addEventListener('click', () => {
        card.classList.add('flipped');
      });

      card.querySelector('.ntvc-flip-card-3d-return-btn')?.addEventListener('click', () => {
        card.classList.remove('flipped');
      });
    });
  }
};

export default flipCards3d;
