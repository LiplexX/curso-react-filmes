import './App.css';

const filmes = {
  Search: [
    {
      Title: 'Cattrix',
      Year: '1999',
      Poster: 'https://i.imgflip.com/105fef.jpg',
    },
    {
      Title: 'Chernobyl cat',
      Year: '2005',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IUOSQT5QGJxYN089YLxbSSZGVnE7kj1Af9NRgyoPZCZM3VvH0ffVy4yq0cxfd2vuOEo&usqp=CAU',
    },
    {
      Title: 'american psycat',
      Year: '1981',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLoGxQZgxEkwJhO86SSwbFTFkrANH7BpDl1nP9JeNeMT2XNSMqFVQ0fuf2ybHV8-2b7Q&usqp=CAU',
    },
    {
      Title: 'Car',
      Year: '2022',
      Poster: 'https://ih1.redbubble.net/image.5491556404.8523/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    },
    {
      Title: 'Car 2',
      Year: '2024',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqCvVPAgg-ROOi_vgupei9Ou3IqqLTyBUANa2RrFFmTvHT6-_dbHfjuitU5ToshvXDXM&usqp=CAU',
    },
    {
      Title: 'todo gato em panico',
      Year: '2008',
      Poster: 'https://static.wikia.nocookie.net/f4f4ff96-beee-478e-b0a4-e252e821106b/scale-to-width/755',
    },
    {
      Title: 'Jigsaw',
      Year: '2007',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXsVVGm5OpBNTY1snHZ-iUCku_694JK97Gw&s',
    },
    {
      Title: 'breaking cat',
      Year: '2013',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDw0gCQcvwcS-dC5FyzpwPjjHX2EerjcHsQ&s',
    },
  ]
}

function App() {
  return (
    <div className="App">
      <div className= "BoxFilmes">
        <h2>Buscar filmes: </h2>
        <form>
          <input placeholder='Digite o nome do filme...'/>
          <button type='submit'>Buscar</button>
        </form>
        <div className='filmesGrid'>
          {filmes.Search.map((filme) => (
          <div className= "filmeCard">
            <h3>{filme.Title}</h3>
            <img src= {filme.Poster}></img>
            <p>Ano: {filme.Year} </p>
          </div>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default App;
