import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
	title: "HowardCenterPharmacy",
	description: "The Howard Center Pharmacy in Tifton, Georgia!",
});

export default function IndexRoute() {
	return <div>Hello Index Route</div>;
}
