const body = document.body;
const getImage = () => {
  const ACCESS_KEY = `t2iJWYlNmemEeHbE4V8Mu_j3XO9HRPBJqAUqGd0DROs`;
  const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const imgUrl = data.links.download;
      body.style.backgroundImage = `url(${imgUrl})`;
    });
};

getImage();
