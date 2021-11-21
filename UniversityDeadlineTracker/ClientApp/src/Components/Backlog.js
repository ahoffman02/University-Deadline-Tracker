import React, {useEffect, useState} from "react";
import "./Backlog.css";

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
import {Default} from "./Default";

const getStatus = (status) => {
    let color = "transparent";
    switch (status) {
        case "New":
            color = "#c7c763";
            break;
        case "Active":
            color = "#006a91";
            break;
        case "Completed":
            color = "#008768";
            break;
    }

    return (
        <div>
            {status}
            <FiberManualRecordIcon
                className="status-dot"
                htmlColor={color}
                fontSize="small"
            />
        </div>
    );
};

const getTitle = (title) => {
    let color = "#853c44";
    // switch (title) {
    //     case "New":
    //         color = "#c7c763";
    //         break;
    //     case "Active":
    //         color = "#006a91";
    //         break;
    //     case "Completed":
    //         color = "#008768";
    //         break;
    // }

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

const Row = (props) => {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow
                className="table-body-row"
                key={row.name}
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
            >
                <TableCell className="table-body-cell">
                    <div size="small" onClick={() => setOpen(!open)}>
                        {open ? (
                            <KeyboardArrowUpIcon
                                className="arrow"
                            />
                        ) : (
                            <KeyboardArrowDownIcon className="arrow"/>
                        )}
                    </div>
                </TableCell>
                <TableCell
                    className="table-body-cell"
                    component="th"
                    scope="row"
                >
                    {row.id}
                </TableCell>
                <TableCell className="table-body-cell" align="center">
                    {row.subject}
                </TableCell>
                <TableCell className="table-body-cell" align="left">
                    {getTitle(row.title)}
                </TableCell>
                <TableCell className="table-body-cell" align="center">
                    {row.deadline}
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
                                {row.description}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

const Backlog = (props) => {
    const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     fetch('task').then(data =>
    //         data.json().then(data =>
    //             setTasks(data.map(task => {
    //                 return {...task, status: 'New'}
    //             }))
    //         ))
    // }, [])

    return (
        <React.Fragment>
            {props.user ?
                <TableContainer component={Paper} className="table-container">
                    <Table
                        // stickyHeader
                        aria-label="collapsible table"
                        sx={{minWidth: 650}}
                        aria-label="simple table"
                        className="table"
                    >
                        <TableHead className="table-head">
                            <TableRow className="table-head-row">
                                <TableCell
                                    className="table-head-cell"
                                    id="arrow"
                                    align="center"
                                />
                                <TableCell
                                    className="table-head-cell"
                                    id="id"
                                    align="center"
                                >
                                    Task ID
                                </TableCell>
                                <TableCell
                                    className="table-head-cell"
                                    id="subject"
                                    align="center"
                                >
                                    Subject
                                </TableCell>
                                <TableCell
                                    className="table-head-cell"
                                    id="title"
                                    align="center"
                                >
                                    Title
                                </TableCell>
                                <TableCell
                                    className="table-head-cell"
                                    id="deadline"
                                    align="center"
                                >
                                    Deadline
                                </TableCell>
                                <TableCell
                                    className="table-head-cell"
                                    id="status"
                                    align="center"
                                >
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {tasks.map((row) => (
                                <Row key={row.id} row={row}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                :
                <Default/>}
        </React.Fragment>
    );
};

export default Backlog;
