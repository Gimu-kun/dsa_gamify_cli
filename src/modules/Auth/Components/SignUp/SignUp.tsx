// src/components/SignUp.tsx

import { useState } from 'react';
//  Import hook
import { useSignUp} from '../../Hooks/useSignUP/useSignUp'; 
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import type { SignUpForm } from '../../../Types/Types';
 


const SignUp = () => {
  const { SignUp, isLoading, error } = useSignUp();

  const [formData, setFormData] = useState<SignUpForm>({
   fullname: '',
   username: '',
   passwords: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kiểm tra dữ liệu trước khi gửi
    if (!formData.username || !formData.username || !formData.passwords ) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    // Gọi hook để gửi dữ liệu
    await SignUp(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>

      {/* Hiển thị lỗi toàn cục */}
      {error && (
        <p style={{ color: 'red', fontSize: '14px', textAlign: 'center', margin: '10px 0' }}>
          {error}
        </p>
      )}

      {/* Username */}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      {/* Full Name */}
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="user Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          name="passwords"
          value={formData.passwords}
          onChange={handleChange}
          required
        />
      </div>

  

    
      

      {/* Submit Button */}
      <input
        type="submit"
        className="btn"
        value={isLoading ? 'Đang xử lý...' : 'Sign up'}
        disabled={isLoading}
      />

      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="#" className="social-icon">
          <FaTwitter />
        </a>
        <a href="#" className="social-icon">
          <FaGoogle />
        </a>
        <a href="#" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </form>
  );
};

export default SignUp;