import Counter from "./components/Counter";
import UserList from "./components/UserList";

const App = () => {
  const user1 ={
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    phone: "123-456-7890"
  }
  const user2 ={
    name: "Jane Smith",
    age: 28,
    email: "janesmith@example.com",
    phone: "987-654-3210"
  }
  return (
    <div>
      {/* <Counter /> */}
    <UserList data ={user1} />
    <UserList data ={user2} />


    </div>
  );
};
export default App;
