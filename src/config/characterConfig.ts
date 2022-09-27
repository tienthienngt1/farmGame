import { genConfig } from "react-nice-avatar";
//config character style
export const characterConfig = genConfig({
	sex: "woman",
	faceColor: "#F9C9B6",
	earSize: "big",
	eyeStyle: "circle",
	noseStyle: "round",
	mouthStyle: "peace",
	shirtStyle: "hoody",
	glassesStyle: "none",
	hairColor: "#000",
	hairStyle: "thick",
	hatStyle: "none",
	hatColor: "#506AF4",
	eyeBrowStyle: "up",
	shirtColor: "#F4D150",
	bgColor: "#FFEDEF",
});

//config image style
const images = (() => {
	let images: string[];
	images = [];
	const context = require.context(
		"src/assets/character",
		false,
		/\.(png|jpe?g)$/
	);
	context
		.keys()
		.map(
			(item: any, key: number) =>
				(images[item.replace("./", "").replace(".png", "")] =
					context(item))
		);
	return images;
})();

export const characterStyleList = [
	{
		title: "Sex",
		img: [
			{
				alt: "man",
				url: images["man"],
				config: {
					sex: "man",
					eyeBrowStyle: "up",
					hairStyle: "thick",
				},
			},
			{
				alt: "woman",
				url: images["woman"],
				config: {
					sex: "woman",
					eyeBrowStyle: "upWoman",
					hairStyle: "womanLong",
				},
			},
		],
	},
	{
		title: "Ear Style",
		img: [
			{
				alt: "ear_small",
				url: images["ear_small"],
				config: { earSize: "small" },
			},
			{
				alt: "ear_big",
				url: images["ear_big"],
				config: { earSize: "big" },
			},
		],
	},
	{
		title: "Hair Style",
		img: [
			{
				alt: "hair normal",
				url: images["hair_normal"],
				config: { hairStyle: "normal" },
			},
			{
				alt: "hair mohawk",
				url: images["hair_mohawk"],
				config: { hairStyle: "mohawk" },
			},
			{
				alt: "hair thick",
				url: images["hair_thick"],
				config: { hairStyle: "thick" },
			},
			{
				alt: "hair woman long",
				url: images["hair_womanlong"],
				config: { hairStyle: "womanLong" },
			},
			{
				alt: "hair woman short",
				url: images["hair_womanshort"],
				config: { hairStyle: "womanShort" },
			},
		],
	},
	{
		title: "Hat Style",
		img: [
			{
				alt: "hat beanie",
				url: images["hat_beanie"],
				config: { hatStyle: "beanie" },
			},
			{
				alt: "hat turban",
				url: images["hat_turban"],
				config: { hatStyle: "turban" },
			},
			{
				alt: "hat none",
				url: images["man"],
				config: { hatStyle: "none" },
			},
		],
	},
	{
		title: "Eye Style",
		img: [
			{
				alt: "eye circle",
				url: images["eye_circle"],
				config: { eyeStyle: "circle" },
			},
			{
				alt: "eye oval",
				url: images["eye_oval"],
				config: { eyeStyle: "oval" },
			},
			{
				alt: "eye smile",
				url: images["eye_smile"],
				config: { eyeStyle: "smile" },
			},
		],
	},
	{
		title: "Glasses Style",
		img: [
			{
				alt: "glasses none",
				url: images["glasses_none"],
				config: { glassesStyle: "none" },
			},
			{
				alt: "glasses round",
				url: images["glasses_round"],
				config: { glassesStyle: "round" },
			},
			{
				alt: "glasses square",
				url: images["glasses_square"],
				config: { glassesStyle: "square" },
			},
		],
	},
	{
		title: "Mouse Style",
		img: [
			{
				alt: "mouse laugh",
				url: images["mouse_laugh"],
				config: { mouthStyle: "laugh" },
			},
			{
				alt: "mouse peace",
				url: images["mouse_peace"],
				config: { mouthStyle: "peace" },
			},
			{
				alt: "mouse smile",
				url: images["mouse_smile"],
				config: { mouthStyle: "smile" },
			},
		],
	},
	{
		title: "Nose Style",
		img: [
			{
				alt: "nose long",
				url: images["nose_long"],
				config: { noseStyle: "long" },
			},
			{
				alt: "nose short",
				url: images["nose_short"],
				config: { noseStyle: "short" },
			},
			{
				alt: "nose round",
				url: images["nose_round"],
				config: { noseStyle: "round" },
			},
		],
	},
	{
		title: "Shirt Style",
		img: [
			{
				alt: "shirt hoody",
				url: images["shirt_hoody"],
				config: { shirtStyle: "hoody" },
			},
			{
				alt: "shirt polo",
				url: images["shirt_polo"],
				config: { shirtStyle: "polo" },
			},
			{
				alt: "shirt short",
				url: images["shirt_short"],
				config: { shirtStyle: "short" },
			},
		],
	},
];

export const characterColorList = [
	{
		title: "Face Color",
		config: "faceColor",
	},
	{
		title: "Hair Color",
		config: "hairColor",
	},
	{
		title: "Hat Color",
		config: "hatColor",
	},
	{
		title: "Shirt Color",
		config: "shirtColor",
	},
	{
		title: "Background Color",
		config: "bgColor",
	},
];
