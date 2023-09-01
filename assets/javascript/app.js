'use strict';

import { posts } from "./posts.js";

const oldagramAppEl = document.querySelector('.oldagram-app');

// Small random function for the hover states
const randomNum = function () {
  return Math.floor(Math.random() * 100);
}



/*
  functions to create the article / post structure.
*/

/*
  <header class="app-header">
    <a href="" class="app-link">
      <img src="./assets/images/project-images/logo.png" alt="" class="logo-img">
    </a>

    <a href="" class="app-link">
      <img src="./assets/images/project-images/user-avatar.png" alt="" class="user-account-img">
    </a>
  </header>
*/

const createAppHeader = function () {
  const appHeader = document.createElement('header');
  appHeader.classList.add('app-header');

  return appHeader;
}

// can be used for multiple links throughout the app
const createAppLink = function (hrefAddr) {
  const appLink = document.createElement('a');
  appLink.classList.add('app-link');
  appLink.setAttribute('href', `${hrefAddr}`);
  appLink.setAttribute('target', '_blank');

  return appLink;
}

const createAppHeaderImg = function (srcPath, altText, className) {
  const appHeaderImg = document.createElement('img');
  appHeaderImg.classList.add(`${className}`);
  appHeaderImg.setAttribute('src', `${srcPath}`);
  appHeaderImg.setAttribute('alt', `${altText}`);

  return appHeaderImg
}


/*
  <main class="app-main">
    <article class="article-container">
      ...
    </article>
  </main>
*/
const createAppMain = function () {
  const appMain = document.createElement('main');
  appMain.classList.add('app-main');

  return appMain;
}

const createArticleContainer = function () {
  const articleContainer = document.createElement('article');
  articleContainer.classList.add('article-container');

  return articleContainer;
}

/*
  <div class="article-header-box">
    <a href="" class="app-link">
      <img src="./assets/images/project-images/avatar-vangogh.jpg" alt="" class="author-img">
    </a>
    <div class="author-text-box">
      <span class="author-name">Vincent van Gogh</span>
      <span class="author-location">Zudert, Netherlands</span>
    </div>
  </div>
*/
const createArticleHeaderBox = function () {
  const articleHeaderBox = document.createElement('div');
  articleHeaderBox.classList.add('article-header-box');

  return articleHeaderBox;
}

const createAuthorTextBox = function () {
  const authorTextBox = document.createElement('div');
  authorTextBox.classList.add('author-text-box');

  return authorTextBox;
}
const createSpanContainer = function (className, textContent, space = '') {
  const spanContainer = document.createElement('span');
  spanContainer.classList.add(`${className}`);
  spanContainer.textContent = `${textContent}${space}`

  return spanContainer;
}

/*
  <div class="article-img-box">
    <img src="./assets/images/project-images/post-vangogh.jpg" alt="" class="article-img">
  </div>
*/
const createArticleImgBox = function () {
  const articleImgBox = document.createElement('div');
  articleImgBox.classList.add('article-img-box');
  
  return articleImgBox;
}
const createArticleImg = function (srcPath) {
  const articleImg = document.createElement('img');
  articleImg.classList.add('article-img');
  articleImg.setAttribute('src', `${srcPath}`);

  return articleImg;
}

/*
  <footer class="app-footer">
    ...
  </footer>
*/
const createAppFooter = function () {
  const appFooter = document.createElement('footer');
  appFooter.classList.add('app-footer');

  return appFooter;
}

/*
<!-- article icons -->
  <div class="article-icon-box">
    <button class="article-btn">
      <img src="./assets/images/project-images/icon-heart.png" alt="" class="article-icon">
    </button>
    <button class="article-btn">
      <img src="./assets/images/project-images/icon-comment.png" alt="" class="article-icon">
    </button>
    <button class="article-btn">
      <img src="./assets/images/project-images/icon-dm.png" alt="" class="article-icon">
    </button>
  </div>
*/
const createArticleIconBox = function () {
  const articleIconBox = document.createElement('div');
  articleIconBox.classList.add('article-icon-box');

  return articleIconBox;
}

const createArticleBtn = function (uniqueId) {
  const articleBtn = document.createElement('button');
  articleBtn.classList.add('article-btn', `${uniqueId}`);

  return articleBtn;
}

const createArticleIconImg = function (srcPath) {
  const articleIconImg = document.createElement('img');
  articleIconImg.classList.add('article-icon');
  articleIconImg.setAttribute('src', `${srcPath}`);

  return articleIconImg;
}

/*
  <span class="article-likes">21,492 likes</span>
*/
const createArticleLikes = function (textContent) {
  const articleLikes = document.createElement('span');
  articleLikes.classList.add('article-likes');
  articleLikes.textContent = `${textContent}`;

  return articleLikes;
}

/*
  <ul class="comment-list">
    <li class="comment-item">
      <span class="commenter-name">vincey1853</span>
      <span class="comment">just took a few mushrooms lol</span>
    </li>
  </ul>
*/
const createArticleUl = function () {
  const articleUl = document.createElement('comment-list');
  articleUl.classList.add('comment-list')

  return articleUl;
}

const createArticleLi = function () {
  const articleLi = document.createElement('li');
  articleLi.classList.add('comment-item');

  return articleLi;
}

// Function to create the app header
const createAppHeaderEl = function () {
  const appHeaderEl = createAppHeader();
  const logoLinkEl = createAppLink('#');
  const logoImgEl = createAppHeaderImg('./assets/images/project-images/logo.png', 'logo of the company', 'logo-img');
  const userAccountLinkEl = createAppLink('https://scrimba.com/learn/frontend');
  const userAccountImgEl = createAppHeaderImg('./assets/images/project-images/user-avatar.png', 'user account profile image', 'user-account-img');

  logoLinkEl.append(logoImgEl);
  userAccountLinkEl.append(userAccountImgEl);
  appHeaderEl.append(logoLinkEl, userAccountLinkEl);

  oldagramAppEl.append(appHeaderEl);
}

