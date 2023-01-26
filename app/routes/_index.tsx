import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
	title: "HowardCenterPharmacy",
	description: "The Howard Center Pharmacy in Tifton, Georgia!",
});

export default function IndexRoute() {
	return <div>Hello Index Route</div>;
}
