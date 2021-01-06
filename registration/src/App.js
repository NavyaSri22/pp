
import './App.css';
import AssBulb from './component/Conditional/AssBulb';
import bulbon from './images/bulbon.jpg'
import bulboff from './images/bulboff.jpg'
import Welcome from './component/Conditional/Welcome';
import Welcome1 from './component/Conditional/Welcome1';
import Wel from './component/Conditional/Wel';
import StudentsList from './component/DemoRender/StudentsList';
//import CelFareh from './component/convertor/CelFareh';
//import FtoCConvertor from './component/convertor/FtoCConvertor';
// import DemoCounter from './component/EventHandling/DemoCounter';


//import RegisterForm from './component/RegisterForm';
// import Demofun from './component/Demfun'
// import DemofunArr from './component/DemofunArr';
// import DemofunExp from './component/DemofunExp';
// import {DemofunArr1} from './component/DemofunArr1';
// import DemoClass from './component/DemoCLass';
// import StudentObj from './component/StudentObj';
//import RegisterForm from './component/RegisterForm';
// import Counter from './component/StateDemo/Counter';
// import sasi from './images/sasi.jpg'
// import sasi1 from './images/sasi1.jpg'



function App() {
  return (
    <div className="App">
      {/* <Demofun/>
      <DemofunExp/>
      <DemofunArr/>
      <DemofunArr1/>
      <DemoClass name="Navya" htno="557"/>
      <DemoClass name="Sri" htno="17k557"/>
      <StudentObj name="NavyaSri" htno="57"/>
      <StudentObj name="NavyaSri" htno="557"/>  */}
      {/*<RegisterForm/> */}
      
      {/* <Counter name="Navya" postedBy="NavyaSri" myImage={sasi}/> <br></br>
  
      <Counter name="Navya" postedBy="NavyaSri" myImage={sasi1} /> <br></br> <br></br> */}

      {/* <DemoCounter/> */}
      {/* <CelFareh/> */}
      {/* <FtoCConvertor/> */}
      <StudentsList/>
      <Welcome/> 
      <Welcome1/>
      <Wel/> 

      <AssBulb myimg1={bulbon} myimg={bulboff}/>

    
       
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
