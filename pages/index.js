// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import AreasComunes from "../components/AreasComunes/AreasComunes";
import ConoceAreasComunes from "../components/AreasComunes/ConoceAreasComunes";
import Brochure from "../components/Brochure/Brochure";
import { Contacto } from "../components/Contacto/Contacto";
import { DistribucionInterna } from "../components/DistribucionInterna/DistribucionInterna";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layouts/Layout";
import { Ubicacion } from "../components/Ubicacion/Ubicacion";

export default function HomePage() {
   return (
		<Layout >
			<Header />
			<Hero />
			<Brochure />
			<ConoceAreasComunes />
			<AreasComunes />
			<DistribucionInterna />
			<Ubicacion />
			<Contacto />

			<Footer />
		</Layout>
		
		
   );
}
