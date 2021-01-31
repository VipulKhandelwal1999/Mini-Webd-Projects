const navbar = document.querySelector('nav');
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
// LANDING PAGE ANIMATION
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);
const projectList = [
  {
    projectTitle: 'Form Validator',
    projectDescription:
      'Simple client side form validation. Check required, length, email and password match',
    projectImage: './images/proj_01.png',
    techStack: ['HTML', 'CSS', 'Javascript'],
    githubUrl: 'https://github.com/VipulKhandelwal1999/Form-Validator',
    WebsiteDemo: 'https://form-clientside-validator.netlify.app/',
  },
  {
    projectTitle: 'Video Player',
    projectDescription:
      "Custom video player using the HTML5 video element and it's JavaScript API with a custom design",
    projectImage: './images/proj_02.png',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
    githubUrl: 'https://github.com/VipulKhandelwal1999/Custom-Video-Player',
    WebsiteDemo: 'https://my-custom-video-player.netlify.app/',
  },
  {
    projectTitle: 'Movie Seat Booking',
    projectDescription:
      'Display movie choices and seats in a theater to select from in order to purchase tickets',
    projectImage: './images/proj_03.png',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
    githubUrl: 'https://github.com/VipulKhandelwal1999/Movie-Seat-Booking',
    WebsiteDemo: 'https://movie-seat-booking-project.netlify.app/',
  },
  {
    projectTitle: 'Score Keeper Game',
    projectDescription:
      'Score Keeper Project to keep your game score while playing',
    projectImage: './images/proj_04.png',
    techStack: ['HTML', 'Bulma CSS', 'JAVASCRIPT'],
    githubUrl: 'https://github.com/VipulKhandelwal1999/Score_Keeper_Game',
    WebsiteDemo: 'https://score-keeper-game.netlify.app/',
  },
];

const proj = document.getElementById('projects');
proj.innerHTML = projectList.map(
  (proj) => `<div class="photo-card">
          <div class="photo-background">
            <img class="proj-img" src=${proj.projectImage} alt=${
    proj.projectTitle
  } width="100%" height="100%"/>
          </div>
          <div class="photo-details">
            <h1>${proj.projectTitle}</h1>
            <p class="proj-description">${proj.projectDescription}</p>
            <div class="photo-meta">
              <div class="equipment">
                <h4>Github Repo</h4>
                <ul>
                  <li class="github">
                    <a href=${proj.githubUrl} target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="resolution">
                <h4>Project Demo</h4>
                <ul>
                  <li class="website">
                   <a href=${proj.WebsiteDemo} target="_blank">
                    <i class="far fa-credit-card fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="photo-tags">
              <h4>Tech Stack Used</h4>
              <ul>
                ${proj.techStack.map(
                  (tech) =>
                    `<li>
                    <a href='#'>${tech.toUpperCase()}</a>
                  </li>`
                )}
              </ul>
            </div>
          </div>
        </div>
`
);

const footer = document.querySelector('footer');
footer.innerHTML = `DEVELOPED BY VIPUL KHANDELWAL <br />COPYRIGHT © ${new Date().getFullYear()}. ALL RIGHT RESERVED.`;
const body = document.querySelector('.body_container');
const loader_img = document.querySelector('.loader_img');
const loader_container = document.querySelector('.loader');

setTimeout(() => {
  body.classList.remove('body_container');
  loader_img.classList.add('loader_img_after');
  loader_container.classList.add('loader_img_after');
}, 2500);
