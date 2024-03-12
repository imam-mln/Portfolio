// PROJECTS
import projectOvider from "../assets/projects/project_ovider-bot.jpeg"
import projectHandgunDetection from "../assets/projects/project_handgun-detection.jpeg"
import projectRccarPyduno from "../assets/projects/project_rccar-pyduno.jpeg"
import projectGrabScrape from "../assets/projects/project_grabfood-scrape.jpeg"
import projectAsco from "../assets/projects/project_asco.jpeg"
// GRAPHIC DESIGN
import designAcodemia from "../assets/graphic-design/design_acodemia.jpeg"
import designPlanetPisang from "../assets/graphic-design/design_planet-pisang.jpeg"
import designSosiologi from "../assets/graphic-design/design_uwks-sosiologi.jpeg"
import designSuperOoze from "../assets/graphic-design/design_super-ooze.jpeg"

const datas = {
	projects: [
		{
			title: "Ovider Bot",
			desc: "One Video Downloader (Ovider) is telegram bot which can download video from many platform",
			img: projectOvider,
			link: "https://t.me/ovider_bot",
			tools: ["Nodejs", "Telegraf", "Rest API", "Axios"],
		},
		{
			title: "Handgun Detection",
			desc: "Handgun detection model with dataset in Roboflow platform",
			img: projectHandgunDetection,
			link: "https://universe.roboflow.com/imam-maulana-b4xet/handgun-detection-jtvaj",
			tools: ["Python", "YOLOv8", "Roboflow"],
		},
		{
			title: "Remote Control Car Using Hand Gesture",
			desc: "Remote control car using hand gesture with 5 instruction like forward, backward, turn left, turn right and stop",
			img: projectRccarPyduno,
			link: "https://youtu.be/p1pCyFHBK9c",
			tools: ["Arduino", "Python", "OpenCV", "CV Zone"],
		},
		{
			title: "Grab Merchant's Web Scraper",
			desc: "Scrape data from Grab's Website import data to Dodolans App",
			img: projectGrabScrape,
			link: "https://github.com/imam-mln/grab-scraper-dodolans",
			tools: ["Python", "Rest API", "Beautiful Soup"],
		},
		{
			title: "Automated Stock Control (ASCO)",
			desc: "The solution of stock checking with automation computer vision exatcly object detection",
			img: projectAsco,
			link: "https://youtu.be/ITJhbdym_10",
			tools: ["Python", "YOLOv5-Lite", "Roboflow", "Streamlit"],
		},
	],
	graphicDesign: [
		{
			title: "Acodemia",
			desc: 'Acodemia is taken from "Academia" a company or startup that focuses on training and developing competencies in programming-based digital technology.',
			img: designAcodemia,
			link: "https://www.instagram.com/p/C3wxEBcrP33/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
		{
			title: "Planet Pisang",
			desc: "Planet Pisang (Banana Planet) is trademark that focuses on banana food processing with a main variant of chocolate flavor.",
			img: designPlanetPisang,
			link: "https://www.instagram.com/p/C3wvP5RLqAn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
		{
			title: "UWKS Sosiology",
			desc: "The solution of stock checking with automation computer vision exatcly object detection",
			img: designSosiologi,
			link: "https://www.instagram.com/p/CueDTz_xPlz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
		{
			title: "Super Ooze",
			desc: "The solution of stock checking with automation computer vision exatcly object detection",
			img: designSuperOoze,
			link: "https://www.instagram.com/p/CcsKQp-P6Sg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		},
	],
}

export default datas
