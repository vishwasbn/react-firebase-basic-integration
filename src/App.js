
import { db } from './Firebase/Config'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>
        <button onClick={() => {

          // Create new Auth
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, 'spartan@gmail.com', '12345678')
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log('User Created '+user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });


          db.collection('products').get().then(item => {
            item.forEach((item) => {
              console.log(item.data(),item.id)
            })
          })
        }}>Load Data</button>
      </div>
      <div>
        <button onClick={() => {
          db.collection('products').add({
            name:'Smart LED',
            type:'TV',
            price:35000
          })
        }}>Add Data</button>
      </div>
      <div>
        <button onClick={()=>{
          db.collection('products').doc('r9t99MZmfTtcui2BPMnZ').delete().then((response)=>{
            console.log('Deleted')
            console.log(JSON.stringify(response));
          })
        }}>Delete Doc</button>
      </div>
      <div>
        <button onClick={()=>{
          db.collection('products').doc('bdavowxtZI9gDz5lpfYU').set({
            name:`Thomson 55" inch OLED`,
            type:'TV',
            price: 45000
          })
        }}>Update</button>
      </div>
      <div>
        <button onClick={()=>{
          db.collection('products').doc('bdavowxtZI9gDz5lpfYU').set({
            name:'Smart LED',
            type:'TV',
            price: 35000
          })
        }}>Undo Update</button>
      </div>
    </div>
  );
}

export default App;
