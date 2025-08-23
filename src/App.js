import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

const user = {
  name: 'zine',
  imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fey8Wzq%2FdJMb9XYwzBt%2FAAAAAAAAAAAAAAAAAAAAALuG2vD3llg6inxzeuRjUCQyEY6emvNxHzOYnCjmi3Nt%2Ftfile.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1756652399%26allow_ip%3D%26allow_referer%3D%26signature%3DBYxYBLOZQ01el62Pw7RNm5wxbdY%253D',
  imageSize: 90,
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br/>How do you do?</p>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <img 
        className="avatar" 
        src={user.imageUrl} 
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
      }}/>
      <br/>
      <MyButton />
      <AboutPage />
    </div>
  );
}

export default App;
