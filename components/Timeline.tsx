'use client';

import { ScrollTimeline } from "@/components/ui/scroll-timeline";
import { Rocket, Code, Users, Award, Calendar } from "lucide-react";

const milestones = [
    {
        year: "Feb 15",
        title: "Registration Opens",
        description: "Mission control accepts new cadets.",
        icon: <Rocket className="w-4 h-4 text-gold-500" />,
    },
    {
        year: "Mar 01",
        title: "Opening Ceremony",
        description: "Launch sequence initiated.",
        icon: <Calendar className="w-4 h-4 text-gold-500" />,
    },
    {
        year: "Mar 02",
        title: "Hacking Starts",
        description: "Engage warp drive.",
        icon: <Code className="w-4 h-4 text-gold-500" />,
    },
    {
        year: "Mar 03",
        title: "Mentoring Sessions",
        description: "Guidance from the stars.",
        icon: <Users className="w-4 h-4 text-gold-500" />,
    },
    {
        year: "Mar 04",
        title: "Submission Deadline",
        description: "Re-entry into atmosphere.",
        icon: <Award className="w-4 h-4 text-gold-500" />,
    },
    {
        year: "Mar 05",
        title: "Winners Announced",
        description: "Mission accomplished.",
        icon: <Award className="w-4 h-4 text-gold-500" />,
    },
];

const Timeline = () => {
    return (
        <section id="schedule" className="py-20 relative z-10">
            <ScrollTimeline
                events={milestones}
                title="Flight Trajectory"
                subtitle="Follow the mission path"
                lineColor="bg-gold-500/30"
                activeColor="bg-gold-500"
                cardVariant="outlined"
                cardEffect="glow"
            />
        </section>
    );
};

export default Timeline;
