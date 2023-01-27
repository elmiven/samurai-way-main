import s from './Header.module.css';


const Header = () => {
  return (
    <header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png' />
    </header>

/*       <div>
        <a href="#s">Home</a> - 
        <a href="#s">News Feed</a> - 
        <a href="#s">Messages</a> - 
      </div>
 */    );
}

export default Header;