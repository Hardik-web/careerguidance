import React,{useEffect} from 'react';
import {useHistory,NavLink} from 'react-router-dom'

const About = () => {

    const history = useHistory();
    const  callAboutPage = async ()=>{
      try{
       const res = await fetch('/about',{
           method:'GET',
           headers:{
               Accept:"application/json",
               "Content-Type":"application/json"
           },
           credentials:"include"
       });
       
       const data = await res.json();

       if(!res===200){
           const error = new Error(res.error);
           throw error;
       }

      }catch(err){
      console.log(err);
      history.push('/login')
          }
    }

useEffect(() => {
   callAboutPage();
}, [])

    return (
        <>
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tab justify-content-center" role="tablist">
              <li className="nav-item">
                <NavLink to="/SciencePage" className="nav-link" >
                  <h3>Science</h3>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/CommercePage" className="nav-link ">
                  <h3>Commerce</h3>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ArtsPage" className="nav-link ">
                  <h3>Arts</h3>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
  
  
      </>
    )
}

export default About
