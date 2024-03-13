import React from "react"
import {FaCircleCheck} from "react-icons/fa6"

export default function About() {
	return (
		<>
			<section id='about' className='scroll-mt-12'>
				{/* ABOUT ME & MOTTO */}
				<section>
					<div className='flex max-w-6xl m-auto py-10 md:py-14 flex-col md:flex-row px-5 md:px-0 gap-y-10 md:gap-y-0'>
						<div className='max-w-sm m-auto'>
							<h1 className='text-xl'>Motto</h1>
							<h1 className='text-3xl md:text-6xl'>
								<span className=''>
									Learning isn't about <span className='text-gray-400'>the achievement</span>
									{`, it's about `}
									<span className='text-sky-500'>post-impact</span>.
								</span>
							</h1>
						</div>
						<div className='max-w-xl m-auto'>
							<h1 className='text-xl md:text-3xl mb-2 md:mb-5'>About me</h1>
							<div className='flex'>
								<div className='flex mb-2'>
									<div className='border-2 border-black rounded-full overflow-hidden mr-2'>
										<div className='bg-red-600 h-[50%] w-5'></div>

										<div className='bg-white h-[50%] w-auto'></div>
									</div>
									<p>ID | Indonesia </p>
								</div>

								<p></p>
							</div>
							<div>
								<p className='text-sm text-justify md:text-start md:text-xl md:tracking-wider text-gray-400'>
									&emsp;&emsp;A final-year student majoring in <span className='text-sky-500 '>{` informatics engineering`}</span> from STMIK IKMI Cirebon who is interested in <span className='text-sky-500 '>{` website development `}</span>and <span className='text-sky-500 '>{` digital design`}</span>. Besides those, I am always enthusiastic about learning new things about popular technologies within the informatics fields with the purpose of improving new skills that might be needed by an
									institution or company.
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className='divider max-w-xs md:max-w-6xl m-auto'></div>

				{/* EXPERIENCES */}
				<section>
					<div className='max-w-5xl m-auto md:py-14 py-10 px-5 md:px-0'>
						<div className='text-center pb-7'>
							<h1 className='text-2xl md:text-5xl'>My Experiences</h1>
							<h2 className='pt-1 md:pt-3 m-auto text-sm md:text-lg text-gray-400 text-center'>
								<span>This is a timeline of my journey in education</span>
								<br />
								<span>and experience until now.</span>
							</h2>
						</div>
						<ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
							<li>
								<div className='timeline-middle'>
									<FaCircleCheck />
								</div>
								<div className='timeline-start md:text-end'>
									<time className='badge badge-outline italic'>2019</time>
									<div className='text-xl '>
										<h1 className='text-sky-500'>Data Management (Intern)</h1>
										<h2 className='text-sm text-gray-500'>PT. Telkom Witel Cirebon</h2>
									</div>
									<div className='mt-2 p-5 bg-gray-200 rounded-lg text-start text-sm md:text-base'>Gather and confirm information about network devices in the Ciayumajakuning area that are ODP (optical distribution point) and ODC (optical distribution cabinet). By cross-referencing field technician data with server data via the internal data management platform, you can guarantee data integrity. </div>
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<FaCircleCheck />
								</div>
								<div className='timeline-end'>
									<time className='badge badge-outline italic'>2022</time>
									<div className='text-xl '>
										<h1 className='text-sky-500'>Aplication Admin (Freelance)</h1>
										<h2 className='text-sm text-gray-500'>Rumah Digital Majalengka</h2>
									</div>
									<div className='mt-2 p-5 bg-gray-200 rounded-lg text-start text-sm md:text-base'>Following the guidelines while entering store owner data into the Dodolans program. checking store data to make sure it matches the details the application developer gave.</div>
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<FaCircleCheck />
								</div>
								<div className='timeline-start md:text-end'>
									<time className='badge badge-outline italic'>2022</time>
									<div className='text-xl'>
										<h1 className='text-sky-500'>IT Staff (Intern)</h1>
										<h2 className='text-sm text-gray-500'>PT. BRI KC Cirebon Kartini</h2>
									</div>
									<div className='mt-2 p-5 bg-gray-200 rounded-lg text-start text-sm md:text-base'>Managing hardware, software, and network troubleshooting in the branch office and divisions under the BRI Cirebon Kartini branch office. In addition to actively supporting the efficient running of other banking departments, you are in charge of overseeing and maintaining the CCTV systems at the branch office.</div>
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className='timeline-middle'>
									<FaCircleCheck />
								</div>
								<div className='timeline-end'>
									<time className='badge badge-outline italic'>2023 - Now</time>
									<div className='text-xl text-sky-500 '>Freelancer</div>
									<div className='mt-2 p-5 bg-gray-200 rounded-lg text-start text-sm md:text-base'>Handle client requests about developing front-end web projects and with brochures, logo creation, and other digital marketing requirements.</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</section>
		</>
	)
}
