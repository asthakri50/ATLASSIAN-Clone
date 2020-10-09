import React from 'react';
import web1 from "../src/images/jsw-header-illustrations---v3.png"
import web2 from "../src/images/Image 2.png"
import web3 from "../src/images/plan-track image3.png"
const Body = () => {
return (
  <> 
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
     <div className='row'>
         <div className="col-10 mx-auto">
           <div className="row">
           <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
             <h1>The #1 software development tool used by agile teams</h1>
             <div className="mt-9">
               <a href="" className="btn-get started ">Get it free</a>
             </div>
           </div>
           <div className="col-lg-8 order-1 order-lg-2 header-img">
           <img  src={web1} className="img-fluid animated" alt="home img" />
         </div>
         </div>
     </div>
 </div>
 </div>
    </section>
    <section id="message">
    <div className="container-fluid nav_bg">
     <div className='row3'>
         <div className="col-10 mx-auto">
         <div className="col-md-10 pt-5 pt-lg-0 order-2 order-lg-2 display-flex align-content-center">
           <h1>The best software team ships early and often.</h1>
           <p className="md=1 pt=7">Jira Software is built for every member of your software team to plan,
track, and release great software.</p>
         </div>

         </div>
      </div>

 </div>

    </section>

    <section id="Image2" className="d-flex align-items-center">
           <div className="row">
           <div className="col-lg-6 mx-4 order-1 order-lg-2 Image2">
           <img  src={web2} className="img-fluid animated" alt="Image 2" />
         </div>
           <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
             <h3>Plan</h3>
             <p className="md-5">Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
             <h3>Track</h3>
             <p className="md-5">Prioritize and discuss your team’s work in full context with complete visibility.</p>
           </div>
           </div>
    </section>

    <section id="Image3" className="d-flex align-items-center ">
    <div className='row'>
         <div className="col-10 mx-auto">
           <div className="row">
           <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
             <h3>Release</h3>
             <p className="md-5">Ship with confidence and sanity knowing the information you have is always up-to-date.</p>
             <h3>Report</h3>
             <p className="md-5">Improve team performance based on real-time, visual data that your team can put to use.</p>
           </div>
           <div className="col-lg-8 order-1 order-lg-2 Image3">
           <img  src={web3} className="img-fluid animated" alt="Image 3" />
         </div>
         </div>
     </div>
 </div>
    </section>

    <section id="last" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
     <div className='row'>
         <div className="col-10 mx-auto">
             <div className="row">
         <div className=" col-md-5 pt-5 pt-lg-0 order-2 order-lg-2 display-flex align-content-center">
           <h1>Choose a workflow, or make your own</h1>
           </div>
           <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-2">
               <p>Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works.</p>
           </div>
           </div>
    
          
           </div>


         </div>
         </div>
    


    </section>
   
  </>

 ); 


};

export default Body;