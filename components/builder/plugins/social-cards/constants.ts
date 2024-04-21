const socialCards = {
  styles: `
  .block-social-cards .container {
    width: 100%;
    max-width: 62.5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  
  .block-social-cards .container .card {
    position: relative;
    border-radius: 1.25rem;
    width: 33.333%;
  }
  
  .block-social-cards .container .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 1;
  }
  
  .block-social-cards .container .card .icon img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    transition: 0.7s;
    color: #fff;
  }
  
  .block-social-cards .container .card:nth-child(1) .icon {
    background: #e07768;
  }
  
  .block-social-cards .container .card:nth-child(2) .icon {
    background: #6eadd4;
  }
  
  .block-social-cards .container .card:nth-child(3) .icon {
    background: #4aada9;
  }
  
  .block-social-cards .container .card .face {
    width: 100%;
    height: 12.5rem;
    transition: 0.5s;
  }
  
  .block-social-cards .container .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(6.25rem);
  }
  
  .block-social-cards .container .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
  }
  
  .block-social-cards .container .card .face.face1 .content i {
    max-width: 6.25rem;
  }
  
  .block-social-cards .container .card .face.face2 {
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
  
  .block-social-cards .container .card .face.face2 .content p, .block-social-cards .container .card .face.face2 .content h3 {
    margin: 0;
    padding: 0;
  }
  
  .block-social-cards .container .card .face.face2 .content p {
    text-align: center;
    color: #414141;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  
  .block-social-cards .container .card .face.face2 .content h3 {
    margin-bottom: 0.625rem;
    font-size: 1.5rem;
    text-align: center;
    color: #414141;
  }
  
  .block-social-cards .container .card:hover .face.face1 {
    background: #ff0057;
    transform: translateY(0);
  }
  
  .block-social-cards .container .card:hover .face.face1 .content {
    opacity: 1;
  }
  
  .block-social-cards .container .card:hover .face.face2 {
    transform: translateY(0);
  }
  
  .block-social-cards .container a {
    text-decoration: none;
    color: #414141;
  }
  @media (max-width: 36rem) {
    .block-social-cards .container {
      border: solid 1px red;
      flex-direction: column;
    }
    .block-social-cards .container .card {
      width: 100%;
      margin-bottom: 1.25rem;
      max-width: 20rem;
      margin: 0 auto;
    }
    .block-social-cards .container .card .face {
      height: 8.5rem;
    }
    .block-social-cards .container .card .icon img {
      width: 75px;
    }
    .block-social-cards .container .card:nth-child(2) {
      border: solid 1px red;
      margin: 1rem auto;
    }
    .block-social-cards .container .card .face.face2 {
      transform: translateY(0);
      box-shadow: 0 1.25rem 3.125rem rgba(0, 0, 0, 0.4);
    }
    .block-social-cards .container .card .face.face1 {
      background: #ff0057;
      transform: translateY(0);
    }
    .block-social-cards .container .card .face.face1 .content {
      opacity: 1;
    }
  }
  `,
  content: `
  <div class="block-social-cards" data-gjs-editable="true">
  <div class="container">
  <div class="card">
    <div class="face face1">
      <div class="content">
        <div class="icon">
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643414/Msc/linkedin-brands_xmow0o.jpg?_s=public-apps">
        </div>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <h3><a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_nativodev</a></h3>
        <p>This is where I network and build my professional protfolio.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="face face1">
      <div class="content">
        <div class="icon">
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643416/Msc/twitter-square-brands_tzgscq.jpg?_s=public-apps">
        </div>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <h3><a href="https://twitter.com/AdamDipinto" target="_blank">@NativoDev</a></h3>
        <p>This is where I read news and network with different social groups.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="face face1">
      <div class="content">
        <div class="icon">
          <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706899903/facebook_1_100x100_ezd2aw.jpg?_s=public-apps">
        </div>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
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
