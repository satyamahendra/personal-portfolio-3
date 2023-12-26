import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
