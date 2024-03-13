import React from "react"
import {Typewriter} from "react-simple-typewriter"

import {FaLinkedinIn, FaFacebookF, FaInstagram} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"

import ContactForm from "../Components/Formspree"
import imamPhoto from "../assets/imam.png"
import imamPhotoV2 from "../assets/imam-v2.png"

export default function Home() {
	return (
		<section id='home' className='tracking-wider scroll-mt-20'>
			<div className='hidden md:block hero mx-auto max-w-6xl min-w-6xl'>
				<div className='hero-content flex-col lg:flex-row-reverse md:mb-0 md:pb-0 m-auto lg:gap-40'>
					<img src={imamPhoto} className=' md:block md:min-w-96' />
					<div>
						<span className='text-base'>Hello there! i am</span>
						<h1 className='text-3xl md:text-6xl md:font-bold'>Imam Maulana</h1>
						<span className='text-gray-500 text-xl py-5'>Freelancer {` `}</span>
						<span className='font-semibold text-xl'>
							<Typewriter words={["Web Developer", "Graphic Designer"]} loop={false} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
						</span>
						<h6 className='py-5'>
							<p className='text-base'>
								Always enthusiastic and challenged to learn new things. <br />
								<span className=''>Let's find your problem solution with me!</span>
							</p>
						</h6>
						<div className='flex pb-3 gap-3'>
							<a href='https://www.linkedin.com/in/imammay24/' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FaLinkedinIn className='fill-white w-6 h-auto' />
								</div>
							</a>
							<a href='https://www.instagram.com/imm.mln/' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FaInstagram className='fill-white w-6 h-auto' />
								</div>
							</a>
							<a href='https://www.facebook.com/imm.mln/' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FaFacebookF className='fill-white w-6 h-auto' />
								</div>
							</a>
							<a href='https://github.com/imam-mln' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FiGithub className='fill-none stroke-white w-6 h-auto' />
								</div>
							</a>
							<button className='hidden md:block btn bg-sky-500 text-white font-normal tracking-wide' onClick={() => document.getElementById("my_modal_3").showModal()}>
								Let's Connect!
							</button>
							<dialog id='my_modal_3' className='modal'>
								<div className='modal-box'>
									<form method='dialog'>
										{/* if there is a button in form, it will close the modal */}
										<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
									</form>
									<ContactForm />
								</div>
							</dialog>
						</div>
					</div>
				</div>
			</div>
			<div className='md:hidden hero min-h-screen min-w-80' style={{backgroundImage: `url(${imamPhotoV2})`}}>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content text-center'>
					<div className='max-w-md text-white'>
						<span>Hello there! I am</span>
						<h1 className='mb-1 text-5xl font-bold tracking-wide'>Imam Maulana</h1>
						<h3 className='pb-3'>
							<span className='text-xl'>
								<Typewriter words={["Web Developer", "Graphic Designer"]} loop={false} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={3000} />
							</span>
						</h3>
						<h6 className='mb-5 text-xs'>
							Always enthusiastic and challenged to learn new things.
							<br />
							<span>Let's find your problem solution with me!</span>
						</h6>
						<div className='flex pb-6 justify-around'>
							<a href='https://www.linkedin.com/in/imammay24/' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FaLinkedinIn className='fill-white w-6 h-auto' />
								</div>
							</a>
							<a href='https://www.instagram.com/imm.mln/' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FaInstagram className='fill-white w-6 h-auto' />
								</div>
							</a>
							<a href='https://www.facebook.com/imm.mln/' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FaFacebookF className='fill-white w-6 h-auto' />
								</div>
							</a>
							<a href='https://github.com/imam-mln' target={"_blank"}>
								<div className='p-3 w-fit rounded-full bg-sky-500'>
									<FiGithub className='fill-none stroke-white w-6 h-auto' />
								</div>
							</a>
						</div>
						<button className='btn btn-sm border-none bg-sky-500 text-white text-xs font-normal tracking-wide' onClick={() => document.getElementById("my_modal_sm").showModal()}>
							Let's Connect!
						</button>
					</div>
					<dialog id='my_modal_sm' className='modal'>
						<div className='modal-box'>
							<form method='dialog'>
								{/* if there is a button in form, it will close the modal */}
								<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
							</form>
							<ContactForm />
						</div>
					</dialog>
				</div>
			</div>
		</section>
	)
}
