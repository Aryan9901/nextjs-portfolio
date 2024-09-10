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
		title: "I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.",
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
	{
		id: 1,
		name: "cloudinary",
		img: "/cloud.svg",
		nameImg: "/cloudName.svg",
	},
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



//  projects for 3d screen

export const myProject = [
  {
    title: 'Ecommerce Admin Dashboard',
    desc: 'Introducing our eCommerce Dashboard: React, TypeScript, and SASS-powered. Features interactive data tables, dynamic charts, and a fun guessing game with instant feedback.',
    subdesc:
      'Constructed a responsive dashboard with React Charts and React-Table, which streamlined data visualization and analysis, enhanced user interaction by reducing loading times and improving overall User experience.',
    href: 'https://react-admin-dashboard-ts-p3an.vercel.app/admin/dashboard',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'SASS',
        path: 'assets/sass.png',
      },
      {
        id: 3,
        name: 'Chart Js',
        path: '/assets/Chartjs.svg',
      },
      {
        id: 4,
        name: 'Typescript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'GET TALA WEBSITE',
    desc: "'Gettala' is a stylish website showcasing fruit-based snacks with GSAP animations, echoing taglines such as 'Bringing fruit snacks back to their roots' emphasizing natural flavors and quality ingredients.",
    subdesc:
      'Focused on the concept that snacks should always incorporate fruit, it serves as a platform to showcase and promote fruit-based snacks.',
    href: 'https://aryan9901.github.io/gettala-website/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'GSAP',
        path: '/assets/gsap.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/html.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/javascript.png',
      },
    ],
  },
  {
    title: 'DIGITAL PORTFOLIO',
    desc: 'LMS Digital revolutionizes online education with its modern Learning Management System. Powered by React.js, Node.js, Express.js, and MongoDB',
    subdesc:
      ' It incorporates two major features: a content management system using Admin Panel and context-based authentication and authorization. These features are accompanied by common functionalities found in Digital Profile applications',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];