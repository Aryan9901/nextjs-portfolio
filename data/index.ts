export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Testimonials", link: "#testimonials" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "I prioritize client collaboration, fostering open communication ",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh] xl:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-72 xl:min-h-60",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently Building a Project Management Springboot Application",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Ecommerce Admin Dashboard",
		des: "Introducing ECommerce Dashboard. Features interactive data tables, dynamic charts, and a fun guessing game with instant feedback.",
		img: "/p1.png",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
		link: "/ui.earth.com",
		url: "https://react-admin-dashboard-ts-p3an.vercel.app/admin/dashboard",
	},
	{
		id: 2,
		title: "GET TALA WEBSITE",
		des: "'Gettala' is a stylish website showcasing fruit-based snacks with GSAP animations, echoing taglines such as 'Bringing fruit snacks back to their roots,' emphasizing natural flavors and quality ingredients.",
		img: "/p2.gif",
		iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
		link: "/ui.yoom.com",
		url: "https://aryan9901.github.io/gettala-website/",
	},
	{
		id: 3,
		title: "PromptChat",
		des: "AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.",
		img: "/p3.png",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
		link: "/ui.aiimg.com",
		url: "https://promptchat-two.vercel.app/",
	},
	{
		id: 4,
		title: "Tours & Travel",
		des: "A sleek travel website featuring dynamic GSAP animations, highlighting unique destinations and inspiring wanderlust with captivating visuals.",
		img: "/p4.png",
		iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
		link: "/ui.apple.com",
		url: "https://aryan9901.github.io/Tours-Travel-Website/",
	},
];

export const testimonials = [
	{
		quote: "Working with Aryan at Tryidol Technologies was a fantastic experience. His dedication, quick learning, and ability to deliver high-quality results were impressive. Adrian's enthusiasm for development made him a valuable asset to our project. If you're looking to enhance your website and brand, Aryan is a great partner.",
		name: "Saif Ali",
		title: "Co-Founder at Tryidol Technologies",
	},
	{
		quote: "Aryan brought professionalism and a strong work ethic to our team. His ability to quickly grasp complex concepts and deliver exceptional results was a highlight of our collaboration. For anyone looking to improve their digital presence, Aryan is the developer you need.",
		name: "Kunjan Kumar",
		title: "Employer at Droit",
	},
	{
		quote: "Aryan brought professionalism and a strong work ethic to our team. His ability to quickly grasp complex concepts and deliver exceptional results was a highlight of our collaboration. For anyone looking to improve their digital presence, Aryan is the developer you need.",
		name: "Dhanush S",
		title: "Employer at Droit",
	},
];

export const companies = [
	// {
	// 	id: 1,
	// 	name: "cloudinary",
	// 	img: "/cloud.svg",
	// 	nameImg: "/cloudName.svg",
	// },
	// {
	// 	id: 2,
	// 	name: "appwrite",
	// 	img: "/app.svg",
	// 	nameImg: "/appName.svg",
	// },
	// {
	// 	id: 3,
	// 	name: "HOSTINGER",
	// 	img: "/host.svg",
	// 	nameImg: "/hostName.svg",
	// },
	// {
	// 	id: 4,
	// 	name: "stream",
	// 	img: "/s.svg",
	// 	nameImg: "/streamName.svg",
	// },
	// {
	// 	id: 5,
	// 	name: "docker.",
	// 	img: "/dock.svg",
	// 	nameImg: "/dockerName.svg",
	// },
];

export const workExperience = [
	{
		id: 1,
		title: "Full Stack Developer Intern - Tryidol Technologies",
		desc: "Build a CRM Application for vehicle rental services, streamlining processes for efficient bill generation and client management.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Full Stack Developer Intern - Droit",
		desc: "Engineered consultancy software using Curable to optimize online consultations and enhance digital healthcare services.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "Hackhazards Hackathon Winner",
		desc: "Secured 1st place out of 150 participants in a hackathon by employing a combination of hardware and software solutions.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Shiksha Arpan Web Developent Challenge",
		desc: "Designed & Developed the UI for the Enhanced Tutor Matching Algorithm feature, ensuring ease of use and clarity in presenting tutor recommendations to users.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		url: "https://www.github.com/Aryan9901",
	},
	{
		id: 2,
		img: "/resumeicon.png",
		url: "https://docs.google.com/document/d/1NeD8bx9ZrwGaHReo_p_CuBP3IWihBpC6V5zwXJ1PTmE/edit?usp=sharing",
	},
	{
		id: 3,
		img: "/link.svg",
		url: "https://www.linkedin.com/in/agaryan",
	},
];
