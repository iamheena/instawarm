
import './App.css';
import Post from './Post';
import image1 from './images/1.jpeg'
import images from './images/react.png'
import images3 from './images/2.png'
import React,{useState,useEffect} from 'react'
import db from './Firebase'
import {onSnapshot,getDocs,query,collection} from 'firebase/firestore'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor:theme.palette.background.paper,
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes=useStyles()
  const [modalStyle]=useState(getModalStyle())
  const [post,setPost]=useState([])
  const [open, setOpen]=useState(false)
  useEffect(async()=>{
   
    const collectionque= collection(db,"post") 
    const q = query(collectionque);
    
    const documentsnap=await getDocs(q)
   
    console.log("documentsnap", documentsnap);

    onSnapshot(q,(snapshot) =>{        
      let docData=[]
      console.log("snapshot", snapshot.docs );
        snapshot.docs.map((doc) =>{
          let info1=doc.data()
          info1.id=doc.id  
          docData.push(info1)         
        })        
       setPost(docData)
       console.log(docData);
      
      }) 

    

  },[])
  return (
    <div className="App">
    
     <Modal open={open} onClose={()=>setOpen(false)}>
     <div style={modalStyle} className={classes.paper}>
      <h2>i am  modal</h2>
     
    </div>
     </Modal>
      <div className="app_header">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt=""className="app_imagehader" />
      </div>
      {/* <Post username="clevercluq" caption="wow it works" imageUrl={images}/> */}
      {/* <Post username="heena" caption="wow it works" imageUrl={images}/> */}
      {post.map((d)=>(
        <Post username={d.username} caption={d.caption} imageUrl={d.imageUrl} key={d.id}/>

      ))}
    </div>
  );
}

export default App;
