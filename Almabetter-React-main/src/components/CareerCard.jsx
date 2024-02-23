import React from 'react';
import Slider from 'react-slick';
import './index.css';

const careercardArray = [
  {
    para: 'If you want to turn your skills into a professional experience, AlmaBetter is the place you can trust.',
    image_emp: './images/image (26).png',
    name_emp: 'Rohan Mote',
    job_role1: 'Technical Operations',
    job_role2: 'Web Developer',
    image_logo: './images/image (1).jpg'
  },
  {
    para: 'AlmaBetter provides incredible features like one-on-one mentorship sessions and multiple coding problems to prepare you to appear in interviews with big companies.',
    image_emp: './images/image (27).png',
    name_emp: 'Sri Srinivasan',
    job_role1: 'Fresher',
    job_role2: 'Junior Developer',
    image_logo: './images/image (2).jpg'
  },
  {
    para: 'This shows what I have learned at AlmaBetter is at par with the current industry standards. ',
    image_emp: './images/image (28).png',
    name_emp: 'Vaibhav Thorat',
    job_role1: 'Fresher',
    job_role2: 'Software Developer',
    image_logo: './images/image (29).png'
  },
  {
    para: 'Whatever I have worked on during my job, I have already trained for it during my time at AlmaBetter, making my work and life easier. ',
    image_emp: './images/image (30).png',
    name_emp: 'Isaac Ebenezer',
    job_role1: 'Fresher (BSC)',
    job_role2: 'Software Developer',
    image_logo: './images/image (31).png'
  },
  {
    para: ' At AlmaBetter, I could focus on learning without worrying about the financial aspect.',
    image_emp: './images/image (32).png',
    name_emp: 'Vicky Singh',
    job_role1: 'Associate Network Engineer',
    job_role2: 'Senior Consultant Technology',
    image_logo: './images/image (33).png'
  },
  {
    para: 'I love my Full Stack Developer role because I learned everything needed for a high-growth career at AlmaBetter.',
    image_emp: './images/image (34).png',
    name_emp: 'Sahil Wadhwa',
    job_role1: 'Fresher (BSC)',
    job_role2: 'Consultant',
    image_logo: './images/image (35).png'
  },
  {
    para: 'I would recommend this unique platform to freshers or anyone looking to switch careers to IT and build a high-growth career. ',
    image_emp: './images/image (36).png',
    name_emp: 'Bapugouda Biradar',
    job_role1: 'Graphic Designer',
    job_role2: 'Software Developer',
    image_logo: './images/image (37).png'
  },
  {
    para: '"I understood how to aptly present myself in an interview and started getting more responses from the interviewing parties in the placement workshop."',
    image_emp: './images/image (38).png',
    name_emp: 'Kartikey Sharma',
    job_role1: 'Software Developer Trainee',
    job_role2: 'Software Engineer',
    image_logo: './images/image (3).jpg'
  },
  {
    para: 'AlmaBetter is an excellent platform if you are looking for a place to have a robust learning experience.',
    image_emp: './images/image (39).png',
    name_emp: 'Javed Ansari',
    job_role1: 'Assistant Customer Relationship Manager',
    job_role2: 'Software Developer',
    image_logo: './images/image (31).png'
  },
  {
    para: 'The interactive sessions with such supportive mentors helped me understand Web Development easily.',
    image_emp: './images/image (40).png',
    name_emp: 'Vishal Chauhan',
    job_role1: 'Life Insurance Specialist',
    job_role2: 'Software Developer',
    image_logo: './images/image (31).png'
  },
  {
    para: 'I came across AlmaBetter’s Full Stack Web Development course, and now I work for a reputed company.',
    image_emp: './images/image (40).png',
    name_emp: 'Kaushal Kishore',
    job_role1: 'Fresher (BSc)',
    job_role2: 'Software Developer',
    image_logo: './images/image (31).png'
  },
  {
    para: 'AlmaBetter helped me get a complete knowledge of data science and also helped me secure the perfect job',
    image_emp: './images/image (41).png',
    name_emp: 'Ankit Patel',
    job_role1: 'CRS Professional',
    job_role2: 'Big Data Engineer',
    image_logo: './images/image (42).png'
  },
  {
    para: 'I interacted with mentors almost every day, and the best part is that all the educators and mentors at AlmaBetter are industry pioneers working in leading companies.',
    image_emp: './images/image (40).png',
    name_emp: 'Amit Saini',
    job_role1: 'Fresher (BSc)',
    job_role2: 'Software Developer',
    image_logo: './images/image (31).png'
  },
];
const CareerCard = () => {

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          // nextArrow: false,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
    ],

    nextArrow: (
      <div className=''>
        <div className="next-slick-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" className='rotate-180' stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }} stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
        </div>
      </div>
    ),
  };
  return (
    <>

      <Slider {...settings}>
        {
          careercardArray.map((val) => {
            return (
              <>
                <div className="col-12 my-4 ps-3">
                  <div className="card shadow-sm position-relative">
                    <div className="bg-dark text-light rounded-3 pb-4 career_card_top ">
                      <p className=" p-3"><i>{val.para}</i></p>
                    </div>
                    <div>
                      <img src={val.image_emp} alt="" className="career_rounded_img" />
                    </div>
                    <div className="card-body ">
                      <h5 className='py-2'>{val.name_emp}</h5>
                      <p>{val.job_role1}</p>
                      <img src="./images/arrowDown.svg" alt="" />
                      <p>{val.job_role2}</p>
                      <div className="row">
                        <div className="col-5">
                          <img src={val.image_logo} className='img-fluid' style={{ height: "70px" }} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )

          })}


      </Slider>

    </>
  )
}
export default CareerCard;
