import { useState,useEffect } from 'react'
import './App.css'
import './Usercar.css'
// import Card from './assets/Usercar'
import Card from './Usercar'

// function App() {
//   const [count, setCount] = useState(0);
 

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card-body">
//           <h1>Counter App </h1>
//             <h2 >{count}</h2>
//             <button className='button' onClick={() => setCount(count + 1)}>Increment</button>
//             <button className='button' onClick={() => setCount(count - 1)}>Decrement</button>
//             <button className='button' onClick={() => setCount(0)}>Reset</button>
//         </div>
//       </div>
//     </div>
    
//   )
// }
function App(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>{
      setUsers(data);
      setLoading(false);
    })
    .catch(error=>{
      console.error('Error fetching data:',error);
      setLoading(false);
    });
  }
    
  ,[]);

  return(
    <div className='p-6  '>
      <h1 className="text-center font-bold text-2xl">User List</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading users...</p>
      ) : (
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-8 '>
            {users.map(user => (
          <Card
            key={user.id}
            Name={`Name: ${user.name}`}
            Foi={`Skills: Web Development`}
            About={`Email: ${user.email} | Company: ${user.company.name}`}
          />
            ))}
        </div>
        
      
      )}
    </div>
  );
}

  
//   return(
//     <div className='usercard'>
//      <Card
//         Name='Name:David Dahal'
//         Foi='Skills:Javascript, Pyhton'
//         About='Im an IT student with a passion for technology and problem-solving. Im constantly exploring new ideas, learning new skills, and striving to create solutions that make a difference in the digital world. Always curious and eager to grow!'
//      />
        

      
//     </div>
//   )
// }

export default App
