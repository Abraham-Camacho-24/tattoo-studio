import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Specialties } from "@/components/Specialties";
import { Statement } from "@/components/Statement";

export default function Home() {
  return <><Navbar /><main><Hero /><About /><Specialties /><Portfolio /><Statement /><Process /><Contact /></main><Footer /></>;
}
