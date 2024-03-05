import { useDispatch } from 'react-redux';
import { changeEmail,changePassword,isLogin} from '../store/index';
import { useNavigate } from "react-router-dom";
import "../style/form.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    dispatch(changeEmail(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(changePassword(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(isLogin());
    navigate('/home'); 
  };

  
  return (
    <div className="container " >
    <form onSubmit={handleSubmit} >
      <h2 >Connexion</h2>
      <div >
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="example@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" >
          password
        </label>
        <input
         type="password"
         id="password"
         name="password"
         onChange={handlePasswordChange}
         placeholder="Enter your password"
         required/>
      </div>
      <br />
      <button type="submit"> Login </button>
    </form>
  </div>
  );
}

export default Login;
