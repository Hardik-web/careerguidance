import React from 'react';
import logo from '../images/img4.jpg';
import logo1 from '../images/img5.jpg';
import logo2 from '../images/img6.png';

const Home = () => {
    return (
        <div className="main">
           

              <div className="maindiv">

              </div>
    
              <div className="home-page">
                  <div className="home-div">
                      <p className="pt-5">WELCOME</p>
                      <h1>We Are The Career Builder</h1>
                  </div>
              
              </div>
              <section className="secRight">
                  <div className="paras">
                  <p className="sectionTag text-big">Interested in Science</p>
                  <p className="sectionSubTag text-small">With the advancement of technology and industries, there has been an exponential growth in the career options available for Science stream students. Not just limited to Engineering or Medical Science courses, one can explore a wide range of degree courses after 12th Science. By pursuing the Science stream, you can either opt for Biology, Physics, and Chemistry [BiPC subjects] and pave a way for starting a career in the medical field or you can study Maths, Physics, and Chemistry [MPC subjects] in order to pursue courses apart from Medical Science like Engineering, Bachelor of Arts, Bachelor of Science, Architecture, Robotics, etc. Now that you are familiar with the subjects, let us explore the different career options in the Science stream!</p>
                  </div>
                  <div className="thumbnail">
                      <img src={logo} className="imgFluid"/>
                  </div>
              </section>
              <section className="secleft">
                  <div className="paras">
                  <p className="sectionTag text-big">Interested in Commerce</p>
                  <p className="sectionSubTag text-small">Commerce is a vast field that encompasses various aspects of business ranging from Finance, Human Resource Management, and Taxation to Accounting, Law, and Auditing. The undergraduate programs equip you with the basic fundamentals and the benchmark concepts. Through postgraduate courses, you can broaden your horizon by specialising in a particular sub-field. However, with a wide range of programs available, “What to study after 12th?” in Commerce stream is a common query that students have. So, to bring more clarity, follow this website that will shed light on some of the most popular courses after 12th Commerce which you can pursue.</p>
                  </div>
                  <div className="thumbnail">
                      <img src={logo1} className="imgFluid"/>
                  </div>
              </section>
              <section className="secbottom">
                  <div className="paras">
                  <p className="sectionTag text-big">Interested in Arts</p>
                  <p className="sectionSubTag text-small">What are the subjects in Arts Stream? The major subjects in Arts Stream include Economics, History, Political Science, Geography, Sociology, Philosophy, Psychology, Computer Science, Hindi, Regional language, etc. From Law and Literary Studies to Journalism and Hotel Management, careers after Arts stream are copious. Moreover, the stream of Arts and Humanities offers a greater variety of subjects than the Science and Commerce streams. Want to know about which job is best after 12th Arts? follow this website to find all the arts stream subjects, courses, jobs and salary in 2021.</p>
                  </div>
                  <div className="thumbnail">
                      <img src={logo2} className="imgFluid"/>
                  </div>
              </section>



       
        </div>
    )
}

export default Home
