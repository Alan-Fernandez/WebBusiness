import { Description } from "@/components/home/Description";
import { Hero } from "@/components/home/Hero";

export default function HomeLayout(
    {children}: {children: React.ReactNode}
) {
    return (
        <main>
            <Hero/>
            <Description/>
            {children}
        </main>
    );
}