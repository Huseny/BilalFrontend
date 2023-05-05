import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import LoginRequest from "../utils/login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== null) {
      navigate(`/${role}/`);
    }
  }, [navigate]);

  const handleLogin = async () => {
    let result = await LoginRequest(username, password);
    if (result) {
      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);
      localStorage.setItem("role", result.role);
      navigate(`/${result.role}/`);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="m-auto login-form">
        <h3>أدخل بيانات الاعتماد الخاصة بك لتسجيل الدخول</h3>

        <label htmlFor="username">اسم المستخدم</label>
        <input
          type="text"
          placeholder="اسم المستخدم"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">كلمة المرور</label>
        <input
          type="password"
          placeholder="كلمة المرور"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {showError && (
          <div>
            <p className="text-warning">
              something went wrong. Please try again
            </p>
          </div>
        )}

        <button
          onClick={handleLogin}
          className={!showError && "mt-5"}
          id="login"
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}

export default Login;
