import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("email", username);
      navigate("/admin/");
    } else if (username === "teacher" && password === "teacher") {
      localStorage.setItem("email", username);
      navigate("/teacher/");
    } else {
      alert("Invalid credentials!");
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

        <button onClick={handleLogin} id="login">
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}

export default Login;
