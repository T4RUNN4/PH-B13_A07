import { use } from "react";
import FriendsContainer from "../components/unique/FriendsContainer";
import Hero from "../components/unique/Hero";
import StatusContainer from "../components/unique/StatusContainer";

const friendsPromise = fetch("/friends.json").then(res => res.json());

export default function HomePage() {
    const friends = use(friendsPromise);
    let total = 0, ontrack = 0, overdue = 0, thisMonth = 0;


    return (
        <main className="p-40 bg-[#F8FAFC]">
            <Hero></Hero>
            <StatusContainer></StatusContainer>
            <div class="divider my-10"></div>
            <FriendsContainer friends={friends}></FriendsContainer>
        </main>
    )
}