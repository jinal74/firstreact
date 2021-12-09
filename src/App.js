import logo from './logo.svg';
import './App.css';

function App() {
  const emp =[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  const totalExp = 
    emp.filter((e,i) => e.status === true)
    .map((e , i) => e.salary + e.bonus)
    .reduce((acc , e) => acc + e , 0)

  return (
    <>
    <table>
      <tr>
        <th>sr. no</th>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>bonus</th>
        <th>status</th>
        <th>totel exp</th>
      </tr>

      {
        emp.map((e,i) => {
          return(
            <tr>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.salary}</td>
              <td>{e.bonus}</td>
              <td>{e.status ? "true" : "false"}</td>
              <td rowspan="5">{i === 0 ? totalExp : null}</td>
            </tr>
          )
        })
      }
    </table>
    </>

  );
}

export default App;