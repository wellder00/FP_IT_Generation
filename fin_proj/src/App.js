import './App.scss';
import {
  Header,
  ModerInerior,
  ScrollProgressBar,
  WhatWeDo,
  AboutUs,
  SeccessfulyDone,
  Testimonials,
  Blog,
  Form,
  Footer,
  Timer,
  Loader,
} from './components';

function App() {
  return (
    <>
      <Loader />
      <Timer />
      <Header />
      <ScrollProgressBar />
      <ModerInerior />
      <WhatWeDo />
      <AboutUs />
      <SeccessfulyDone />
      <Testimonials />
      <Blog />
      <Form />
      <Footer />
    </>
  );
}

export default App;
