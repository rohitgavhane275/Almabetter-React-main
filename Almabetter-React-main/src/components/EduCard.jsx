import React, { useRef } from 'react'
import Slider from 'react-slick';
import './index.css';

const cardArray = [
  {
    name: 'Neeraj Sharma',
    title: "Senior Software Engineer",
    image: './images/image.png',
    image2: './images/image (1).png',
  },
  {
    name: 'Sandeep G',
    title: "Software Developer",
    image: './images/image (2).png',
    image2: './images/image (3).png',
  },
  {
    name: 'Sri Srinivasan',
    title: "Junior Developer",
    image: './images/image (4).png',
    image2: './images/image.webp',
  },
  {
    name: 'Ashish Barnwal',
    title: "Product Development Engineer",
    image: './images/image (5).png',
    image2: './images/image (6).png',
  },
  {
    name: 'Ishan Negi',
    title: "Co-Creator",
    image: './images/image (7).png',
    image2: './images/image.jpg',
  },
  {
    name: 'Monesh Venkul Vommi',
    title: "Assistant Professor",
    image: './images/image (8).png',
    image2: './images/image (9).png',
  },
  {
    name: 'Jyotirmoy Deb',
    title: "Frontend Developer",
    image: './images/image (10).png',
    image2: './images/image (11).png',
  },
  {
    name: 'Gaurav Thadani',
    title: "Software Engineer",
    image: './images/image (12).png',
    image2: './images/image (13).png',
  },
  {
    name: 'Bijay Singh',
    title: "Principal Engineer",
    image: './images/image (14).png',
    image2: './images/image (15).png',
  },
  {
    name: 'Saurabh Kango',
    title: "Insights Program Manager",
    image: './images/image (16).png',
    image2: './images/image (17).png',
  },
  {
    name: 'Kapil Raghuwanshi',
    title: "Senior Software Engineer",
    image: './images/image (18).png',
    image2: './images/image (19).png',
  },
  {
    name: 'Ajay Kumar',
    title: 'Assistant Vice President',
    image: './images/image (20).png',
    image2: './images/image (21).png',
  },
  {
    name: 'Harshul Srivastava',
    title: 'Instructor',
    image: './images/image (22).png',
    image2: './images/image (23).png',
  },
  {
    name: 'Atul Kumar',
    title: 'Senior Associate',
    image: './images/image (24).png',
    image2: './images/image (25).png',
  },
];

const Card1 = () => {
  const res = useRef('rgb(240,0,55)');
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    rows: 2,
    // autoplay: true,
    // autoplaySpeed: 1000,
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
      <div>
        <div className="next-slick-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow ">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }} stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
        </div>
      </div>
    ),
  };
  return (
    <>
      <Slider {...settings}>

        {

          cardArray.map((val, index) => {

            if (index % 4 < 2) {
              res.current = 'rgb(240,0,55)';
            }
            else {
              res.current = 'black';
            }
            return (
              <>
                <div className="col-12 p-3">
                  <div className="card position-relative rounded " style={{ overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px ' }}>
                    <div className="text-light" style={{ backgroundColor: res.current }}>
                      <h5 className="fw-bold ps-3 pt-3">{val.name}</h5>
                      <p className="fw-bold ps-3">{val.title}</p>
                    </div>
                    <div className='col-6 p-2'>
                      <img src={val.image} alt="not found" className="rounded_img" />
                      <i className="fa-brands fa-linkedin card_icons"></i>
                    </div>
                    <div className="col-6 p-2">
                      <img src={val.image2} className="img-fluid" style={{ height: '50px' }} alt='not found' />
                    </div>
                  </div>
                </div>
              </>
            )
          }

          )

        }
        {/* {
    cardArray2.map((val2)=>{
        return(
          <>
         
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="card shadow-sm smallCards">
              <div className="card-img-top text-light card_top">
                <h5 className="fw-bold ps-3 pt-3">{val2.name}</h5>
                <p className="fw-bold ps-3">{val2.title}</p>
              </div>
              <div>
                <img src={`images/${val2.image}`} alt="" className="rounded_img" />
              </div>
              <div className="card_body_div">
                <img src={`images/${val2.image2}`} className="card-body card_body_img" />
                <i className="fa-brands fa-linkedin card_icons"></i>

              </div>
            </div>
          </div>
          </>
        )
      }

      )
} */}

      </Slider>


    </>
  )
}
export default Card1;