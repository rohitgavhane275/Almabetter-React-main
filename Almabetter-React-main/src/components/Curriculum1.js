import React from 'react'
import CurriculumCard from './CurriculumCard'
import { useState } from 'react'


const IIT = [
  {
    img: './static/img11.svg',
    h6: 'Advanced Certification from E&ICT Academy, IIT Guwahati',
    p: 'Upon successfully completing this program, you’ll earn an Advanced Certiification in Full Stack Web Development that is jointly offered by E&ICT Academy, IIT Guwahati as the Knowledge Partner.'
  },
  {
    img: './static/img12.svg',
    h6: 'Guest lectures from IIT G faculty',
    p: 'Access to lectures from top faculties of IIT Guwahati'
  },
  {
    img: './static/img13.svg',
    h6: '2-day campus immersion at IIT Guwahati (optional)',
    p: 'Experiential learning opportunity at IIT Guwahati campus'
  }
]
const IITimg = "./static/certificate.png"
const AB = [
  {
    img: "./static/img12.svg",
    h6: "Industry Recognised Certification",
    p: "AlmaBetter gives you Industry Recognised Certification as per ISO 27001 with verifiable credentials."
  },
  {
    img: "./static/img13.svg",
    h6: "Credible & Shareable",
    p: "You can add the AlmaBetter Certificate on your Linkedin profile, resume and even share it over Whatsapp or any other social channels."
  },
]
const ABimg = "./static/certificate2.svg"

const Curriculum1 = () => {

  const [data, setdata] = useState(IIT);

  const [img, setimg] = useState(IITimg);

  const Product = [
    {
      id: 'CP',
      head: "INTRODUCTION TO COMPUTER PROGRAMING",
      para: "Add-On : Pair Programing using GitHub AI CoPilot",
      time: "1 Month"
    },
    {
      id: 'DAA',
      head: "DESIGN AND ANALYSIS OF ALGORITHMS",
      para: "Add-On: Coding Mastery with ChatGPT",
      time: "1 Month"
    },
    {
      id: 'FED2',
      head: "Front-end Development",
      para: "Add-On : Creating Intelligent Frontend Solutions with AI Technologies",
      time: "2 Month"
    },
    {
      id: 'FED1',
      head: "Front-end Development",
      para: "Add-On : Creating Intelligent Frontend Solutions with AI Technologies",
      time: "1 Month"
    },
    {
      id: 'SE',
      head: "PRACTICAL SOFTWARE ENGINEERING",
      para: "Add-On : Automate CI/CD process using ChatGPT",
      time: "1 Month"
    },
    {
      id: 'DS',
      head: "DISTRIBUTED SYSTEM WITH HIGH LEVEL DESIGN",
      para: "Specialistion Module - Optional ",
      time: "1 Month"
    },
    {
      id: 'CC',
      head: "CLOUD COMPUTING ",
      para: "Specialistion Module - Optional",
      time: "1 Month"
    },


    {
      id: 'PSE',
      head: "PRODUCT MANGENMENT FOR SOFTWARE ENGINEERS",
      para: "Add-On : Coding mastery with ChatGPT",
      time: "15 Days"
    }

  ]

  return (
    <>
      <div className="container-fluid " style={{ backgroundColor: "rgb(244,231,231)", overflow: "hidden" }} id='Curriculum'>
        <div className='container pt-5'>
          <h2 className=''>Curriculum that makes you job ready</h2>
          <img src="./static/img1.svg" alt="not found" />
          <p>We have designed our curriculum and learning pedagogy based on what top tech
            companies expect when you
            join <br /> them after you graduate. The curriculum focuses on learning by doing including solving real world
            problems and working on real industry level <br /> projects.</p>
        </div>

        <div className="container">
          <div className="header">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className>
                <span className='bg-danger text-light rounded-circle me-2 px-3 py-1'>1
                </span>Foundation Track.</h3>
              <h6 className='text-danger'>6 months.</h6>
            </div>
            <img src="./static/img1.svg" className='ms-5 ps-3' alt='not found' />
            <p className='pt-4 ps-5 fw-bold'>AlmaBetter's Full Stack Data Science course begins by cementing your foundation in Data Science concepts.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <ul className="list-group">
                {
                  Product.map((val) => {
                    return (
                      <>
                        <CurriculumCard id={val.id} head={val.head} para={val.para} time={val.time} />
                      </>
                    )
                  })
                }
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="card p-4" data-aos="fade-up">
                <h5>Topics</h5>
                <ul className="text-secondary m-0">
                  <li><p>Product Management Basics</p></li>
                  <li>Product Management Essentials</li>
                  <li>Product Management Advanced</li>
                  <li>Foundations of Product Management</li>
                  <li>Product Thinking</li>
                  <li>Product Design</li>
                  <li>Product Analysis</li>
                  <li>Product Roadmap</li>
                  <li>Product Discovery</li>
                  <li>Product Prioritisation</li>
                  <li>Product Launch and Marketing</li>
                  <li>Frameworks Used by Product Managers</li>
                  <li>Project Management and Delivery</li>
                  <li>Data Analytics Tools: Practical Usage</li>
                  <li>Advanced-Data Analytics Techniques</li>
                </ul>
              </div>
            </div>
            <button className="btn btn-danger my-2 w-25">EXPLORE CURRICULUM</button>
          </div>
        </div>

        <div className="container py-3">
          <div className="header">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className>
                <span className='bg-danger text-light rounded-circle me-2 px-3 py-1'>2
                </span>Unclock your Web Development Certification</h3>
            </div>
            <img src="./static/img1.svg" className='ms-5 ps-3' alt='not found' />
          </div>
          <div className="d-flex my-3">
            <button className='btn btn-outline-danger mx-3' onClick={() => { setdata(IIT); setimg(IITimg) }}>IIT Guwahati</button>
            <button className='btn btn-outline-danger mx-4' onClick={() => { setdata(AB); setimg(ABimg) }}>AmlaBheeter</button>
          </div>

          <div className="row">
            <div className="col-lg-5 mb-4">
              <ul className="list-group">
                {
                  data.map((val, index) => {
                    return (
                      <li className="list-group-item d-flex align-items-center rounded my-2" key={index} data-aos="fade-right">
                        <img src={val.img} alt="not found" style={{ width: '100px', height: '100px' }} />
                        <div className="container-fluid">
                          <h6>{val.h6}</h6>
                          <p className='text-secondary'>{val.p}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="d-flex align-items-center bg-light rounded p-2 my-2" data-aos="fade-right">
                <img src="./static/calender.svg" className='ms-2 img-fluid' alt="" />
                <p className="text-danger m-0">Cohort Slider Starts On 24th November. Only 28 Slots Left </p>
              </div>

              <div className="d-flex mt-2">
                <button className="btn btn-danger me-3">DOWNLOAD BROCHURE</button>
                <button className="btn btn-outline-danger bg-light text-danger w-50">ENROL NOW</button>
              </div>

            </div>
            <div className="col-lg-7">
              <img className='img-fluid' src={img} alt="certificate" data-aos="fade-left" />
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default Curriculum1
