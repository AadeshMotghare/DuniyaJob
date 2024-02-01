// <<<<<<< HEAD
// import Check from "./components/check";

import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/_auth/AuthLayout";
import RootLayout from "./pages/_root/RootLayout";
import EmployeeSignup from "./pages/_auth/forms/EmployeeSignup";
import EmployeeLogin from "./pages/_auth/forms/EmployeeLogin";
import EmployerSignup from "./pages/_auth/forms/EmployerSignup";
import EmployerLogin from "./pages/_auth/forms/EmployerLogin";
import LandingPage from "./pages/_auth/forms/LandingPage";
import Home from "./pages/_root/innerpages/Home";



function App() {
  return (
    <main className="flex flex-1 h-screen">
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>

        {/* <Route path="/Employee sign-up" element={<EmployeeSignup />} /> */}
        <Route path="/Duniya" element={<LandingPage />} />

      {/* Employee ........... */}
        <Route path="/Employee-sign-up" element={<EmployeeSignup />} />
        <Route path="/Employee-login" element={<EmployeeLogin />} />
      {/* Employer ............ */}
        <Route path="/Employer-sign-up" element={<EmployerSignup />} />
        <Route path="/Employer-login" element={<EmployerLogin />} />

      </Route>

      {/* private routes */}
      <Route element={<RootLayout />}>
{/* 
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/profile/:id/*" element={<Profile />} />
        <Route path="/update-profile/:id" element={<UpdateProfile />} />
        <Route path="/chat/:id/" element={<Chat />} />
        <Route path="/chats/:id/" element={<ChatSection />}/> */}
        <Route index element={<Home/>} />

      </Route>
    </Routes>

    {/* <Toaster /> */}


  </main>

// >>>>>>> 39dcba460153505831c5c3cb5a25c1ee308748e0
  );
}

export default App;
