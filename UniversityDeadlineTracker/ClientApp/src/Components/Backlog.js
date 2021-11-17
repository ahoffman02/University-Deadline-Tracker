import React from "react";
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

function createData(id, subject, title, deadline, status, description) {
    return { id, subject, title, deadline, status, description };
}

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
            ></FiberManualRecordIcon>
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
            ></TaskIcon>
            {title}
        </div>
    );
};

const rows = [
    createData(
        1,
        "PPD",
        getTitle("Lab1 - MPI Varianta1 + Varianta2"),
        "22.11.2021",
        getStatus("New"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lectus dolor. Vestibulum dignissim justo quis sodales congue. Donec luctus gravida est, eu aliquet sem tincidunt placerat. Ut condimentum magna in est elementum tempus. Duis et elit dictum, ultrices erat nec, finibus orci. Integer volutpat est ligula, ac laoreet turpis consectetur vitae. Phasellus consectetur ex ac massa feugiat aliquam. Etiam arcu lorem, pellentesque quis euismod eu, finibus in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla velit mi, volutpat ultrices elit imperdiet vel. Donec volutpat bibendum sem nec elementum. Donec in aliquam nisl. Fusce congue blandit neque non pellentesque. Pellentesque dictum faucibus cursus. Mauris eu mauris a diam fermentum vulputate."
    ),
    createData(
        2,
        "LFTC",
        getTitle("Lab2 - Automat finit"),
        "22.11.2021",
        getStatus("Active"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lectus dolor. Vestibulum dignissim justo quis sodales congue. Donec luctus gravida est, eu aliquet sem tincidunt placerat. Ut condimentum magna in est elementum tempus. Duis et elit dictum, ultrices erat nec, finibus orci. Integer volutpat est ligula, ac laoreet turpis consectetur vitae. Phasellus consectetur ex ac massa feugiat aliquam. Etiam arcu lorem, pellentesque quis euismod eu, finibus in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla velit mi, volutpat ultrices elit imperdiet vel. Donec volutpat bibendum sem nec elementum. Donec in aliquam nisl. Fusce congue blandit neque non pellentesque. Pellentesque dictum faucibus cursus. Mauris eu mauris a diam fermentum vulputate."
    ),
    createData(
        3,
        "MA",
        getTitle("Lab3 - Project idea Native + Non-native implementation"),
        "23.11.2021",
        getStatus("Completed"),
        "a"
    ),
    createData(
        4,
        "VR",
        getTitle("Lab4 - Complete template with code"),
        "24.11.2021",
        getStatus("Active"),
        "b"
    ),
    createData(
        5,
        "PDAV",
        getTitle("Lab5 - RGB to YUV Encoder + Decoder "),
        "25.11.2021",
        getStatus("Active"),
        "c"
    ),
    createData(
        1,
        "PPD",
        getTitle("Lab1 - MPI Varianta1 + Varianta2"),
        "22.11.2021",
        getStatus("New"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lectus dolor. Vestibulum dignissim justo quis sodales congue. Donec luctus gravida est, eu aliquet sem tincidunt placerat. Ut condimentum magna in est elementum tempus. Duis et elit dictum, ultrices erat nec, finibus orci. Integer volutpat est ligula, ac laoreet turpis consectetur vitae. Phasellus consectetur ex ac massa feugiat aliquam. Etiam arcu lorem, pellentesque quis euismod eu, finibus in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla velit mi, volutpat ultrices elit imperdiet vel. Donec volutpat bibendum sem nec elementum. Donec in aliquam nisl. Fusce congue blandit neque non pellentesque. Pellentesque dictum faucibus cursus. Mauris eu mauris a diam fermentum vulputate."
    ),
    createData(
        2,
        "LFTC",
        getTitle("Lab2 - Automat finit"),
        "22.11.2021",
        getStatus("Active"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lectus dolor. Vestibulum dignissim justo quis sodales congue. Donec luctus gravida est, eu aliquet sem tincidunt placerat. Ut condimentum magna in est elementum tempus. Duis et elit dictum, ultrices erat nec, finibus orci. Integer volutpat est ligula, ac laoreet turpis consectetur vitae. Phasellus consectetur ex ac massa feugiat aliquam. Etiam arcu lorem, pellentesque quis euismod eu, finibus in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla velit mi, volutpat ultrices elit imperdiet vel. Donec volutpat bibendum sem nec elementum. Donec in aliquam nisl. Fusce congue blandit neque non pellentesque. Pellentesque dictum faucibus cursus. Mauris eu mauris a diam fermentum vulputate."
    ),
    createData(
        3,
        "MA",
        getTitle("Lab3 - Project idea Native + Non-native implementation"),
        "23.11.2021",
        getStatus("Completed"),
        "a"
    ),
    createData(
        4,
        "VR",
        getTitle("Lab4 - Complete template with code"),
        "24.11.2021",
        getStatus("Active"),
        "b"
    ),
    createData(
        5,
        "PDAV",
        getTitle("Lab5 - RGB to YUV Encoder + Decoder "),
        "25.11.2021",
        getStatus("Active"),
        "c"
    ),
    createData(
        1,
        "PPD",
        getTitle("Lab1 - MPI Varianta1 + Varianta2"),
        "22.11.2021",
        getStatus("New"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lectus dolor. Vestibulum dignissim justo quis sodales congue. Donec luctus gravida est, eu aliquet sem tincidunt placerat. Ut condimentum magna in est elementum tempus. Duis et elit dictum, ultrices erat nec, finibus orci. Integer volutpat est ligula, ac laoreet turpis consectetur vitae. Phasellus consectetur ex ac massa feugiat aliquam. Etiam arcu lorem, pellentesque quis euismod eu, finibus in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla velit mi, volutpat ultrices elit imperdiet vel. Donec volutpat bibendum sem nec elementum. Donec in aliquam nisl. Fusce congue blandit neque non pellentesque. Pellentesque dictum faucibus cursus. Mauris eu mauris a diam fermentum vulputate."
    ),
    createData(
        2,
        "LFTC",
        getTitle("Lab2 - Automat finit"),
        "22.11.2021",
        getStatus("Active"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lectus dolor. Vestibulum dignissim justo quis sodales congue. Donec luctus gravida est, eu aliquet sem tincidunt placerat. Ut condimentum magna in est elementum tempus. Duis et elit dictum, ultrices erat nec, finibus orci. Integer volutpat est ligula, ac laoreet turpis consectetur vitae. Phasellus consectetur ex ac massa feugiat aliquam. Etiam arcu lorem, pellentesque quis euismod eu, finibus in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla velit mi, volutpat ultrices elit imperdiet vel. Donec volutpat bibendum sem nec elementum. Donec in aliquam nisl. Fusce congue blandit neque non pellentesque. Pellentesque dictum faucibus cursus. Mauris eu mauris a diam fermentum vulputate."
    ),
    createData(
        3,
        "MA",
        getTitle("Lab3 - Project idea Native + Non-native implementation"),
        "23.11.2021",
        getStatus("Completed"),
        "a"
    ),
    createData(
        4,
        "VR",
        getTitle("Lab4 - Complete template with code"),
        "24.11.2021",
        getStatus("Active"),
        "b"
    ),
    createData(
        5,
        "PDAV",
        getTitle("Lab5 - RGB to YUV Encoder + Decoder "),
        "25.11.2021",
        getStatus("Active"),
        "c"
    ),
];

const Row = (props) => {
    const { row } = props;
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
                            <KeyboardArrowDownIcon className="arrow" />
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
                    {row.title}
                </TableCell>
                <TableCell className="table-body-cell" align="center">
                    {row.deadline}
                </TableCell>
                <TableCell className="table-body-cell" align="right">
                    {row.status}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
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

const Backlog = () => {
    return (
        <TableContainer component={Paper} className="table-container">
            <Table
                // stickyHeader
                aria-label="collapsible table"
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                className="table"
            >
                <TableHead className="table-head">
                    <TableRow className="table-head-row">
                        <TableCell
                            className="table-head-cell"
                            id="arrow"
                            align="center"
                        ></TableCell>
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
                    {rows.map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Backlog;
