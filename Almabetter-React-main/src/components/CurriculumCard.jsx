import React from 'react'
import "./Cards.css"

const Cards = (props) => {
    const { id, head, para, time } = props

    // const ids = ['cp', 'DAA', 'FED2', 'FED1', 'SE', 'DS', 'CC', 'PSE'];

    // const [active, setactive] = setState("CP");

    // useEffect(() => {
    //     document.getElementById(active).style.borderLeft('2px solid red');
    // }, [active])

    // useEffect(() => {
    //     ids.forEach(element => {
    //         element === active ? document.getElementById(active).style.borderLeft('2px solid red') : document.getElementById(element).style.borderLeft('2px solid white')
    //     });
    // })
    return (
        <>

            <li className="list-group-item rounded d-flex justify-content-between p-3 my-2" style={{ cursor: 'pointer' }} id={id} data-aos="fade-right">
                <div className="d-flex flex-column w-75">
                    <p className="text-secondary m-0">{head}</p>
                    <p className="text-black m-0">{para}</p>
                </div>
                <div className="d-flex">
                    <i className="fa-solid fa-clock-rotate-left me-1 mt-1" style={{ color: "#428a38" }}></i>
                    <p className="text-success">{time}</p>
                </div>
            </li>
        </>
    )
}

export default Cards
