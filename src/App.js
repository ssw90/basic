import logo from './logo.svg';
import './App.css';

function App() {
  const name = '엘리2';
  const list =['우유','딸기','바나나','요거트'];
  const list2 = ['피자','치킨'];
  return (
   <>
    <h1 className='orange'>{`hello! ${name}`}</h1>
    <h2>H2 test!</h2>
    <p>이름은 : {name}</p>
    <ul>
      {list.map((item) => (<li>{item}</li>))}
      {list2.map(function(item2){return <li>{item2}</li>})} 
    </ul>
    <img
      style={{width:'150px', height:'200px'}}
      src='https://s1.pearlcdn.com/KR/Upload/Community/a6a612f8f0d20231001133634550.png'
      alt='BDO'
    ></img>
  </>
  );
}

export default App;
