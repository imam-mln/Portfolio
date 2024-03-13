import React from "react"

import dataProjects from "../Datas/Projects"

import {MdOutlineOpenInNew} from "react-icons/md"

export default function Portfolio() {
	return (
		<section id='portfolio' className='scroll-mt-12'>
			{/* PROJECTS */}
			<section className='max-w-6xl m-auto  py-10'>
				<div className='text-center pb-7'>
					<h1 className='text-2xl md:text-5xl'>My Projects</h1>
					<h2 className='pt-1 md:pt-3 m-auto text-sm md:text-lg text-center text-gray-400'>
						<span>These are some of my recent projects,</span>
						<br />
						<span>and several of them are publicly accessible.</span>
					</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 m-auto gap-5'>
					{dataProjects.projects.map((el, idx) => {
						return (
							<div key={idx} className='max-w-xs mx-auto'>
								<div key={idx}>
									<div className='relative rounded-xl overflow-hidden'>
										<div className='absolute w-full h-full bg-gradient-to-t from-slate-800 flex justify-center'>
											<div className=' flex flex-col justify-between w-full'>
												<div className='flex justify-end w-full'>
													<a alt='Open' target={"_blank"} href={el.link} className='m-3 rounded-full hover:scale-105 transition hover:bg-white p-2'>
														<MdOutlineOpenInNew />
													</a>
												</div>
												<div className='hover:scale-105 active:opacity-20 transition cursor-pointer rounded-full mx-auto w-fit bg-white h-fit mb-4 px-3' onClick={() => document.getElementById(`my_modal_${idx}_${el.title}`).showModal()}>
													<h1 className='text-sm md:text-base'>{el.title}</h1>
												</div>
											</div>
										</div>
										<img src={el.img} alt={el.title} />
									</div>
								</div>
								<dialog id={`my_modal_${idx}_${el.title}`} className='modal'>
									<div className='modal-box max-w-xs md:max-w-4xl'>
										<div className='flex justify-start items-center gap-x-3 mb-3'>
											<h3 className='font-bold text-lg'>Detail of project</h3>
											<a target={"_blank"} href={el.link} className=' rounded-full hover:scale-125 transition tooltip tooltip-right tool' data-tip='Open'>
												<MdOutlineOpenInNew />
											</a>
										</div>
										<div className='flex flex-col md:flex-row gap-x-4'>
											<div>
												<div className='rounded-xl overflow-hidden relative'>
													<img className='max-h-fit md:max-w-xl' src={el.img} alt={el.title} />
												</div>
											</div>
											<div className='flex flex-col pt-2 md:pt-0 gap-y-2 md:gap-y-5'>
												<div>
													<h2 className='text-sm md:text-base font-semibold'>Project name :</h2>
													<p className='text-xs md:text-sm'>{el.title}</p>
												</div>
												<div>
													<h2 className='text-sm md:text-base font-semibold'>Description :</h2>
													<p className='text-xs md:text-sm'>{el.desc}</p>
												</div>
												<div>
													<h1 className='text-sm md:text-base font-semibold'>Tools usage :</h1>
													<div className='flex flex-wrap gap-1'>
														{el.tools.map((el, idx) => {
															return (
																<div key={idx} className='badge bg-blue-500 text-white text-xs md:text-sm'>
																	{el}
																</div>
															)
														})}
													</div>
												</div>
											</div>
										</div>
									</div>
									<form method='dialog' className='modal-backdrop'>
										<button>close</button>
									</form>
								</dialog>
							</div>
						)
					})}
				</div>
			</section>
			<div className='divider md:max-w-6xl max-w-xs mx-auto'></div>
			{/* GRAPHIC DESIGN */}
			<section className='pt-10 pb-20 max-w-6xl m-auto'>
				<div className='text-center pb-7'>
					<h1 className='text-2xl md:text-5xl'>Graphic Design</h1>
					<h2 className='pt-1 md:pt-3 m-auto text-sm md:text-lg text-center text-gray-400'>
						<span>These are some of my design portfolio,</span>
						<br />
						<span>and some of them are for sale.</span>
					</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 m-auto gap-5'>
					{dataProjects.graphicDesign.map((el, idx) => {
						return (
							<div key={idx} className='max-w-xs mx-auto'>
								<div key={idx}>
									<div className='relative rounded-xl overflow-hidden'>
										<div className='absolute w-full h-full bg-gradient-to-t from-slate-800 flex justify-center'>
											<div className=' flex flex-col justify-between w-full'>
												<div className='flex justify-end w-full'>
													<a alt='Open' target={"_blank"} href={el.link} className='m-3 rounded-full hover:scale-105 transition hover:bg-white p-2'>
														<MdOutlineOpenInNew />
													</a>
												</div>
												<div className='hover:scale-105 active:opacity-20 transition cursor-pointer rounded-full mx-auto w-fit bg-white h-fit mb-4 px-3' onClick={() => document.getElementById(`my_modal_${idx}_${el.title}`).showModal()}>
													<h1 className='text-sm md:text-base'>{el.title}</h1>
												</div>
											</div>
										</div>
										<img src={el.img} alt={el.title} />
									</div>
								</div>
								<dialog id={`my_modal_${idx}_${el.title}`} className='modal'>
									<div className='modal-box max-w-xs md:max-w-4xl'>
										<div className='flex justify-start items-center gap-x-3 mb-3'>
											<h3 className='font-bold text-lg'>Detail of design</h3>
											<a target={"_blank"} href={el.link} className=' rounded-full hover:scale-125 transition tooltip tooltip-right tool' data-tip='Open'>
												<MdOutlineOpenInNew />
											</a>
										</div>
										<div className='flex flex-col md:flex-row gap-x-4'>
											<div>
												<div className='rounded-xl overflow-hidden relative drop-shadow-md md:drop-shadow-xl'>
													<img className='max-h-fit md:max-w-xl' src={el.img} alt={el.title} />
												</div>
											</div>
											<div className='flex flex-col pt-2 md:pt-0 gap-y-2 md:gap-y-5'>
												<div>
													<h2 className='text-sm md:text-base font-semibold'>Design name :</h2>
													<p className='text-xs md:text-sm'>{el.title}</p>
												</div>
												<div>
													<h2 className='text-sm md:text-base font-semibold'>Description :</h2>
													<p className='text-xs md:text-sm'>{el.desc}</p>
												</div>
											</div>
										</div>
									</div>
									<form method='dialog' className='modal-backdrop'>
										<button>close</button>
									</form>
								</dialog>
							</div>
						)
					})}
				</div>
			</section>
		</section>
	)
}
