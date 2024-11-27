import { Link } from "react-router-dom";
import { LoginUserForm } from "./LoginUserForm";

const Login = () => {
	return (
		<div className='  flex justify-center items-center flex-col w-full h-screen px-5 '>
			<div className='container max-w-[476px] max-h-[538px] '>
				<h1 className="text-center text-3xl md:text-4xl font-bold text-primary">Login Please</h1>
				<p className="text-center text-base mt-2 mb-5 text-muted-foreground">Please login to book appointment</p>
				<LoginUserForm />

				<div className='  mt-4  bottom flex text-left gap-2 text-sm md:text-base '>
					<p className='text-muted-foreground'>
						Don't have an account?
					</p>{" "}
					<Link to={"/auth/register"} className=' text-primary'>
						Register here{" "}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
