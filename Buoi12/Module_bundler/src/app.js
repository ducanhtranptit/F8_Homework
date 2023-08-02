import { Header } from "./Components/Header";
import { Footer } from "./Components/Header";
import { Home } from "./Pages/Home";
import { result } from "./Pages/bai3";

const app = document.querySelector(".app");
app.innerHTML = `
${Header()}
${Home()}
${result}
${Footer()}
`;
