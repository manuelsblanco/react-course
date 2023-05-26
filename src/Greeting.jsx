export  function Greeting(props) {    
    console.log(props);
    return <h1>{props.title}</h1>;    
  }

  export function UserCard(props) {
    const { name, amount, married, address } = props;
  
    return (
      <div>
        <h1>{name}</h1>
        <p>Money: ${amount}</p>
        <p>{married ? 'married' : 'single'}</p>
        <ul>
          <li>Address: {address.street}</li>
          <li>City: {address.city}</li>
        </ul>
      </div>
    );
  }
  