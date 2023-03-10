import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import {Header} from '../header/Header';

export function Layout(){
return(
	<div >
	<Header/>
	<Suspense fallback={null}>
		<Outlet/>
	</Suspense>
	</div>
)
};