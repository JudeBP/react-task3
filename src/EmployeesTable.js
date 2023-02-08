import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const EmployeesTable = ({ employees, showEmployeeModal }) => {
    return (
        <>
            <TableContainer component={Paper} style={{ marginTop: '40px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contact No.</TableCell>
                            <TableCell>Quick Facts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((row, index) => (
                            <TableRow
                                onClick={() => showEmployeeModal(row)}
                                className="table-row"
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.dob}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.contactNo}</TableCell>
                                <TableCell>{row.quickFact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default EmployeesTable