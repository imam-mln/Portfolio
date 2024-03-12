// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react"
import {useForm, ValidationError} from "@formspree/react"
export default function ContactForm() {
	const [state, handleSubmit] = useForm("xeqyazpl")
	if (state.succeeded) {
		return (
			<>
				<div>
					<p className='text-green-500 text-xl'>Success!!</p>
					<p>Your message will get respond ASAP!</p>
				</div>
			</>
		)
	}
	return (
		<form onSubmit={handleSubmit} className='min-w-72 text-sm'>
			<div className='grid grid-cols-2 gap-x-4'>
				<label className='form-control w-full max-w-xs' htmlFor='name'>
					<div className='label'>
						<span className='label-text hidden md:block'>What is your name?</span>
					</div>
					<input type='text' id='name' name='name' placeholder='Your name' className='placeholder:text-[11px] placeholder:md:text-sm input input-bordered w-full max-w-xs' required />
				</label>
				<ValidationError prefix='Name' field='name' errors={state.errors} />
				<label className='form-control w-full max-w-xs' htmlFor='name'>
					<div className='label'>
						<span className='label-text hidden md:block'>What is your company?</span>
					</div>
					<input type='text' id='company' name='company' placeholder='Your company (opsional)' className='placeholder:text-[11px] placeholder:md:text-sm input input-bordered w-full max-w-xs' />
				</label>
				<ValidationError prefix='Company' field='company' errors={state.errors} />
				<label className='form-control w-full max-w-xs' htmlFor='name'>
					<div className='label'>
						<span className='label-text hidden md:block'>Whatsapp</span>
					</div>
					<input id='whatsapp' type='number' name='whatsapp' placeholder='Your whatsapp number' className='placeholder:text-[11px] placeholder:md:text-sm input input-bordered w-full max-w-xs' required />
				</label>
				<ValidationError prefix='Whatsapp' field='whatsapp' errors={state.errors} />
				<label className='form-control w-full max-w-xs' htmlFor='name'>
					<div className='label'>
						<span className='label-text hidden md:block'>Email address</span>
					</div>
					<input type='email' name='email' id='email' placeholder='Your email address' className='placeholder:text-[11px] placeholder:md:text-sm input input-bordered w-full max-w-xs' required />
				</label>
				<ValidationError prefix='Email' field='email' errors={state.errors} />
			</div>
			<label className='form-control'>
				<div className='label'>
					<span className='label-text hidden md:block'>Tell me about your project?</span>
				</div>
				<textarea id='message' name='message' className='placeholder:text-[11px] placeholder:md:text-sm textarea textarea-bordered h-24' placeholder='Detail of your project' required></textarea>
			</label>
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<div className='flex justify-between pt-3'>
				<span className='text-[10px] md:text-xs italic text-gray-400 text-start'>*Ensure your contact information is reachable.</span>
				<button className='btn btn-sm md:btn-md bg-green-500 text-white font-normal tracking-wide' disabled={state.submitting}>
					Submit
				</button>
			</div>
		</form>
	)
}
