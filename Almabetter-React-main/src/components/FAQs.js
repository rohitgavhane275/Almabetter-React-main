import React, { useState } from "react";

const admission = [
    {
        id: "ad1",
        question: "Who can enrol in AlmaBetter's courses?",
        answer: "AlmaBetter's courses are open to anyone willing to learn Data Science or Web Development. There is no limitation with respect to your educational background or stage of study. The courses are especially beneficial for people who have jobs or other commitments and therefore want to learn Data Science or Web Development from scratch at their own pace. Also, if you have already done some courses and want our placement services, you can enrol in any of the two courses and be eligible for placements just after clearing the competency tests. To summarise, the courses are suitable for everyone, whether you are a beginner with no coding background or you have done some courses in either Data Science or Web Development."
    },
    {
        id: "ad2",
        question: "What is a Cohort?",
        answer: "A cohort is just another term used for a batch."
    },
    {
        id: "ad3",
        question: "Is there any selection test for enroling in AlmaBetter's courses?",
        answer: "No, you don't have to take any test to enrol in the Full Stack courses that we offer."
    },
    {
        id: "ad4",
        question: "Is it mandatory to opt for the AlmaX Career Track?",
        answer: "No, it is not mandatory to opt for AlmaX Career Track. However, we strongly recommend opting for AlmaX Career Track in order to get placed amongst our 700+ hiring partners."
    },
]

const certification = [
    {
        id: "cer1",
        question: "What is the benefit of getting advanced certification from IIT Guwahati ?",
        answer: "This prestigious certification is looked upon very highly by companies’ recruiters and your chances of getting shortlisted when you apply for jobs increases significantly, especially if you have this certification added to your resume. This is a very effective way to stand out from the crowd. This certification will help you further in your career in terms of appraisals, promotions, and negotiating for higher salaries."
    },
    {
        id: "cer2",
        question: "Will I get access to lectures from IIT Guwahati faculty ?",
        answer: "Yes you'll get access to guest lectures from IIT Guwahati faculty. These insightful lectures will help you get access to and learn from cutting edge research going on at IITs. You will also be upto date with the latest technological progress."
    },
    {
        id: "cer3",
        question: "Will I get to visit IIT Guwahati campus ?",
        answer: "After successfully completing this program you will be eligible for a 2-day campus immersion program at IIT Guwahati. Under this program, you will visit the IIT Guwahati campus and take a tour of various incubation centres, labs and have discussions with IIT Guwahati faculty."
    },
]

const learning = [
    {
        id: "len1",
        question: "What if I am not able to clear a particular module?",
        answer: "You will get multiple attempts to clear a module."
    },
    {
        id: "len2",
        question: "What is the duration of the courses AlmaBetter offers?",
        answer: "The Full Stack courses that AlmaBetter offers has a flexible duration. It can be completed between 1-12 months depending upon your commitment and prior knowledge of data science and web development concepts. For example, if you have already done some courses and are confident about your knowledge, you can directly attempt the competency tests. But if you are new to these fields, it may take 8-12 months for mastering all the concepts to become job-ready."
    },
    {
        id: "len3",
        question: "How will I be evaluated during the my learning journey?",
        answer: "Once you learn and master a particular module, you will be required to attempt a set of tests which includes Competency Challenges, Capstone Projects, and Mentored Mock Interviews. Once you pass all of these, you will be considered competent. Overall, you have to master 6 modules in Full Stack Data Science and 5 modules in Full Stack Web Development."
    },
    {
        id: "len4",
        question: "How much attendance is mandatory for completing any of the 2 courses?",
        answer: "There is no mandatory attendance policy for the courses we offer. You can attend live sessions or can learn at your own pace by watching recorded lectures."
    },
    {
        id: "len5",
        question: "What are the criteria for passing the Pro Program?",
        answer: "Passing a module means completing Competency Challenges, Capstone Projects and Mentored Mock Interview."
    },
    {
        id: "len6",
        question: "Will I be given certificate upon course completion?",
        answer: "Yes, post completion, you will get a certificate post completion of your course. Additionally, you will also get completion certificate for successfully clearing milestone competency tests."
    },
    {
        id: "len7",
        question: "How will the doubts be resolved if I'm learning at my own pace?",
        answer: "In case you have any doubts or difficulties in learning, you can post your questions on the ‘Discussion forum’ or ‘Community channel’ and it will be resolved quickly. You’ll get exposure to those right after enrolling in the program."
    },
    {
        id: "len8",
        question: "How will the doubts be resolved if I'm learning through Live courses?",
        answer: "In the Live courses, along with discussion forums and community platforms, you can also ask your doubts on the go in your live classes. In addition to that, there will also be a Live chat room open for doubt clarification on your learning platform."
    }
]

