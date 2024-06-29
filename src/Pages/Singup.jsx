import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [terms, setTerms] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const handelsubmit = () => {
    if (email == "") {
      toast.error("Email Is Required");
    } else if (password == "") {
      toast.error("Please Enter The Password");
    } else if (confirmpass == "") {
      toast.error("Please Enter The Confirm Password");
    } else if (terms == "") {
      toast.error("Please I agree to the Terms and Conditions");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Signed up Successfull")
          setTimeout(()=>{
          navigate("/login")
          },2000)
          // Signed up
        })
        .catch((error) => {
          if (error.code == "auth/invalid-email") {
            toast.error("Email Invalid");
          } else if (error.code == "auth/weak-password") {
            toast.error("Password Should be at least 6 characters");
          } else if (error.code == "auth/email-already-in-use") {
            toast.error("Your Email All Ready Use");
          }else{
            toast.error("Error:" + error.code)
          }
          console.log(error.code);
          console.log(error.message);
        });
    }
  };

  return (
    <div className="main-container">
      <ToastContainer position="top-center" theme="dark" />
      <div className="form-wrapper">
        <div className="primary-section font-primary">
          <div className="about-section">
            <p className="greet">Welcome to</p>
            <div className="logo flex justify-center text-3xl">
              <p>SHOP.CO</p>
            </div>
            <p className="about">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            <div className="pages-link">
              <a href="#">Privacy Policy</a>|<a href="#">About Us</a>
            </div>
          </div>
        </div>
        <div className="secondary-section font-primary">
          <h2>Create Your Account</h2>
          <div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email address"
                required=""
                autoComplete="off"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                id="password"
                placeholder="Create new password"
              />
            </div>
            <div className="input-field">
              <label htmlFor="confirm-pass">Confirm Password</label>
              <input
                onChange={(e) => setConfirmpass(e.target.value)}
                value={confirmpass}
                name="password"
                type="password"
                id="confirm-pass"
                placeholder="Re-enter your password"
              />
            </div>
            <div className="agree-sec">
              <input
                type="checkbox"
                id="terms"
                onChange={(e) => setTerms(e.target.checked)}
                value={terms}
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="#" target="_blank">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div className="button-sec">
              <button
                onClick={handelsubmit}
                type="submit"
                className="signup-btn">
                Sign up
              </button>
              <Link className="signin-btn flex justify-center" to={"/Login"}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
