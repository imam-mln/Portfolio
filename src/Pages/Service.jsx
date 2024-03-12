import React from "react"

import DataService from "../Datas/Service"

export default function Service() {
	return (
		<>
			<section className='bg-sky-500 min-h-screen py-14'>
				<div className='text-center pb-7'>
					<h1 className='text-2xl text-white md:text-5xl'>My Services</h1>
					<h2 className='pt-1 md:pt-3 m-auto text-sm md:text-lg text-white text-center'>
						<span>These are some of the services I provide for clients,</span>
						<br />
						<span>and surely I'm always open to other projects.</span>
					</h2>
				</div>
				<div className='max-w-6xl m-auto'>
					<div></div>
					<div className='px-2 grid grid-cols-2 md:grid-cols-4 mx-auto gap-y-3 md:gap-y-0'>
						{DataService.map((el) => {
							return (
								<div key={el.title} className='drop-shadow-md bg-white rounded-xl mx-auto'>
									<div className='md:my-10'>
										<figure className=' flex justify-center px-4 py-4 md:pb-6'>
											<div className='rounded-full bg-sky-500 w-fit p-2 md:p-5'>
												<el.img className='w-7 md:w-12 h-auto fill-white' />
											</div>
										</figure>
										<div className='text-center max-w-40 md:max-w-60 px-5 md:px-8 mb-5'>
											<h1 className='text-base md:text-xl font-semibold'>{el.title}</h1>
											<h2 className='md:pt-2 text-[10px] md:text-sm'>{el.desc}</h2>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
			<section>
				<div></div>
			</section>
		</>
	)
}
