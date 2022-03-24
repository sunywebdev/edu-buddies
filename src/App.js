import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "../src/Components/Home/About/About";
import Contact from "../src/Components/Contact/Contact";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Home from "../src/Components/Home/Home/Home";
import AllCourseList from "../src/Components/AllCourseList/AllCourseList";
import Courses from "../src/Components/Home/Courses/Courses";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Greetings from "../src/Components/Register/Greetings/Greetings";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import UserProfile from "./Components/UserProfile/UserProfile/UserProfile";
import SingleBlogMain from "./Components/Home/SingleBlog/SingleBlogMain";
import TeacherCourses from "../src/Components/Dashboard/TeacherCourses/TeacherCourses";
import ScrollToTop from "../src/Components/ScrollToTop/ScrollToTop";
import AllBlogs from "./Components/Dashboard/AllBlogs/AllBlogs";
import Signup from "./Components/Signup/Signup";
import ResetPass from "./Components/ResetPass/ResetPass";
import AddNewCourse from "./Components/Dashboard/AddNewCourse/AddNewCourse";
import UploadCourseContent from "./Components/Dashboard/UploadCourseContent/UploadCourseContent";
import AllCourses from "./Components/Dashboard/AllCourses/AllCourses";
import SingleCourse from "./Components/Home/SingleCourse/SingleCourse";
import Milestones from "../src/Components/Home/Milestones/Milestones";
import TeachersDashboard from "./Components/TeachersDashboard/TeachersDashboard/TeachersDashboard";
import AllTeachers from "./Components/TeachersDashboard/AllTeachers/AllTeachers";
import TeachersProfile from "./Components/TeachersDashboard/TeachersProfile/TeachersProfile";
import AddCourse from "./Components/TeachersDashboard/AddCourse/AddCourse";
import UpdateCourse from "./Components/TeachersDashboard/UpdateCourse/UpdateCourse";
import RemoveCourse from "./Components/TeachersDashboard/RemoveCourse/RemoveCourse";
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";
import StudentProfile from "./Components/StudentDashboard/StudentProfile/StudentProfile";
import StudentAddress from "./Components/StudentDashboard/StudentAddress/StudentAddress";
import StudentEducation from "./Components/StudentDashboard/StudentEducation/StudentEducation";
import StudentImportantLinks from "./Components/StudentDashboard/StudentImportantLinks/StudentImportantLinks";
import StudentSkills from "./Components/StudentDashboard/StudentSkills/StudentSkills";
import MakeAdmin from "./Components/Dashboard/Admin/MakeAdmin";
import CoursesList from "./Components/Dashboard/Admin/CoursesList";
import TeacherList from "./Components/Dashboard/Admin/TeacherList";
import AutoEmailSend from "./Components/AutoEmailSend/AutoEmailSend";
import RecycleBin from "./Components/Dashboard/Admin/RecycleBin";
import History from "./Components/Dashboard/Admin/History";
import Bestperformer from "./Components/TeachersDashboard/Bestperformer/Bestperformer";
import PostNotice from "./Components/TeachersDashboard/PostNotice/PostNotice";
import PostBlog from "./Components/PostBlog/PostBlog";
import AllBlogsPage from "./Components/AllBlogsPage/AllBlogsPage";
import NewsletterList from "./Components/NewsletterList/NewsletterList";
import PostNewsLetter from "./Components/PostNewsLetter/PostNewsLetter";
import MyCourses from "./Components/TeachersDashboard/MyCourses/MyCourses";
import UploadMyContent from "./Components/TeachersDashboard/UploadMyContent/UploadMyContent";
import MyCourseDetails from "./Components/TeachersDashboard/MyCourseDeatails/MyCourseDetails";
import AddContent from "./Components/TeachersDashboard/AddContent/AddContent";
import BlogList from "./Components/BlogList/BlogList";
import PromoCode from "./Components/Dashboard/PromoCode/PromoCode";
import Test from "./Components/Test/Test";
import AllLiveSupportSessions from "./Components/Home/SupportSession/AllLiveSupportSessions";
import SupportSessionList from "./Components/Home/SupportSession/SupportSessionList";
import ChatBot006 from "./Components/Shared/ChatBot006/ChatBot006";
import Mails from "./Components/Dashboard/Mails/Mails";
import AllUsers from "./Components/Dashboard/AllUsers/AllUsers";
import Admins from "../src/Components/Shared/Footer/Admins/Admins";
import Developers from "../src/Components/Shared/Footer/Developers/Developers";
import Terms from "../src/Components/Shared/Footer/Terms/Terms";
import CareerGuides from "../src/Components/Shared/Footer/CareerGuides/CareerGuides";
import Faq from "../src/Components/Shared/Footer/Faq/Faq";
import GameDevCourses from "../src/Components/Home/CourseCategories/GameDevCourses/GameDevCourses";
import AiCourses from "../src/Components/Home/CourseCategories/AiCourses/AiCourses";
import MachineCourses from "../src/Components/Home/CourseCategories/MachineCourses/MachineCourses";
import SoftDevCourses from "../src/Components/Home/CourseCategories/SoftDevCourses/SoftDevCourses";
import ProgrammingCourses from "../src/Components/Home/CourseCategories/ProgrammingCourses/ProgrammingCourses";
import WebDevCourses from "../src/Components/Home/CourseCategories/WebDevCourses/WebDevCourses";
import MyClasess from "./Components/StudentDashboard/MyClasess/MyClasess";
import Success from "./Components/Payment/Success/Success";
import TeacherRoute from "./Components/Login/TeacherRoute/TeacherRoute";
import AdminRoute from "./Components/Login/AdminRoute/AdminRoute";
import StudentRoute from "./Components/Login/StudentRoute/StudentRoute";
import UserActivities from "./Components/Dashboard/Admin/Chart/UserActivities";
import MyProfile from "./Components/TeachersDashboard/MyProfile/Myprofile";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ScrollToTop />
				{/* This will prevent bottom scroll of every route. */}
				<div className='page-container'>
					{/* // This will put the footer always in bottom of the screen. */}
					<div className='content-wrap'>
						{/* // This will put the footer always in bottom of the screen. */}
						<Header />
						<Routes>
							<Route path='/*' element={<NotFound />} />
							<Route path='/' element={<Home />} />
							<Route path='/home' element={<Home />} />
							<Route path='/blog' element={<AllBlogsPage />} />
							<Route path='/allCourseList' element={<AllCourseList />} />
							<Route path='/singleblog/:id' element={<SingleBlogMain />} />
							<Route path='/about' element={<About />} />
							<Route path='/courses' element={<Courses />} />
							<Route path='/singlecourse/:id' element={<SingleCourse />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/signup' element={<Signup />} />
							<Route path='/resetpassword' element={<ResetPass />} />
							<Route path='/greetings' element={<Greetings />} />
							<Route path='/userProfile' element={<UserProfile />} />
							<Route path='/OurAdmins' element={<Admins />} />
							<Route path='/OurDevelopers' element={<Developers />} />
							<Route path='/CareerGuideline' element={<CareerGuides />} />
							<Route path='/OurTerms' element={<Terms />} />
							<Route path='/Faq' element={<Faq />} />
							<Route path='/GameDevCourses' element={<GameDevCourses />} />
							<Route path='/AiCourses' element={<AiCourses />} />
							<Route path='/MachineCourses' element={<MachineCourses />} />
							<Route path='/SoftDevCourses' element={<SoftDevCourses />} />
							<Route path='/WebDevCourses' element={<WebDevCourses />} />
							<Route
								path='/ProgrammingCourses'
								element={<ProgrammingCourses />}
							/>
							<Route path='/test' element={<Test />} />
							<Route
								path='/studentdashboard'
								element={
									<StudentRoute>
										<StudentDashboard />
									</StudentRoute>
								}>
								<Route
									path='/studentdashboard/milestone/:id'
									element={<Milestones />}
								/>
								<Route path='/studentdashboard' element={<StudentProfile />} />
								<Route
									path='/studentdashboard/address'
									element={<StudentAddress />}
								/>
								<Route
									path='/studentdashboard/education'
									element={<StudentEducation />}
								/>
								<Route
									path='/studentdashboard/postblog'
									element={<PostBlog />}
								/>
								<Route
									path='/studentdashboard/importantlinks'
									element={<StudentImportantLinks />}
								/>
								<Route
									path='/studentdashboard/supportsession'
									element={<AllLiveSupportSessions />}
								/>
								<Route
									path='/studentdashboard/myCourse'
									element={<MyClasess />}
								/>
								<Route
									path='/studentdashboard/skills'
									element={<StudentSkills />}
								/>
							</Route>
							{/* //Dashboard Nested Routing */}
							<Route
								path='/dashboard'
								element={
									<AdminRoute>
										<Dashboard />
									</AdminRoute>
								}>
								<Route exact path='/dashboard' element={<CoursesList />} />
								<Route path='/dashboard/blogs' element={<AllBlogs />} />
								<Route
									path='/dashboard/addCourses'
									element={<TeacherCourses />}
								/>
								<Route
									path='/dashboard/addnewcourse'
									element={<AddNewCourse />}
								/>
								<Route
									path='/dashboard/autoemailsend'
									element={<AutoEmailSend />}
								/>
								<Route path='/dashboard/promo' element={<PromoCode />} />
								<Route path='/dashboard/postblog' element={<PostBlog />} />
								<Route
									path='/dashboard/newsletterlist'
									element={<NewsletterList />}
								/>
								<Route
									path='/dashboard/postnewsletter'
									element={<PostNewsLetter />}
								/>
								<Route path='/dashboard/mails' element={<Mails />} />
								<Route path='/dashboard/bloglist' element={<BlogList />} />
								<Route path='/dashboard/allusers' element={<AllUsers />} />
								<Route path='/dashboard/allcourses' element={<AllCourses />} />
								<Route
									path='/dashboard/allcourses/:id'
									element={<UploadCourseContent />}
								/>
								<Route
									path='/dashboard/admin/makeAdmin'
									element={<MakeAdmin />}
								/>
								<Route
									path='/dashboard/admin/teacherList'
									element={<TeacherList />}
								/>
								<Route
									path='/dashboard/admin/RecycleBin'
									element={<RecycleBin />}
								/>
								<Route path='/dashboard/admin/history' element={<History />} />
								<Route
									path='/dashboard/admin/userActivity'
									element={<UserActivities />}
								/>
							</Route>
							<Route
								path='/teachersDashboard'
								element={
									<TeacherRoute>
										<TeachersDashboard />
									</TeacherRoute>
								}>
								<Route
									exact
									path='/teachersDashboard/allTeachers'
									element={<AllTeachers />}
								/>
								<Route
									exact
									path='/teachersDashboard/profile'
									element={<MyProfile />}
								/>
								<Route
									path='/teachersDashboard/bestPerformer'
									element={<Bestperformer />}
								/>
								<Route
									path='/teachersDashboard/supportsession'
									element={<SupportSessionList />}
								/>
								<Route
									path='/teachersDashboard/postblog'
									element={<PostBlog />}
								/>
								<Route
									path='/teachersDashboard/myCourse'
									element={<MyCourses />}
								/>
								<Route
									path='/teachersDashboard/singleTeacher/:id'
									element={<TeachersProfile />}
								/>
								<Route
									path='/teachersDashboard/CourseDetails/:id'
									element={<MyCourseDetails />}
								/>
								<Route
									path='/teachersDashboard/addContent/:id'
									element={<UploadMyContent />}
								/>
								<Route
									path='/teachersDashboard/addCourse'
									element={<AddCourse />}
								/>
								<Route
									path='/teachersDashboard/addContent'
									element={<AddContent />}
								/>
								<Route
									path='/teachersDashboard/updateCourse'
									element={<UpdateCourse />}
								/>
								<Route
									path='/teachersDashboard/removeCourse'
									element={<RemoveCourse />}
								/>
								<Route
									path='/teachersDashboard/postNotice'
									element={<PostNotice />}
								/>
							</Route>
							<Route path='/success/:id' element={<Success />} />;
						</Routes>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
			<ChatBot006 />
		</div>
	);
}

export default App;
