import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

    const handleGptSearch = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView());
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
        })
        .catch((error) => {

        })
    }

    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" alt="netflix logo" src={LOGO} />
            { user && (
                    <div className="flex p-2">
                        {
                            showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange}>
                                {
                                    SUPPORTED_LANGUAGES.map((lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> ))
                                }
                            </select>)
                        }
                        <button className="py-2 px-4 mx-4 my-2 rounded-lg bg-purple-800 text-white" onClick={handleGptSearch}>{showGptSearch ? "Home Page" : "GPT Search" }</button>
                        <img className="w-12 h-12" alt="user icon" src={user.photoURL} />
                        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
                    </div>
                )
            }    
        </div> 
    )
}

export default Header;