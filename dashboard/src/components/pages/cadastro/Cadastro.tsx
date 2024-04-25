import "./Cadastro.scss"
import password_icon from '../../../assets/password.png'
import user_icon from '../../../assets/person.png'
import { Link } from "react-router-dom";


const Cadastro = () => {


  return (
    <div className="container">
      <div className="title-label">Cadastro</div>
      <div className="content"> 
      <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Código"/>
            </div>
            <div className="input"> 
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Senha" />
            </div>
            </div>
            <div className="submit-container">
              <Link to={"dashboard"}>
                <div className="submit">Entrar</div>
              </Link>
            </div>
        </div>                 
    </div>
  );
};

export default Cadastro;