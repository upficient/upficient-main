import ColorPaletteOutline from "@/components/Icons/ColorPaletteOutline";
import FileOutline from "@/components/Icons/FileOutline";
import FileTextOutline from "@/components/Icons/FileTextOutline";
import LogOutOutline from "@/components/Icons/LogOutOutline";
import PeopleOutline from "@/components/Icons/PeopleOutline";
import PersonAddOutline from "@/components/Icons/PersonAddOutline";

export const clickUpData = {
	title: "What is ClickUp Project Management Software?",
	description: `ClickUp is a groundbreaking project management software that offers customizable workflows, seamless integrations with thousands of tools, and powerful AI features for automating tasks and enhancing productivity.
<br/>
It supports efficient team collaboration through shared documents and real-time editing, aiming for continuous innovation to meet the evolving needs of project management.
<br/>
Thousands of business are migrating to ClickUp from legacy tools, so should you!`,
	buttonText: "Learn More",
	buttonLink: "/learn-more",
	boxes: [
		{
			imageSrc: "clickup.webp",
			title: "ClickUp AI",
		},
		{
			imageSrc: "integration.webp",
			title: "Integration Capabilities",
		},
		{
			imageSrc: "team.webp",
			title: "Team Collaboration",
		},
		{
			imageSrc: "customisable.webp",
			title: "Customisable Workflows",
		},
	],
};

export const bgSec = {
	bgSrc: "bgsec1.webp",
	imageSrc: "bgsec1img.webp",
	title: "Join countless businesses thriving with ClickUp!",
	description:
		"Join the ranks of successful teams with our ClickUp expertise. Wondering how? Learn about our services and take the first step on your journey. Start your success story today!",
	buttonText: "Free Consultation",
	buttonLink: "#",
};

export const expertiseData = {
	mainHeading: "Our ClickUp Expertise",
	expertboxes: [
		{
			subTitle: "Intuitive Systems",
			title: "Workspace<br>Architecture",
			description:
				"Craving a workspace that amplifies productivity? Let’s tailor your digital hub! A workspace that evolves with you—sound good?",
			imageSrc: "expert.webp",
			imageAlt: "Expertise Image",
		},
		{
			subTitle: "Dynamic Dashboards",
			title: "Data Visualisation Made Simple",
			description:
				"From tangled data to clear insights with ClickUp dashboards. Ready to see your data in a new light and make informed decisions with ease?",
			imageSrc: "expert1.webp",
			imageAlt: "Expertise Image",
		},
		{
			subTitle: "Accessible Wikis",
			title: "Your All-in-one Docs Hub",
			description:
				"Bring together documents and ideas into a centralized hub, optimizing teamwork and project oversight. Eager for a clutter-free workspace that champions efficiency?",
			imageSrc: "expert2.webp",
			imageAlt: "Expertise Image",
		},
		{
			subTitle: "Seamless Workflows",
			title: "Integrations & Automations",
			description:
				"Transform your daily tasks! Connect, automate, and achieve more. Prepared to elevate your productivity and streamline your workflow for ultimate efficiency?",
			imageSrc: "expert3.webp",
			imageAlt: "Expertise Image",
		},
	],
};

export const partnerData = {
	mainHeading: "Your Partner in Efficiency",
	partnerboxes: [
		{
			title: "Configuration",
			description:
				"We optimize your business via strategic, effective workspace architecture. This brings your number of clicks down to it’s lowest possible value.",
			imageSrc: "effi.webp",
			imageAlt: "test",
			link: "#",
			linkText: "Read More",
		},
		{
			title: "Automation",
			description:
				"We revolutionize your workflow with custom integrations and automation. Transform your productivity and become a leader in your market.",
			imageSrc: "effi1.webp",
			imageAlt: "test",
			link: "#",
			linkText: "Read More",
		},
		{
			title: "Data Visualization",
			description:
				"We empower your team with a dashboard-first approach to project management. Informed decision-making has never been so easy.",
			imageSrc: "effi2.webp",
			imageAlt: "test",
			link: "#",
			linkText: "Read More",
		},
	],
};

export const serviceData = {
	subTitle: "OUR SERVICES",
	mainHeading: "Our Services",
	servicesboxes: [
		{
			title: "ClickUp Onboarding",
			description:
				"Our onboarding process, we make it easy, guiding your team through a tailored setup, training, and support, ensuring you hit the ground running.",
			imageSrc: "serv.webp",
			imageAlt: "test",
			link: "#",
			linkText: "Read More",
		},
		{
			title: "Workspace Optimisation",
			description:
				"We turn issues into opportunities by optimizing for efficiency and visual appeal, seamlessly harmonizing both front-end and back-end.",
			imageSrc: "serv1.webp",
			imageAlt: "test",
			link: "#",
			linkText: "Read More",
		},
		{
			title: "Integrations & Automation",
			description:
				"We seamlessly integrate ClickUp with your tools, optimizing tech stack and automating workflows for workspace efficiency.",
			imageSrc: "serv2.webp",
			imageAlt: "test",
			link: "#",
			linkText: "Read More",
		},
	],
};
export const bgSecLast = {
	bgSrc: "bgsec2.webp",
	imageSrc: "bgsec2img.webp",
	title: "Your Shortcut to Success Starts Here!",
	description:
		"Ready to break free from the export constraints of conventional project management and unleash the full potential of your team? Reach out today, and let's build the foundation for your future successes together!",
	buttonText: "Free Consultation",
	buttonLink: "#",
};

export const menuData = [
	{
		name: "Dashboard",
		link: "/dashboard",
		icon: <ColorPaletteOutline />,
	},
	{
		name: "Blogs",
		icon: <FileTextOutline />,
		link: "/dashboard/blogs",
	},
	{
		name: "Case Studies",
		icon: <FileTextOutline />,
		link: "/dashboard/case-studies",
	},
	{
		name: "Pages",
		icon: <FileOutline />,
		link: "/dashboard/pages",
	},
	{
		name: "301 Redirects",
		link: "/dashboard/redirects",
		icon: <PeopleOutline />,
	},
	{
		name: "Users",
		link: "/dashboard/users",
		icon: <PeopleOutline />,
	},
	{
		name: "Logout",
		link: "/login",
		icon: <LogOutOutline />,
	},
];

export const analyticData = [
	{
		icon: <PersonAddOutline />,
		count: "200+",
		description: "User Register",
	},
	{
		icon: <PersonAddOutline />,
		count: "150+",
		description: "New User",
	},
	{
		icon: <PersonAddOutline />,
		count: "50+",
		description: "Repeat Users",
	},
	{
		icon: <PersonAddOutline />,
		count: "300+",
		description: "Total Sales",
	},
];

export const noticeData = [
	{
		orderTitle: "Order Name 1",
		orderDate: "12/10/2024",
		billingName: "Chris",
		billingAddress: "India",
	},
	{
		orderTitle: "Order Name 2",
		orderDate: "13/10/2024",
		billingName: "Alex",
		billingAddress: "USA",
	},
	{
		orderTitle: "Order Name 3",
		orderDate: "14/10/2024",
		billingName: "Jamie",
		billingAddress: "Canada",
	},
];

export const pageData = [
	{ id: "1", name: "Home", status: "Active", publishDate: "20/Dec/2024" },
	{ id: "2", name: "About", status: "Inactive", publishDate: "15/Dec/2024" },
	{ id: "3", name: "Contact", status: "Active", publishDate: "18/Dec/2024" },
];
