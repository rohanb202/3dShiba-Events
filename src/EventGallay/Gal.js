import Main from './main'
import Modal from './modal'
import {useState} from 'react';

const Gal = () => { 
  const [state, setState] = useState(false);
  const[main,setMain]=useState(null);
  
  const dataModal=(data)=>{
    setState(data.state);    
    setMain(data.main);
    //console.log(mainh);
  }
  /*useEffect(() => {
    if(!state){
      window.scrollTo(0,10);
      //console.log('hi')
    }
    
  }, [state]);*/
  
  
  
  
  return (
    <div className=""  data-scroll-container>
      
    {state && <Modal onState={setState} main={main}  />}
    <Main onData={dataModal}/>
    
    
      
    </div>
  )
}

export default Gal;