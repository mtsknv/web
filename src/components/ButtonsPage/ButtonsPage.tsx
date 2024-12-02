import './buttons_page.css';

const ButtonsPage= () => { 
  return (
    <div>
      <div className="button-container">
        <a href="https://www.instagram.com" className="instagram-button">Instagram</a>
      </div>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ButtonsPage;