import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  
  return (
   <>
    <Profile 
      image='https://plus.unsplash.com/premium_photo-1724121437148-7d87478f505e?q=80&w=4400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='제임스 딘'
      title='구글개발자'
    />
    <Profile 
      image='https://plus.unsplash.com/premium_photo-1719467541039-567e90c13506?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='올리비아'
      isNew
      title='네이버개발자'
    />
    <Profile 
      image ='https://plus.unsplash.com/premium_photo-1725023403948-600b3eaf535f?q=80&w=5072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='마루오카'
      title='다음개발자'
      />
  </>
  );
}

export default AppProfile;


// https://plus.unsplash.com/premium_photo-1724121437148-7d87478f505e?q=80&w=4400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://plus.unsplash.com/premium_photo-1719467541039-567e90c13506?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://plus.unsplash.com/premium_photo-1725023403948-600b3eaf535f?q=80&w=5072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D