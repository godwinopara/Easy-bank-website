# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./desktop-design.jpg)

### Links

- [Live Demo](https://easy-digital-bank.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SCSS](https://sass-lang.com/) - For styles

### What I learned

- I learnt various way to set background images with the pseudo :before and :after elements
  I had a difficult time displaying the two hero background images, i had to use :before pseudo for the other background design and pseudo :after for the phone background image.

Here is the code snippet, see below:

```html
<section class="header-hero container">
  <div class="hero-image"></div>
  <div class="header-description">
    <div class="content">
      <h1>
        Next generation
        <br />
        digital banking
      </h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button class="btn">Request Invite</button>
    </div>
  </div>
</section>
```

```css
// HERO BACKGROUND DESIGN IMAGE

&::before {
  content: "";
  position: absolute;
  top: -5%;
  left: -10%;
  background: url("../../images/bg-intro-mobile.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 115%;

  // media query breakpoint 1024px for the hero-image

  @include breakpoint-up(medium) {
    top: -15%;
    background: url("../../images/bg-intro-desktop.svg");
    background-size: 120%;
    background-position: 8% 70%;
    height: 100%;
    width: 130%;
  }
}

// HERO PHONE BACKGROUND IMAGE
&::after {
  content: "";
  position: absolute;
  top: -40%;
  left: 0;
  background: url("../../images/image-mockups.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 160%;
  width: 100%;

  @include breakpoint-up(medium) {
    left: 20%;
    top: -27%;
    background-size: 105%;
    width: 110%;
  }
}
```

### Useful resources

- [CSS TRICKS](https://css-tricks.com/) - I needed a way to add svg to the project and be able to change the color on hover without putting the svg image directly in the html. I learn how to use the svg mask syntax to add the svg icon as a background image and i can change the color with background-color property.
  I really liked this pattern and will use it going forward.
- [Coder Coder](https://www.youtube.com/watch?v=y9OVL8D8XGs) - I was beginning to give up on how to display the two hero background images properly on till i stumble upon this youtube, that was when the idea on how to display the image clicked

## Author

- Website - [Godwin Opara](https://godwin-ahamefula.netlify.app/)
- Frontend Mentor - [@godwinopara](https://www.frontendmentor.io/profile/godwinopara)
- Twitter - [@godwinopara](https://www.twitter.com/godwinopara12)
