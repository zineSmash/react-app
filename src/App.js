import './App.css';
import Profile from './Profile';
import My2021 from './My2021';
import My2022 from './My2022';
import NavigationBar from './NavigationBar';
import { BrowserRouter } from 'react-router-dom';

// 컴포넌트 생성
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// 데이터 표시하기
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

// 조건부 렌더링
function IfRenderingExample(){
  let content;
  let isLoggedIn = false; // true or false

  function AdminPanel() {
    return <h1>Admin Panel</h1>;
  }
  function LoginForm() {
    return <h1>Please log in to continue.</h1>;
  }

  if(isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return (
    <div>
      {content}
    </div>
  );
}

// 조건부 삼항 연산자
function IfRenderingExample2(){
  function AdminPanel() {
    return <h1>Admin Panel</h1>;
  }
  function LoginForm() {
    return <h1>Please log in to continue.</h1>;
  }
  let isLoggedIn = true; // true or false
  return (
    <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

// App 컴포넌트
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to my app</h1>
      <img 
        className="avatar" // CSS 스타일 추가
        src={user.imageUrl}  // 데이터 표시
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
      }}/>
      <br/>
      <MyButton />  {/* 컴포넌트 중첩 */}
      {/* <br/>
      AboutPage
      <AboutPage />
      <br/>
      Profile
      <Profile /> {/* Profile 컴포넌트 불러오기 */}
      {/* <br/>
      IfRenderingExample
      <IfRenderingExample /> {/* 조건부 렌더링 컴포넌트 불러오기 */}
      {/*IfRenderingExample2
      <IfRenderingExample2 /> 조건부 삼항 연산자 컴포넌트 불러오기 */}

      <BrowserRouter>
        <NavigationBar />
        <My2021 />
        <My2022 />
      </BrowserRouter>
    </div>
  );
}

export default App;
