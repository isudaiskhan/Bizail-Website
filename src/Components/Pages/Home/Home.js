import React from 'react'
import Faqs from '../../Faqs/Faqs';
import Hero from '../../Hero/Hero';
import Steps from '../../Steps/Steps';
import Layout from '../../Layout/Layout';
import Services from '../../Services/Services';
import SearchExposure from '../../SeacrhExposure/SearchExposure';
import ScrollButton from '../../ScrollButton/ScrollButton';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <>

    <Layout>
    <Hero />
    <Steps />
    <SearchExposure />
    <Services />
    <Faqs />
    <ScrollButton />
    <Footer />
    </Layout>
      
    </>
  )
}

export default Home