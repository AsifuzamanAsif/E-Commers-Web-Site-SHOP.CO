import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const handelsubmit = () => {
    if (email == "") {
      toast.error("Please Enter Your Email");
    } else if (password == "") {
      toast.error("Please Enter Your Password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (userCredential.user.emailVerified == false) {
            toast.error("Please Verify Your Email");
          }else{
            toast.success("Signup succesfull")
            setTimeout(() => {
              navigate("/home");
            }, 2000);
          }
          console.log(user);
        })
        .catch((error) => {
          if (error.code == "auth/too-many-requests") {
            toast.error("Your Account Is Temporary Desibale");
          } else if (error.code == "auth/invalid-credential") {
            toast.error("Please Enter The Current Email Address");
          } else {
            toast.error("Error:" + error.code);
          }
          console.log(error.code);
          console.log(error.message);
        });
    }
  };

  return (
    <div className="main-container bg-[#212121]">
      <ToastContainer position="top-center" theme="dark" />
      <div className="form-container">
        <div className="content">
          <span className="title-text">Login</span>
          <div className="login-form">
            <div className="field">
              <input
                className=""
                required=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
              <label>Email</label>
            </div>
            <div className="field">
              <input
                required=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
              <label>Password</label>
            </div>
            <div className="action">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a className="forget" href="">
                Forget password ?
              </a>
            </div>
            <button onClick={handelsubmit} className="login">
              Login
            </button>
            <div className="signup">
              Don't have an Account ?<Link to={"/Singup"}> Sing up </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
