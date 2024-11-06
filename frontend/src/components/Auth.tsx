import { signupInput } from "@parikshit45/medium-blog";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { GoPencil } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const [postInputs, setPostInputs] = useState<signupInput>({
        email: "",
        username: "",
        password: ""
    })
    const navigate = useNavigate();

    const callApi = async () => {
        
        try {
            const response = await axios.post(`${BASE_URL}/user/${type === 'signin' ? 'signin' : 'signup'}`, postInputs)
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate('/')
        } catch (error : any) {
            console.log("Error:", error)
            const errMsg = error.response.data;
            alert(errMsg)
        }
    }

    const RedirectFunc = () => {
        console.log("first")
        navigate(type === 'signup' ? '/signin' : '/signup')
    }
    return (
        <div className="flex justify-center h-screen flex-col bg-purple-50 items-center">
            <div className="flex justify-center w-full">
                <div className={`${type==='signin' ? 'md:w-1/4' : 'md:w-1/2' }  bg-white border rounded-md p-10 shadow-md`}>
                    <div className="text-4xl flex justify-center items-center mb-2 text-purple-700">
                        <GoPencil />
                    </div>
                    <div className="text-lg font-bold text-center">
                        Join Our Writing Community
                    </div>
                    {type === 'signup' && <LabelledInput label="Username" placeholder="Enter your username" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value
                        }))
                    }} />}
                    <LabelledInput label="Email" placeholder="you@example.com" type="email" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput label="Password" placeholder="" type="password" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />

                    <button className="w-full bg-gray-800 text-white font-semibold mt-6 p-2 rounded-md" onClick={callApi}>{type === 'signin' ? "Sign in" : "Sign up"}</button>
                    <div className="text-center mt-2 text-md font-semibold">
                        {type === 'signin' ? "Don't have an account?" : "Already have an account?"} <span onClick={RedirectFunc} className="text-purple-700 cursor-pointer">{type === 'signin' ? "Sign up" : "Log in"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface labelledInputType {
    label: string,
    placeholder: string,
    type?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({ label, placeholder, type, onChange }: labelledInputType) => {
    return <div className=" flex flex-col mt-3">
        <label className="text-md mb-1 font-semibold">{label}</label>
        <input type={type || "text"} className=" border-2 rounded-md px-3 py-1 mt-1 placeholder:text-sm" placeholder={placeholder} onChange={onChange} />
    </div>

}

export default Auth