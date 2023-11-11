import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    useEffect(() => {
        // it is a event listener whenever user auth status changes -> login / logout 
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) { // when user sign in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
           
            } else { // when user sign out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // unsubscribe when component will unmounts
        return () => unsubscribe();
    },[]);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
        })
        .catch((error) => {

        })
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" alt="netflix logo" src={LOGO} />
            { user && (
                    <div className="flex p-2">
                        <img className="w-12 h-12" alt="user icon" src={user.photoURL} />
                        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
                    </div>
                )
            }    
        </div> 
    )
}

export default Header;