/*
  This function is quiet large however its very basic instructions for creating the elements for the post, maybe something I will refactor 
  it in the future.
*/
const createAppMainEl = function () {
  const appMainEl = createAppMain();
  for (let i = 0; i < posts.length; i++) {
    const articleContainerEl = createArticleContainer();
    const articleHeaderBoxEl = createArticleHeaderBox();
    const authorImgLinkEl = createAppLink('#');
    const authorImgEl = createAppHeaderImg(posts[i].avatar, `profile image of ${posts[i].name}`, 'author-img');
    const authorTextBoxEl = createAuthorTextBox();
    const authorNameEl = createSpanContainer('author-name', `${posts[i].name}`);
    const authorLocationEl = createSpanContainer('author-location', `${posts[i].location}`);
    const articleImgBoxEl = createArticleImgBox();
    const articleImgEl = createArticleImg(posts[i].post);
    const appFooterEl = createAppFooter();
    const articleIconBoxEl = createArticleIconBox()
    const heartBtnEl = createArticleBtn('heart-icon')
    const heartIconImgEl = createArticleIconImg('./assets/images/project-images/icon-heart.png')
    const commentBtnEl = createArticleBtn('comment-icon')
    const commentIconImgEl = createArticleIconImg('./assets/images/project-images/icon-comment.png')
    const dmBtnEl = createArticleBtn('dm-icon')
    const dmIconImgEl = createArticleIconImg('./assets/images/project-images/icon-dm.png')
    const articleLikesEl = createArticleLikes(`${posts[i].likes} likes`);
    const articleUlEl = createArticleUl();
    const articleLiEl = createArticleLi();
    const commenterNameEl = createSpanContainer('commenter-name', `${posts[i].username}`, ` `);
    const commentEl = createSpanContainer('comment', `${posts[i].comment}`);
    authorImgLinkEl.append(authorImgEl);
    authorTextBoxEl.append(authorNameEl, authorLocationEl);
    articleHeaderBoxEl.append(authorImgLinkEl, authorTextBoxEl);
    articleImgBoxEl.append(articleImgEl);
    heartBtnEl.append(heartIconImgEl);
    commentBtnEl.append(commentIconImgEl);
    dmBtnEl.append(dmIconImgEl);
    articleIconBoxEl.append(heartBtnEl, commentBtnEl, dmBtnEl);
    articleLiEl.append(commenterNameEl, commentEl);
    articleUlEl.append(articleLiEl);
    appFooterEl.append(articleIconBoxEl, articleLikesEl, articleUlEl);
    articleContainerEl.append(articleHeaderBoxEl, articleImgBoxEl, appFooterEl);
    appMainEl.append(articleContainerEl);
  }
  oldagramAppEl.append(appMainEl);
}

const init = function () {
  createAppHeaderEl();
  createAppMainEl()
}

init()

const likesBtnEl = document.querySelectorAll('.heart-icon');
const likesEl = document.querySelectorAll('.article-likes');
const userProfile = document.querySelector('.user-account-img');
console.log(userProfile);
const authorImgs = document.querySelectorAll('.author-img');
console.log(userProfile);
/*
  This is a local implementation of making the like button work for
  a single use or person.
*/  

const checkLikesInLocalStorage = function () {
  for (let i = 0; i < likesBtnEl.length; i++) {
    if (localStorage.hasOwnProperty(`post-${i}`)) {
      posts[i].liked = JSON.parse(localStorage.getItem(`post-${i}`))
      if (posts[i].liked) {
        posts[i].likes++
        likesEl[i].textContent = `${posts[i].likes} likes`
        likesBtnEl[i].classList.add('liked')
      } else {
        likesEl[i].textContent = `${posts[i].likes} likes`
      }
    }
  }
}

checkLikesInLocalStorage()

// Event Handlers
// for some weird reason unknown to me, if I place the code within the event listener into its own function, it goes crazy. 

// Event Listener
for (let i = 0; i < likesBtnEl.length; i++) {
  likesBtnEl[i].addEventListener('click', function () {
    if (!posts[i].liked) {
      posts[i].liked = true
      posts[i].likes++
      likesEl[i].textContent = `${posts[i].likes} likes`
      likesBtnEl[i].classList.add('liked')
    } else {
      posts[i].liked = false
      posts[i].likes--
      likesEl[i].textContent = `${posts[i].likes} likes`
      likesBtnEl[i].classList.remove('liked')
    }

    localStorage.setItem(`post-${i}`, JSON.stringify(posts[i].liked))
  })
}

const changeIconShapes = function (elementName, index = 0) {
  elementName[index].style.borderRadius = `${randomNum()}% ${randomNum()}% ${randomNum()}% ${randomNum()}%`;
}

const resetIconShapes = function (elementName, index = 0) {
  elementName[index].style.borderRadius = 'var(--border-rad-round)';
}

userProfile.addEventListener('mouseover', function () {
  userProfile.style.borderRadius = `${randomNum()}% ${randomNum()}% ${randomNum()}% ${randomNum()}%`;
})
userProfile.addEventListener('mouseout', function () {
  userProfile.style.borderRadius = 'var(--border-rad-round)';
})

for (let i = 0; i < authorImgs.length; i++) {
  authorImgs[i].addEventListener('mouseover', function () {
    authorImgs[i].style.borderRadius = `${randomNum()}% ${randomNum()}% ${randomNum()}% ${randomNum()}%`;
  })
  authorImgs[i].addEventListener('mouseout', function () {
    authorImgs[i].style.borderRadius = 'var(--border-rad-round)';
  })
}