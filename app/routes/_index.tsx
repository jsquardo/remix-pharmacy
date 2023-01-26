import type { LinksFunction, MetaFunction } from "@remix-run/node";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
	title: "HowardCenterPharmacy",
	description: "The Howard Center Pharmacy in Tifton, Georgia!",
});

export default function IndexRoute() {
	return <div className="font-inter">Hello Index Route</div>;
}
