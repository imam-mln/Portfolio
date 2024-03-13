import React from "react"

import {FaLinkedinIn, FaFacebookF, FaInstagram} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"

export default function Footer() {
	return (
		<footer className='m-auto bg-slate-700 flex flex-col justify-center gap-y-4 p-5 text-white'>
			<nav className='flex gap-x-3 m-auto'>
				<a href='https://www.linkedin.com/in/imammay24/' target={"_blank"}>
					<div className='p-1 md:p-3 w-fit rounded-full bg-sky-500'>
						<FaLinkedinIn className='fill-white w-4 md:w-6 h-auto' />
					</div>
				</a>
				<a href='https://www.instagram.com/imm.mln/' target={"_blank"}>
					<div className='p-1 md:p-3 w-fit rounded-full bg-sky-500'>
						<FaInstagram className='fill-white w-4 md:w-6 h-auto' />
					</div>
				</a>
				<a href='https://www.facebook.com/imm.mln/' target={"_blank"}>
					<div className='p-1 md:p-3 w-fit rounded-full bg-sky-500'>
						<FaFacebookF className='fill-white w-4 md:w-6 h-auto' />
					</div>
				</a>
				<a href='https://github.com/imam-mln' target={"_blank"}>
					<div className='p-1 md:p-3 w-fit rounded-full bg-sky-500'>
						<FiGithub className='fill-none stroke-white w-4 md:w-6 h-auto' />
					</div>
				</a>
			</nav>
			<div className='m-auto font-normal'>
				<p className='text-center text-xs md:text-base'>Email : imammaul2405@gmail.com</p>
				<p className='text-slate-400 text-xs md:text-base'>Copyright Imam Maulana | 2024 - All right reserved</p>
			</div>
		</footer>
	)
}
