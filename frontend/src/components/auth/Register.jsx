import { Link } from "react-router-dom";
import { RegisterUserForm } from "./RegesterUserForm";

const Register = () => {
	return (
		<div className='  flex justify-center items-center flex-col w-full h-screen px-5 '>
            <div className="container max-w-[476px] max-h-[538px] ">
			<div className='top'>
				<h1 className="text-center text-3xl md:text-4xl font-bold text-primary">Create Account</h1>
				<p className=" text-center text-base mt-2 mb-5 text-muted-foreground">Please sign up to book appointment</p>
			</div>
			<div className='form'>
                <RegisterUserForm/>
            </div>
			<div className='bottom text-left  mt-4 flex gap-2 text-sm md:text-base'>
                <p className=" text-muted-foreground">            Already have an account? 
                </p>
           <Link to={'/auth/login'} className=" text-primary"> Login here</Link> 
            </div>
            </div>
		</div>
	);
};

export default Register;
