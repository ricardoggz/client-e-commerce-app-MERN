import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import { UserProvider } from "./context/userContext";
import { Layout } from "./components/layout/Layout";

const App = () => {
  return (
    <UserProvider>
      <Layout>
        <NavBar />
        <Footer />
      </Layout>
    </UserProvider>
  );
};

export default App;
