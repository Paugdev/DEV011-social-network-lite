// file main.js finished
import { getPosts } from '../lib/services';
import logo from './images/logo.png';

function wall(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const post = document.createElement('textarea');
  const buttonPost = document.createElement('button');
  const postText = document.createElement('p');
  const imgLogo = document.createElement('img');
  const logOut = document.createElement('button');

  logOut.setAttribute('id', 'outButton');
  logOut.innerText = 'Log Out';

  imgLogo.src = logo;
  imgLogo.setAttribute('id', 'logo');

  post.setAttribute('id', 'textArea');

  postText.setAttribute('id', 'posteo');

  buttonPost.setAttribute('id', 'postit');
  post.placeholder = 'Your Vegan Tips...';

  title.textContent = 'Vegan tips for a better life and happy food :)';

  logOut.addEventListener('click', () => {
    navigateTo('/home');
  });

  buttonPost.addEventListener('click', () => {
    postText.innerText = post.value;
  });

  buttonPost.textContent = 'Post';
  getPosts(post.value);

  section.append(imgLogo, title, post, buttonPost, postText, logOut);
  return section;
}

export default wall;
