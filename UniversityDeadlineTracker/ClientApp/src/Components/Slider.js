import React, { Component } from "react";
import Slider from "react-slick";

import "./Slider.css";
import "./Carousel.css";
import "./Carousel-theme.css";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowForwardIosRoundedIcon
            className={className}
            style={{
                ...style,
                display: "block",
                width: "40px",
                height: "40px",
                position: "absolute",
                top: "134px",
                right: "-50px",
                color: "#ff9f60",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowBackIosNewRoundedIcon
            className={className}
            style={{
                ...style,
                display: "block",
                width: "40px",
                height: "40px",
                position: "absolute",
                top: "134px",
                left: "-50px",
                color: "#ff9f60",
            }}
            onClick={onClick}
        />
    );
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 1200,
            slidesToShow: 4.3,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className="slider">
                <div className="long-arrow">
                    <div className="little-arrow">
                        <ArrowRightTwoToneIcon fontSize="large" />
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="card-list-container">
                        <span className="date">16.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">17.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">18.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">19.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">20.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">21.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">22.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">23.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">24.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">25.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">26.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">27.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">28.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">29.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">30.11.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">01.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">02.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">03.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">04.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">05.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">06.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">07.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">08.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">09.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">10.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">11.12.2021</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                    <div className="card-list-container">
                        <span className="date">12.12.2012</span>
                        <span className="dot">
                            <FiberManualRecordTwoToneIcon fontSize="small" />
                        </span>
                        <div className="card"></div>
                    </div>
                </Slider>
            </div>
        );
    }
}
