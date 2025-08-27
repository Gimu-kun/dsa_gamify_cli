

//khai bao banner
import SignInBannner from '../../../assets/img/Bannner/SIgnIn.svg'
import SignUpBannner from '../../../assets/img/Bannner/SIgnUp.svg'
import  { useState } from 'react';
// Các component đăng nhập và đăng ký
import SignIn from '../../../modules/Auth/Components/SignIn/SignIn';
import SignUp from '../../../modules/Auth/Components/SignUp/SignUp';
import './authLogin.modules.css'; // Assuming you have a CSS file for styling
const AuthLogin = () => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {!isSignUpMode && <SignIn />}
          {isSignUpMode && <SignUp />}
        </div>
      </div>

      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img src={SignUpBannner} className="image" alt="" />
        </div>

        {/* Right Panel */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
         <img src={SignInBannner} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;