import React from 'react'
//import { useNavigate } from 'react-router-dom';
const Home = () => {
    // const navigate = useNavigate();
    
    // localStorage.clear();
    // navigate('/home');
        
  return (
    <React.Fragment>
    <div className='text-center mt-5 m-4'>
    
    <img className='img-fluid' alt="code" width="400" src="https://i.pinimg.com/originals/54/e3/7d/54e37d8074ebcde1d96c77d7b2a7f310.gif"/>
    <h1 className='mt-5 m-4' >Hi š, I'm Ravishankar Kushwah</h1>

    </div>

    <div className='text-center mt-5 m-4'>
    <p>- š­ Iām currently working on **Recruitment Portal**</p>
    <p>- š± Iām currently learning **React Js**</p>
    <p>- š¬ Ask me about **Frontend, MERN Developer**</p>
    <p>- š« How to reach me **ravishankarkushwah117@gmail.com**</p>
</div>
</React.Fragment>
  )
}

export default Home