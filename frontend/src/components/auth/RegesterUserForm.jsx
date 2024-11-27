"use client";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUserSchema } from "../../lib/validationSchema";
import { useState } from "react";

export function RegisterUserForm() {
	const [passVisible, setPassVisible] = useState(false);
	const form = useForm({
		resolver: zodResolver(registerUserSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function formSubmit(values) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.

		console.log("I am clicked");
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(formSubmit)}
				className='space-y-8'
			>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input placeholder='name' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='example@gmail.com'
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<div className=' flex justify-center items-center relative'>
									<Input
										type={passVisible ? "text" : "password"}
										autoComplete='new-password'
										placeholder='password'
										{...field}
									/>
									<div
										className=' absolute right-4'
										onClick={() => {
											passVisible
												? setPassVisible(false)
												: setPassVisible(true);
										}}
									>
										{passVisible ? (
											<FaEye />
										) : (
											<FaEyeSlash />
										)}
									</div>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className=' w-full'>
					Create Account
				</Button>
			</form>
		</Form>
	);
}
