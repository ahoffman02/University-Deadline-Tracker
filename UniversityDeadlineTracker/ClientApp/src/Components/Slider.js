import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./Slider.css";
import "./Slider-Carousel.css";
import "./Slider-Carousel-theme.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import {TaskCard} from "./TaskCard";

const NextArrow = (props) => {
    const {className, style, onClick} = props;
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

const PrevArrow = (props) => {
    const {className, style, onClick} = props;
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

export const SimpleSlider = (props) => {
    const [groupedTasks, setGroupedTasks] = useState([]);

    React.useEffect(() => {
        let tasks = props.tasks?.reduce(function (r, a) {
            r[a.task.deadline] = r[a.task.deadline] || [];
            r[a.task.deadline].push(a);
            return r;
        }, Object.create(null));

        setGroupedTasks(
            Object.values(tasks).sort((a, b) => {
                return (
                    new Date(a[0].task.deadline) - new Date(b[0].task.deadline)
                );
            })
        );
    }, [props.tasks]);

    const getSettings = () => {
        var initial = 0;
        for (var i = 0; i < groupedTasks.length; i++) {
            if (new Date(groupedTasks[i][0].task.deadline) >= Date.now()) {
                initial = i;
                break;
            }
        }

        return {
            dots: true,
            infinite: false,
            speed: 1200,
            slidesToShow: 4.3,
            slidesToScroll: 2,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            initialSlide: initial + 1,
        };
    };

    const getCardList = () => {
        return groupedTasks.map((day) => {
            const taskCards = day.map((item) => (
                <TaskCard
                    item={item}
                />
            ));
            return (
                <div className="card-list-container">
                    <span className="date">
                        {new Date(day[0].task.deadline).toDateString()}
                    </span>
                    <span className="dot">
                        <FiberManualRecordTwoToneIcon fontSize="small"/>
                    </span>
                    {taskCards}
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            {props.tasks.length > 0 ?
                <div className="slider-component">
                    <div className="long-arrow">
                        <div className="little-arrow">
                            <ArrowRightTwoToneIcon fontSize="large"/>
                        </div>
                    </div>
                    <Slider {...getSettings()}>{getCardList()}</Slider>
                </div>
                :
                <div className="slider-no-tasks">
                    No tasks? Go get <span className="orange">drunk</span>!
                </div>
            }
        </React.Fragment>
    );
};
export default SimpleSlider;
