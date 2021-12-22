import * as React from "react";
import "./TaskCard.css";
import {updateUserTask} from "../Utils/Services";
import {Status} from "../Utils/Enums";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
    minWidth: 230,
    minHeight: 150,
    backgroundColor: "#b4dce0",
    display: "flex",
    flexDirection: "column",
};

export const TaskCard = (props) => {
    const [status, setStatus] = React.useState(props.item.status);

    React.useEffect(() => {
        setStatus(props.item.status);
    }, [props.item.status]);

    const handleChange = (event) => {
        updateUserTask({
            ...props.task,
            task: null,
            status: event.target.checked ? Status.COMPLETED : Status.NEW,
        }).then(r => {
        });
        setStatus(event.target.checked ? Status.COMPLETED : Status.NEW);
    };

    const getStatus = (status) => {
        let color = "transparent";
        let text = "";
        switch (status) {
            case Status.NEW:
                color = "#c7c763";
                text = "New";
                break;
            case Status.ACTIVE:
                color = "#006a91";
                text = "Active";
                break;
            case Status.COMPLETED:
                color = "#008768";
                text = "Completed";
                break;
        }

        return (
            <div>
                {text}
                <FiberManualRecordIcon
                    className="card-status-dot"
                    htmlColor={color}
                    fontSize="small"
                />
            </div>
        );
    };

    return (
        <Card
            sx={{
                maxWidth: 230,
                maxHeight: 150,
                marginBottom: "15px",
                borderRadius: "20px",
                position: "relative",
            }}
        >
            <CardContent sx={style}>
                <div className="card-component">
                    <div className="cardheader">
                        <div align="left" className="subject-dot">
                            {props.item.task.subject.name}
                        </div>
                        <div className="card-title">
                            {props.item.task.title}
                        </div>
                    </div>
                    <div className="cardfooter">
                        <div className="card-penalty">
                            {props.item.task.penalty} p/week penalty
                        </div>
                        <div className="card-status">{getStatus(status)}</div>
                    </div>
                    <div className="card-description">
                        {props.item.task.description.substring(0, 200)} ...
                    </div>
                    <FormControlLabel
                        className="card-checkbox"
                        control={
                            <Checkbox
                                size="small"
                                checked={status === Status.NEW ? false : true}
                                onChange={handleChange}
                                sx={{
                                    color: "#02af8e",
                                    "&.Mui-checked": {
                                        color: "#02af8e",
                                    },
                                }}
                            />
                        }
                        label="Completed"
                    />
                </div>
            </CardContent>
        </Card>
    );
};
