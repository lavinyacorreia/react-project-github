import './App.css';
import GithubImage from './github-mark.png';
import { useState } from 'react';

function App() {
const [search, setSearch] = useState('');
const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
  }

  console.log(userData);

  const handleChange = (event) => {
    
    setSearch(event.target.value);
  }
 
  return (
   <div className="container text-center">
     <h1 className="py-5 text-uppercase">Github profile</h1>
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <div className="input-group">
           <input type="text"
           className="form-control"
           required
           value={search}
           onChange={handleChange}
           />
           <span className="input-group-btn">
             <button 
             type="submit" 
             className="btn btn-success">
               Search
             </button>
           </span>
         </div>
       </div>
     </form>
     <div className="py-5">
        <img src={GithubImage} 
        className="responsive rounded-circle"
        alt=""
        height="200px" 
        />
        <h1 className="pt-5">
          <a href="https://github.com/lavinyacorreia" target="_new">
            lavinyacorreia
          </a>
        </h1>
        <h3>Santo André</h3>
        <p>
          <a href="https://devsuperior.com.br/evento-sds3-org" target="_new" className="text-info">
            https://devsuperior.com.br/evento-sds3-org
          </a>
        </p>
     </div>
   </div>
  );
}

export default App;
