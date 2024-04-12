import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Remark from "../Components/Remark";
import Heading from "../Components/Heading";


const Home = () => {
  return (
    <div className="body">
      <>
        <Header />
        <Remark/>
        <Heading details={{h1:"We make the relocation of your international employees effortless and straightforward allowing your company to focus on what matters most – success.", p:"Moving to a new country is a significant change in a person's life. Whether someone is moving alone or with their family, several factors need to be considered. Is your employee relocating to Finland? We assist your employee in settling in Finland and smoothly integrating into Finnish life and work. When hiring an international employee, you can rest assured. We take care of your employee's relocation to Finland on your behalf. You can recruit people from anywhere in the world, and we provide support and guidance to the employee because we understand that settling in a new country and starting work in a new environment is a massive change in a person's and family's life. We offer various relocation packages and can customize our services to meet your specific needs"}}/>
      </>
      <Footer />
    </div>
  );
};

export default Home;