const payAfter = [
    {
        id: "pay1",
        question: "What is an Income Share Agreement?",
        answer: "Income Share Agreement or ISA is a legal agreement, which ensures that students share a pre-determined part of their income as Career Services Fee. Our career services fee for Certification Program Premium Plan is INR 2,40,000 (10,000 per month up to 24 months) and for Iconic Plan is INR 1,50,000 (10,000 per month up to 15 months) if you get a job job above 5 LPA. You only need to sign ISA if you become eligible and opt to for AlmaX Career Services. Career Services Fee is to be paid only after placement."
    },
    {
        id: "pay2",
        question: "When do students sign the ISA?",
        answer: "The students are required to sign the ISA once they have completed their learning, earned the course completion certificate and have opted for the assured career services through AlmaX."
    },
    {
        id: "pay3",
        question: "When do I have to start paying as per the ISA?",
        answer: "You will start paying from the time you get your first salary after joining a high-paying job. The threshold salary has been kept at 5 LPA for the Data Science program and the Web Development program. You don't pay us anything until you get a job that pays above the minimum threshold salary."
    },
    {
        id: "pay4",
        question: "Can I see a copy of the ISA?",
        answer: "Yes, of course. As you go through our ISA signing process, you will be counseled on various aspects of the ISA and a copy of the same will be made available to you at the end."
    },
    {
        id: "pay5",
        question: "How will AlmaBetter verify my income?",
        answer: "As per the ISA, you will be legally bound to furnish all the income relevant documents such as Offer Letter, Salary Slips, Income Tax Returns, Bank Statements, etc. to AlmaBetter."
    },
    {
        id: "pay6",
        question: "Will I have to pay if I quit the job or get fired?",
        answer: "If you voluntarily quit your job, your payment will continue. However, in cases of forced termination, your payment will be paused and we will put our best efforts to get you another job as soon as possible. However, any such arrangement will involve a third party (a NBFC) and a non-payment window will be provided only after proper verification."
    },
    {
        id: "pay7",
        question: "What will happen if I do not pay any EMI?",
        answer: "At AlmaBetter, fee collection happens through a NBFC partner. In case of voluntary non-payments, the NBFC will initiate legal action to recover the pending payments. Also, this will negatively impact your credit score."
    }
]

const placements = [
    {
        id: "plc1",
        question: "When will the placement process start?",
        answer: "Once you clear the Foundation Track you will earn a certificate of completion. Post that you will be eligible to participate in our placement drive called AlmaX."
    },
    {
        id: "plc2",
        question: "What are competency tests?",
        answer: "Competency challenges are meant to solidify your theoretical learning."
    },
    {
        id: "plc4",
        question: "How many hiring partners does AlmaBetter have?",
        answer: "We currently have partnerships with 700+ companies ranging from high growth startups to large MNCs. However, owing to our relentless pursuit, this number keeps increasing as we have been constantly expanding our network of hiring partners."
    },
    {
        id: "plc5",
        question: "What if I want to get a job only in my hometown?",
        answer: "Your job location is solely based on the opportunities available with our hiring partners. We do not commit anything with respect to a preferential job location."
    },
    {
        id: "plc6",
        question: "Does AlmaBetter provide job-switching assistance?",
        answer: "Yes, we believe in making a long-term relationship with our students. We will help you in switching jobs through our strong alumni network."
    },
    {
        id: "plc7",
        question: "How do you ensure placements for students who come from non-technical background?",
        answer: "Well, at AlmaBetter, we have an equivalent number of students from non-technical backgrounds who are enthusiastic about learning Data Science & Web Development, and building a career in the same field from scratch. Therefore, our curriculum is designed in such a way that it caters to the doubts of a layman as well as an expert in this subject. So, do not hesitate to begin your learning journey because you’ll be taught everything beginning from the high school concepts to the advanced level. And once you complete the program, you will have sufficient knowledge to tackle the interviews as well as have hands-on experience in multiple projects which you can add to your profile."
    },
]


const FAQs = () => {
    const [activedClass, setActivedClass] = useState("admission");

    const handleClass = () => {
        if (activedClass === "admission")
            return admission
        else if (activedClass === "certification")
            return certification
        else if (activedClass === "learning")
            return learning
        else if (activedClass === "payAfter")
            return payAfter
        else
            return placements
    }

    return (
        <>
            <div className="container py-3" id="FAQs">
                <h3 className="pb-0">Clear all your basic doubts with these FAQs</h3>
                <img src="./static/img1.svg" className="pt-0" alt="underline" />
                <div className="d-flex flex-wrap">
                    <button
                        className="btn btn-outline-success m-2"
                        onClick={() => { setActivedClass("admission"); }}>
                        Admission
                    </button>
                    <button
                        className="btn btn-outline-success m-2 "
                        onClick={() => { setActivedClass("certification"); }}>
                        IIT G Certification
                    </button>
                    <button
                        className="btn btn-outline-success m-2 "
                        onClick={() => { setActivedClass("learning"); }}>
                        Learning
                    </button>
                    <button
                        className="btn btn-outline-success m-2 "
                        onClick={() => { setActivedClass("payAfter"); }}>
                        Play After Placement
                    </button>
                    <button
                        className="btn btn-outline-success m-2 "
                        onClick={() => { setActivedClass("placements"); }}>
                        Placements
                    </button>
                </div>
            </div>

            <div className="container">
                <ul className="list-group">
                    {
                        handleClass().map((val, index) => {
                            return (
                                <>
                                    <li className="list-group-item shadow rounded my-2" key={index} data-aos="fade-up">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 style={{ maxWidth: '80%', margin: '0px' }}>{val.question}</h5>
                                            <span className='text-secondary fw-bold fs-3' data-bs-toggle="collapse" data-bs-target={`#${val.id}`}
                                                aria-expanded="false" aria-controls="collapseExample" style={{
                                                    cursor: 'pointer', textAlign: 'center', width: '20px'
                                                }}
                                                onClick={(e) => {
                                                    if (e.target.innerText === "+") {
                                                        e.target.innerText = "-";
                                                    } else {
                                                        e.target.innerText = "+";
                                                    }
                                                }}
                                            >+</span>
                                        </div>
                                        <div className="collapse text-secondary fw-bold" id={val.id}>
                                            <p>{val.answer}</p>
                                        </div>
                                    </li>

                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default FAQs;
