import React from "react";
import useUser from "../hooks/useUser";
import { useHistory, Redirect } from "react-router";

const LogIn = () => {
    const {user, logIn } = useUser();
    const history = useHistory();
    const handleLogIn = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await logIn(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        };
    };
    
    if(user) {
        return <Redirect to="/" />;
    }
     
    return (

        <section>
            

<h2 >Login</h2>
<p >Please enter your login and password!</p>
<form onSubmit={handleLogIn}>
<div >
  <input type="email" id="email" className="form-control form-control-lg" />
  <label  htmlFor="email">Email</label>
</div>

<div >
  <input type="password" id="password" className="form-control form-control-lg" />
  <label  htmlFor="password">Password</label>
</div>
<button type="submit">Login</button>
</form>

<div>
<p>Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a></p>
</div>

        </section>
//         <section class="vh-100 gradient-custom">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//         <div class="card bg-dark text-white">
//           <div class="card-body p-5 text-center">

//             <div class="mb-md-5 mt-md-4 pb-5">

//               <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
//               <p class="text-white-50 mb-5">Please enter your login and password!</p>
//             <form>
//               <div class="form-outline form-white mb-4">
//                 <input type="email" id="typeEmailX" class="form-control form-control-lg" />
//                 <label class="form-label" for="typeEmailX">Email</label>
//               </div>

//               <div class="form-outline form-white mb-4">
//                 <input type="password" id="typePasswordX" class="form-control form-control-lg" />
//                 <label class="form-label" for="typePasswordX">Password</label>
//               </div>
//               </form>
//               <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

//               <div class="d-flex justify-content-center text-center mt-4 pt-1">
//                 <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
//                 <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
//                 <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
//               </div>

//             </div>

//             <div>
//               <p class="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a></p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
        
    )


}

export default LogIn;