// file main.js finished
function wall(navigateTo) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const post = document.createElement('textarea');
    const buttonPost = document.createElement('button')

    buttonPost.setAttribute ('id', 'postit')
  
    post.textContent = 'post';

    post.addEventListener('keyup', () => {
      console.log('postear')
    });
  
    title.textContent = 'Welcome to Vegan & fit';
    buttonPost.textContent ='Post';

    section.append(title, post, buttonPost);
    return section;
  
  }
  
  export default wall;

  