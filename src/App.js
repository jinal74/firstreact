import './App.css';

// function App() {
//   let arr =[10,20,30,40,50]
//   let arr1 =[...arr]
//   let arr2 =[100,200,300,...arr1,400,500]
//   return (
//     arr2
//     .map((a,i) => {
//       return (
//         <div key={i}>
//         <p>{a}</p>
//         </div>
//       )
//     })

//   );
// }
function App() {
  let obj1 = {
    id : 101 , 
    name:"RADHIKA"
  }

  let obj2= {...obj1}

  let obj3 = {
    "salary" : 50000, 
    ...obj2,
    "city":"surat"
  }
  let obj4 = {
    "salary" : 50000, 
    "age" : 25,
    ...obj2,
    "city":"surat"
  }
    return(
      <>
        {
        <div>
          <p>{obj3.id}</p>
          <p>{obj3.name}</p>
          <p>{obj3.city}</p>
          <p>{obj3.salary}</p>
          <p>{obj3.sal}</p>
        </div>
      }
      </>
    );
}

export default App; 