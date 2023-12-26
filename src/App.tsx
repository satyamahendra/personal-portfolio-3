import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Techstack from "./pages/Skills/Techstack";
import Code from "./pages/Skills/Code";
import UIUX from "./pages/Skills/UIUX";
import Communication from "./pages/Skills/Communication";
import Environment from "./pages/Skills/Environment";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="/skills" element={<Skills />}>
					<Route index element={<Techstack />} />
					<Route path="code" element={<Code />} />
					<Route path="uiux" element={<UIUX />} />
					<Route path="communication" element={<Communication />} />
					<Route path="environment" element={<Environment />} />
				</Route>
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
