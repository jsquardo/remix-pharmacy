import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => {
	const description = `Learn Remix and laugh at the same time!`;
	return {
		charset: "utf-8",
		description,
		keywords: "HowardCenter,Pharmacy",
		// "twitter:image": "https://remix-jokes.lol/social.png",
		// "twitter:card": "summary_large_image",
		// "twitter:creator": "@remix_run",
		// "twitter:site": "@remix_run",
		// "twitter:title": "Remix Jokes",
		// "twitter:description": description,
	};
};

export default function Root() {
	return (
		<html lang="en">
			<head>
				<Links />
				<Meta />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
