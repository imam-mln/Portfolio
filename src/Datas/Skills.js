import {FaNodeJs, FaReact, FaBootstrap, FaPython} from "react-icons/fa"
import {SiTailwindcss, SiAntdesign, SiDaisyui, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiArduino, SiMikrotik, SiLinuxmint, SiDebian} from "react-icons/si"
import {DiPhp} from "react-icons/di"

const datas = {
	webDev: [
		{
			title: "NodeJS",
			icon: FaNodeJs,
			lvl: 4,
		},
		{
			title: "ReactJS",
			icon: FaReact,
			lvl: 3,
		},
		{
			title: "Tailwindcss",
			icon: SiTailwindcss,
			lvl: 5,
		},
		{
			title: "Bootstrap",
			icon: FaBootstrap,
			lvl: 4,
		},
		{
			title: "Daisy UI",
			icon: SiDaisyui,
			lvl: 5,
		},
		{
			title: "Ant Design",
			icon: SiAntdesign,
			lvl: 3,
		},
	],
	graphicDesign: [
		{
			title: "Photoshop",
			lvl: 3,
			icon: SiAdobephotoshop,
		},
		{
			title: "Illustrator",
			lvl: 1,
			icon: SiAdobeillustrator,
		},
		{
			title: "Canva",
			lvl: 5,
			icon: SiCanva,
		},
	],
	addtional: [
		{
			title: "Python",
			lvl: 3,
			icon: FaPython,
		},
		{
			title: "Arduino",
			lvl: 3,
			icon: SiArduino,
		},
		{
			title: "PHP",
			lvl: 2,
			icon: DiPhp,
		},
		{
			title: "Mikrotik",
			lvl: 3,
			icon: SiMikrotik,
		},
		{
			title: "Linux Mint",
			lvl: 3,
			icon: SiLinuxmint,
		},
	],
}

export default datas
