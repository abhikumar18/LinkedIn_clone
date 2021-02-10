import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();
         auth.signInWithEmailAndPassword(email,password).then(
            (userAuth) => {
            dispatch(
                login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
            })
            );
        }).catch(error => alert(error));
    };
    const register = () => {
        if(!name) {
            return alert('Please Enter The Full Name')
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoUrl:profilePic,
            })
            .then(() => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                })
                );
            });
        })
        .catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img src="data:image/png;base64,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" alt="" />
            
            <form>
                <input 
                value={name} 
                onChange={(e )=> setName(e.target.value)} 
                placeholder="Full Name(Required If Registering)" 
                type="text" 
                />

                <input 
                 value={profilePic}
                 onChange={(e) => setProfilePic(e.target.value)}
                 placeholder ="Profile pic URL(optional)"
                 type="text"
                  />

                <input 
                value={email}
                onChange = {(e) => setEmail(e.target.value)} 
                placeholder="Email"
                type="email"
                 />

                <input
                 value={password} 
                 onChange = {(e) => setPassword (e.target.value)} 
                 placeholder="Password"
                 type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
          <p>Not a member?{' '}
          <span className="login__register" onClick={register}>Register Now</span>
          </p>
        </div>
    );
}

export default Login
