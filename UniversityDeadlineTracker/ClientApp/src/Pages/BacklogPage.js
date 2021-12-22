import React, {useEffect, useState} from "react";
import "./BacklogPage.css";
import {getUserTasksForUser} from "../Utils/Services";
import {Status} from "../Utils/Enums";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TaskIcon from "@mui/icons-material/Task";
import {Default} from "../Components/Default";

const BacklogPage = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (!props.token) return;

        getUserTasksForUser().then(data => {
            data.sort((a, b) => {
                return new Date(a.task.deadline) - new Date(b.task.deadline);
            });
            setTasks(data);
        })
    }, [props.token])

    const getHeaderCells = () => {
        const header = ["Arrow", "Id", "Subject", "Title", "Deadline", "Status"]
        return header.map(column => {
                return (
                    <TableCell
                        id={column}
                        className="table-head-cell"
                        align="center">
                        {column !== "Arrow" && column}
                    </TableCell>
                )
            }
        )
    }

    return (
        <React.Fragment>
            {props.token ?
                <TableContainer component={Paper} className="table-container">
                    <Table sx={{minWidth: 650}}
                           className="table"
                    >
                        <TableHead className="table-head">
                            {getHeaderCells()}
                        </TableHead>
                        <TableBody className="table-body">
                            {tasks.map((row) => (
                                <Row key={row.id} row={row}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                :
                <Default/>
            }
        </React.Fragment>
    );
};
export default BacklogPage;


const Row = (props) => {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

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

    const getTitle = (title) => {
        let color = "#853c44";
        return (
            <div>
                <TaskIcon
                    className="title-task-icon"
                    htmlColor={color}
                    fontSize="small"
                />
                {title}
            </div>
        );
    };

    return (
        <React.Fragment>
            <TableRow
                className="table-body-row"
                key={row.task.name}
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    }
                }}
            >
                <TableCell className="table-body-cell">
                    <div size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon className="arrow"/>
                            : <KeyboardArrowDownIcon className="arrow"/>}
                    </div>
                </TableCell>
                <TableCell
                    className="table-body-cell"
                    component="th"
                    scope="row"
                >
                    {row.task.id}
                </TableCell>
                <TableCell className="table-body-cell" align="center">
                    {row.task.subject.name}
                </TableCell>
                <TableCell className="table-body-cell" align="left">
                    {getTitle(row.task.title)}
                </TableCell>
                <TableCell className="table-body-cell" align="center">
                    {new Date(row.task.deadline).toDateString()}
                </TableCell>
                <TableCell className="table-body-cell" align="right">
                    {getStatus(row.status)}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{paddingBottom: 0, paddingTop: 0}}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography
                                className="description"
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                {row.task.description}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};
