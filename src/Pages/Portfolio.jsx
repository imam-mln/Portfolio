import React from "react"

import Skill from "../Components/Skill"
import dataProjects from "../Datas/Projects"

import {MdOutlineOpenInNew} from "react-icons/md"

export default function Portfolio() {
	return (
		<>
			<section className='hidden lg:block'>
				<Skill />
			</section>
			<section className='max-w-6xl m-auto'>
				<div className='grid grid-cols-3 m-auto gap-5'>
					{dataProjects.projects.map((el, idx) => {
						return (
							<div key={idx}>
								<div key={idx}>
									<div className='relative rounded-xl overflow-hidden'>
										<div className='absolute w-full h-full bg-gradient-to-t from-slate-800 flex justify-center'>
											<div className=' flex flex-col justify-between w-full'>
												<div className='flex justify-end w-full'>
													<a alt='Open' target={"_blank"} href={el.link} className='m-3 rounded-full hover:scale-105 transition hover:bg-white p-2'>
														<MdOutlineOpenInNew />
													</a>
												</div>
												<div className='hover:scale-105 active:opacity-20 transition cursor-pointer rounded-full mx-auto w-fit bg-white h-fit mb-4 px-3' onClick={() => document.getElementById(`my_modal_${idx}`).showModal()}>
													<h1>{el.title}</h1>
												</div>
											</div>
										</div>
										<img src={el.img} alt={el.title} />
									</div>
								</div>
								<dialog id={`my_modal_${idx}`} className='modal'>
									<div className='modal-box min-w-[900px]'>
										<div className='flex justify-start items-center gap-x-3 mb-3'>
											<h3 className='font-bold text-lg'>Detail of project</h3>
											<a target={"_blank"} href={el.link} className=' rounded-full hover:scale-125 transition tooltip tooltip-right tool' data-tip='Open'>
												<MdOutlineOpenInNew />
											</a>
										</div>
										<div className='flex gap-x-4'>
											<div>
												<div className='rounded-xl overflow-hidden relative'>
													<img className='max-w-xl' src={el.img} alt={el.title} />
												</div>
											</div>
											<div className='flex flex-col gap-y-5'>
												<div>
													<h2 className='font-semibold'>Project name :</h2>
													<p className='text-sm'>{el.title}</p>
												</div>
												<div>
													<h2 className='font-semibold'>Description :</h2>
													<p className='text-sm'>{el.desc}</p>
												</div>
												<div>
													<h1 className='font-semibold'>Tools usage :</h1>
													<div className='flex flex-wrap gap-1'>
														{el.tools.map((el, idx) => {
															return (
																<div key={idx} className='badge bg-blue-500 text-white'>
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
				<div></div>
			</section>
		</>
	)
}
