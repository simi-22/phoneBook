
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';


//1. 왼쪽에는 연락처를 등록하는 폼이(전화기), 오른쪽에는 연락처 리스트와 search창이 있다.
//2. 리스트에 유저이름과 전화번호를 추가할 수 있다. (그룹나누기)
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름 검색으로 찾을 수 있다.
function App() {
  return (
    <div>
      <h1 className='title'>Contacts</h1>
      <div className='container'>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
