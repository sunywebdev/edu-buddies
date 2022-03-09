import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import LoadingOverlay from "../../Loading/LoadingOverlay";

const AddTeacher = () => {
	const [teacher, setTeacher] = useState(false);
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const onSubmit = (data, e) => {
		setTeacher(true);
		axios
			.put("https://fierce-caverns-90976.herokuapp.com/users/teacher", data)
			.then((res) => {
				console.log(res.data);
				Swal.fire({
					icon: "success",
					title: `You made a new teacher ${data?.email}`,
					showConfirmButton: false,
					timer: 1500,
				});
				setTeacher(false);
			});
		e.target.reset();
	};

  return (
    <div className="mt-44 ">
      <h1 className="text-4xl ">Make a Teacher</h1>
       <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-nowrap justify-center">
       
        <input
        className=" bg-red-50 p-2 rounded border-2 border-red-300 m-1"
          type={"email"}
          {...register("email", { required: true })}
          placeholder="Enter Email"
        />{" "}
        <br />
        {errors.exampleRequired && <span>This field is required</span>} <br />
        <button className="border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold m-1 p-2 rounded-lg tracking-wider">
                Submit
              </button>
        <br />
        </div>
      </form>

 
    </div>
  );
};

export default AddTeacher;
