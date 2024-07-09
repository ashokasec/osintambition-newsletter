import React from 'react'

const FAQ = () => {

    const data = [
        {
            question: "Why should I subscribe?",
            answer: "We deliver all OSINT community updates in your inbox for free. Our editor wastes his time, so that you can save your time from scrolling the social media in the name of staying updated with OSINT community."
        },
        {
            question: "Who should subscribe?",
            answer: "Anyone interested in OSINT will love our newsletter. Subscribe for free to receive our Wednesday Updates and Top 10 Series, and learn about new paid subscriber content in the future."
        },
        {
            question: "Do you have paid subscriptions?",
            answer: "As of today, we don’t offer any paid subscription, you can read all our posts for free. We have plans to launch a paid subscription in future, but your favorite series, Wednesday Updates and Top 10 Series will still be free. We will be introducing some new type of content for our lovely paid subscribers."
        },
        {
            question: "Do you allow guest posting?",
            answer: "We don't currently accept guest posts, but if you're interested, contact dheerajydv19@proton.me."
        },
        {
            question: "Do you accept sponsorships?",
            answer: "Yes, we accept sponsorships from companies offering products or services relevant to our OSINT audience. Email your proposal with details and budget to dheerajydv19@proton.me."
        },
    ]

    return (
        <div className="max-w-[85rem] px-8 py-10 mb-16 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-start sm:text-center mb-10 lg:mb-20">
                <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-neutral-200">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                    {
                        data.map((e: any, index: number) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    {e.question}
                                </h3>
                                <p className="mt-2 text-gray-600 text-[14px] lg:text-base dark:text-neutral-400">
                                    {e.answer}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