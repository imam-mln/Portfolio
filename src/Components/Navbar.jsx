import React from "react"

import ContactForm from "../Components/Formspree"

export default function Navbar() {
	return (
		<nav className='sticky absolute top-0 bg-white z-50'>
			<nav className='navbar md:max-w-6xl md:m-auto'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
							</svg>
						</div>
						<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<a href={"#about"}>About</a>
							</li>
							<li>
								<a href={"#service"}>Service</a>
							</li>
							<li>
								<a href={"#skill"}>Skill</a>
							</li>
							<li>
								<a href={"#portfolio"}>Portfolio</a>
							</li>
						</ul>
					</div>
					<a className='btn btn-ghost text-lg md:text-3xl tracking-wider uppercase text-sky-500 font-normal' href={"#home"}>
						imam-mln
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 text-xl gap-x-5'>
						<li>
							<a href={"#about"}>About</a>
						</li>
						<li>
							<a href={"#service"}>Service</a>
						</li>
						<li>
							<a href={"#skill"}>Skill</a>
						</li>
						<li>
							<a href={"#portfolio"}>Portfolio</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					<a className='btn btn-sm text-xs md:btn-md md:text-lg bg-sky-500 font-normal text-white' onClick={() => document.getElementById("my_modal_nav").showModal()}>
						Connect!
					</a>
					<dialog id='my_modal_nav' className='modal'>
						<div className='modal-box'>
							<form method='dialog'>
								{/* if there is a button in form, it will close the modal */}
								<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
							</form>
							<ContactForm />
						</div>
					</dialog>
				</div>
			</nav>
		</nav>
	)
}
