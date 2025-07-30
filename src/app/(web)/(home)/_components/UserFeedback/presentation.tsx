import FeedBackCard from "../FeedBackCard/presentation"

export default function UserFeedback() {

    const feedbacks = [
        {
            content: "Udemy helped me gain the confidence to pursue a new career in tech. The structured courses and hands-on projects made all the difference.",
            authorName: "Emily Zhang",
        },
        {
            content: "Through online learning, I was able to upskill while working full-time. The flexibility and quality of instruction were unmatched.",
            authorName: "James O'Connor",
        },
        {
            content: "What I appreciated most was how practical the content was. I applied what I learned immediately at work and got promoted within 3 months.",
            authorName: "Fatima Al-Karim",
        },
        {
            content: "Learning new skills on Udemy reignited my passion for design. It reminded me why I love building beautiful, user-centered experiences.",
            authorName: "Carlos Mendes",
        },
    ]

    return (
        <div className="flex flex-col w-full p-4 gap-5">
            <h1 className="text-2xl font-bold">See what others are achieving through learning.</h1>
            <div className="flex flex-col sm:flex-row gap-4">
                {feedbacks.map((feedback) => (
                    <FeedBackCard key={feedback.authorName} content={feedback.content} authorName={feedback.authorName} />
                ))}
            </div>
        </div>
    )
}