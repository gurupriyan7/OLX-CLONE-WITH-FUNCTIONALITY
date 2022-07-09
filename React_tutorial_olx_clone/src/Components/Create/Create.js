import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { FirebaseContext,AuthContext } from '../../store/Context';
const Create = () => {
  const {firebase} =useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history= useHistory()
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)
  const date= new Date()
  const handleSubmit =()=>{
    console.log('submitt okkk');
    firebase.storage().ref(`/image/${image.name}`).put(image).then((snap)=>{
                  console.log('named');
                 return snap.ref.getDownloadURL().then((url)=>{
                    console.log("url url");
                    console.log(url);
                    firebase.firestore().collection('products').add({
                      name,
                      category,
                      price,
                      url,
                      userId:user.uid,
                      createdAt:date.toDateString()
                    })
                    history.push('/')
                  }).catch((err)=>{
                    console.log(err);
                  })
                }).catch((err)=>{
                  console.log(err);
                })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />
          
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
         
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
