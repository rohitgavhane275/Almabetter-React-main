import React, { useEffect } from 'react';
import { useState } from 'react';
import CardFee from './CardFee';


const primTF = ["Intensive data science curriculum covering basic to advance concepts", "100+ Live Data Science classes, 8 PM to 10:30 PM. Lifetime access to all the class recordings", "20+ capstone data science projects & 1000+ coding problems and assessments", "50+ mock interviews with dedicated career coaches", "AlmaBetter Certification"];
const iconTF = ["All benefits of premium plan", "Advanced Certification from E&ICT Academy, IIT Guwahati", "Guest lectures from IIT G faculty", "2-day campus immersion at IIT Guwahati (optional)", "Deadline extension of 6 months for entering AlmaX Career Track", "Dual Certification"];

const primCF = ["Complete foundation track successfully.", "Clear AB-CAT and sign Income Share Agreement for AlmaX Admission.", "Complete AlmaX Career Track successfully", "Get placed in top product companies. Pay INR 10,000 per month after you get a job above 5 LPA"];
const iconCF = ["Complete foundation track successfully.", "Clear AB-CAT and sign Income Share Agreement for AlmaX Admission.", "Complete AlmaX Career Track successfully", "Get placed in top product companies. Pay INR 10,000 per month after you get a job above 5 LPA"];

const TF = [
    {
        name: 'Premium',
        amount: 'Rs. 30,000',
        emi: '3333',
        info: primTF
    },
    {
        name: 'Iconic',
        amount: 'Rs. 60,000',
        emi: '5000',
        info: iconTF
    }
]

const CF = [
    {
        name: 'Premium',
        amount: 'Rs. 2,40,000',
        emi: '10000',
        info: primCF
    },
    {
        name: 'Iconic',
        amount: 'Rs. 1,50,000',
        emi: '10000',
        info: iconCF
    }
]

const ProgramFee = () => {

    const [data, setdata] = useState(TF)


    useEffect(() => {
        if (data === TF) {
            document.querySelector('.TF').classList.add('active')
            document.querySelector('.CF').classList.remove('active')
        }
        else {
            document.querySelector('.TF').classList.remove('active')
            document.querySelector('.CF').classList.add('active')
        }

    }, [data])

    return (<>
        <center className='container-fluid mt-5' id='Program-Fee'>
            <h2>Program Fee</h2>
            <img src="./static/red lines.svg" alt="not found" />

            <div className="container d-flex justify-content-around py-3">
                <button className='btn TF' onClick={() => setdata(TF)}>Tuition Fee</button>
                <button className='btn CF' onClick={() => setdata(CF)}>Career Services Fee</button>
                {/* <NavLink to="Tuitionfee" style={{ color: 'black', textDecoration: 'none', fontWeight: '700' }}>Tuition Fee</NavLink> */}
                {/* <NavLink to="Careerfee" style={{ color: 'black', textDecoration: 'none', fontWeight: '700' }}>Career Services Fee</NavLink> */}
            </div>

            <center className="container d-flex flex-wrap justify-content-evenly">

                {
                    data.map((val, index) => {
                        return (
                            <>
                                <CardFee key={index} cardName={val.name} cardAmount={val.amount} cardEmi={val.emi} cardInfo={val.info} />
                            </>
                        )
                    })
                }
            </center>


        </ center>
    </>
    );
};

export default ProgramFee;