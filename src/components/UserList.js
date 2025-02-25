const UserList=(props)=>{
     console.log(props);
     
     return (
        <div>
            <h1>Name:{props.data.name}</h1>
            <h2>Email:{props.data.email}</h2>
            <h2>Age:{props.data.age}</h2>
            
        </div>
     )
}

export default UserList;