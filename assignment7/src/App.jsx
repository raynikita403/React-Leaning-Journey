import './App.css'
import { HandleInputWithState } from './component/Assignment1';
import { Cards } from './component/Props';
import { PassStateAsProps } from './component/Assignment2';
import { PropsWithDifferentDataTypes } from './component/Assignment3';

function App() {
  return (
    <>
     {/*  <HandleInputWithState /> */}

      {/* 
      <Cards 
        Name="Nikita" 
        EmployeeId="A189" 
        Designation="Tech Lead" 
        Skills={["Java", "SpringBoot", "React JS"]} 
      />

      <Cards 
        Name="Nupur" 
        EmployeeId="A190" 
        Designation="Manager" 
        Skills={["Motivate", "Multitasking"]}
      >
        <div className='bg-danger text-light p-2 mt-2 rounded'>
          Hello World
        </div>
      </Cards>
      */}
      
      {/*Assignment 2  }
      <PassStateAsProps/>
        */}

        {/*Assignment 3  */}
       <PropsWithDifferentDataTypes
        Name="John Doe"
        Age={28}
        IsActive={true}
        Skills={["React", "Node.js", "MongoDB"]}
        Details={{ department: "Development", position: "Full Stack Engineer" }}
      />
    </>
  );
}

export default App;
