import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllTeachers.css";

const AllTeachers = () => {
	const [teachers, setTeachers] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/teachers")
			.then((res) => res.json("http://localhost:5000/teachers"))
			.then((data) => setTeachers(data));
	}, []);
	console.log(teachers);
	return (
		<div className='container mx-auto px-4 md:px-11 mb-10 min-h-screen'>
			<h1 className='text-center text-3xl uppercase font-semibold mt-4 md:mb-9 mb-5 text-red-500'>
				All Of Our Teachers
			</h1>
			<div className='w-full'>
				<div className=' px-32 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto md:gap-5 gap-4'>
					{teachers?.map((teacher, key) => (
						<div className='text-left'>
							<div className='teacher-container relative'>
								<img
									className=' rounded-t-md'
									src={teacher?.image}
									alt=' TeacherImage'
								/>
								<div className='overlay absolute bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-[#0000005c] rounded-md'>
									<Link
										key={key}
										to={`/teachersDashboard/singleTeacher/${teacher?._id}`}
										className='absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 font-lg text-white bg-red-500 py-2 px-4 rounded-md'>
										View Profile
									</Link>
								</div>
							</div>
							<div className='border shadow-lg px-5 pb-2 rounded-b-md'>
								<h3 className='md:text-md text-red-500 text-xl font-extrabold mt-2'>
									{teacher?.name}
								</h3>
								<h4>{teacher?.designation}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllTeachers;
