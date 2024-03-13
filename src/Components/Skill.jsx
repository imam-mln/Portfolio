import React from "react"

import dataSkills from "../Datas/Skills"

export default function Skill() {
	return (
		<>
			<section id='skill' className='flex flex-col justify-center pt-5 pb-10 lg:pt-10 scroll-mt-10'>
				<div className='text-center pb-4 md:pb-7'>
					<h1 className='text-2xl md:text-5xl'>Skill-set</h1>
				</div>
				<div className='grid grid-cols-1 gap-y-3 lg:grid-cols-3 max-w-6xl m-auto gap-x-4'>
					{/* FRONTEND WEB DEV */}
					<div className='bg-sky-500 text-white p-3 md:p-7 min-w-80 md:max-w-[340px] rounded-lg'>
						<div className='pb-5'>
							<h1 className='text-center text-lg md:text-3xl'>Frontend Web Dev</h1>
						</div>
						<div className='grid grid-cols-3 gap-y-5 pb-4 md:pb-0'>
							{dataSkills.webDev.map((el, idx) => {
								let lvl = []
								for (let i = 1; i <= 5; i++) {
									i <= el.lvl ? lvl.push(<div key={i} type='radio' name={el.title} className='rounded-full bg-white w-2 h-2'></div>) : lvl.push(<div key={i} type='radio' name={el.title} className='rounded-full border-white border-[1px] w-2 h-2'></div>)
								}
								return (
									<div key={idx} className='flex flex-col justify-center m-auto'>
										<div className='rounded-full p-2 w-fit bg-white m-auto'>
											<el.icon title={el.title} className='w-8 h-auto fill-sky-500' />
										</div>
										<div className='flex gap-x-1 mx-auto py-2'>{lvl}</div>
										<p className='text-center text-sm'>{el.title}</p>
									</div>
								)
							})}
						</div>
					</div>
					{/* GRAPHIC DESIGN */}
					<div className='bg-sky-500 text-white p-7 max-w-[340px] rounded-lg'>
						<div className='pb-5'>
							<h1 className='text-center text-lg md:text-3xl'>Graphic Design</h1>
						</div>
						<div className='grid grid-cols-3 gap-y-5'>
							{dataSkills.graphicDesign.map((el, idx) => {
								let lvl = []
								for (let i = 1; i <= 5; i++) {
									i <= el.lvl ? lvl.push(<div key={i} type='radio' name={el.title} className='rounded-full bg-white w-2 h-2'></div>) : lvl.push(<div key={i} type='radio' name={el.title} className='rounded-full border-white border-[1px] w-2 h-2'></div>)
								}
								return (
									<div key={idx} className='flex flex-col justify-center m-auto'>
										<div className='rounded-full p-2 w-fit bg-white m-auto'>
											<el.icon title={el.title} className='w-8 h-auto fill-sky-500' />
										</div>
										<div className='flex gap-x-1 mx-auto py-2'>{lvl}</div>
										<p className='text-center text-sm'>{el.title}</p>
									</div>
								)
							})}
						</div>
					</div>
					{/* ADDITIONAL */}
					<div className='bg-sky-500 text-white p-7 max-w-[340px] rounded-lg'>
						<div className='pb-5'>
							<h1 className='text-center text-lg md:text-3xl'>Additional</h1>
						</div>
						<div className='grid grid-cols-3 gap-y-5'>
							{dataSkills.addtional.map((el, idx) => {
								let lvl = []
								for (let i = 1; i <= 5; i++) {
									i <= el.lvl ? lvl.push(<div key={i} type='radio' name={el.title} className='rounded-full bg-white w-2 h-2'></div>) : lvl.push(<div key={i} type='radio' name={el.title} className='rounded-full border-white border-[1px] w-2 h-2'></div>)
								}
								return (
									<div key={idx} className='flex flex-col justify-center m-auto'>
										<div className='rounded-full p-2 w-fit bg-white m-auto'>
											<el.icon title={el.title} className='w-8 h-auto fill-sky-500' />
										</div>
										<div className='flex gap-x-1 mx-auto py-2'>{lvl}</div>
										<p className='text-center text-sm'>{el.title}</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
