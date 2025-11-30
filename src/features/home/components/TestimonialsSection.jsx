import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => (
    <section id="testimonials" className="mt-16 sm:mt-20">
        <div className="text-center mb-8">
            <p className="text-xs font-semibold text-[#FF6767] tracking-[0.22em] uppercase">
                Love from users
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                The moment your team feels the difference.
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            <TestimonialCard
                quote="We replaced our old, clunky task tool with CloudTasks in a week. The live board and smooth UI made adoption painless."
                name="Aarav Mehta"
                role="Product Lead, SaaS startup"
            />
            <TestimonialCard
                quote="Animations are subtle but powerful — you always feel where a task is going. It literally reduced confusion in standups."
                name="Sneha Sharma"
                role="Engineering Manager"
                highlight
            />
            <TestimonialCard
                quote="For a remote team spread across time zones, the real-time sync and reminders keep everyone aligned without extra meetings."
                name="Rohan Gupta"
                role="Founder, Agency"
            />
        </div>
    </section>
);


export default TestimonialsSection