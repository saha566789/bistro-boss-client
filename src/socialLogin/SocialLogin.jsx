import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const Navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                Navigate('/');
            })
        })
    }

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;