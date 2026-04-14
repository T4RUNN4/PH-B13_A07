import Hero from "../components/unique/Hero";
import StatusContainer from "../components/unique/StatusContainer";

export default function HomePage() {
    return (
        <main className="py-40 px-60 bg-[#F8FAFC]">
            <Hero></Hero>
            <StatusContainer></StatusContainer>
            <div class="divider"></div>
        </main>
    )
}