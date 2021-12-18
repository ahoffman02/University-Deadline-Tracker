import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./TaskCard.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Status } from "../Utils/Enums";
import { updateUserTask } from "../Utils/Services";

const style = {
    minWidth: 230,
    minHeight: 150,
    backgroundColor: "#b4dce0",
    display: "flex",
    flexDirection: "column",
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

export const TaskCard = (props) => {
    const [status, setStatus] = React.useState(props.status);

    React.useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const handleChange = (event) => {
        setStatus(event.target.checked ? Status.COMPLETED : Status.NEW);
        updateUserTask(props.token, {
            ...props.task,
            task: null,
            status: status,
        });
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
                <div className="cardd">
                    <div className="cardheader">
                        <div align="left" className="subject-dot">
                            {props.subject}
                        </div>
                        <div className="card-title">{props.title}</div>
                    </div>
                    <div className="cardfooter">
                        <div className="card-penalty">
                            {props.penalty} p/week penalty
                        </div>
                        <div className="card-status">
                            {getStatus(status)}
                        </div>
                    </div>
                    <div className="card-description">
                        {props.shortdescription} ...
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
