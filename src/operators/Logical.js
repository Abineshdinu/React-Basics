import React,{useState} from "react";

function Logical(){
    
    const [username, setUsername] = useState('');

    return (
      <div>
        <p>{username || 'Guest'}</p>
  
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
    );
  };

export default Logical
