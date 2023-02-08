import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react'
import EmployeesTable from './EmployeesTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';
import EmployeeForm from './EmployeeForm';
import EmployeeDetails from './EmployeeDetails';


// Dark theme - I only added this here to keep the theme of app bar
const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Employees = () => {

    // Employees state
    const [employees, setEmployees] = useState([]);

    // Shown employee
    const [shownEmployee, setShownEmployee] = useState({})
    const [showEmployeeModal, setShowEmployeeModal] = useState(false);

    // Modal state
    const [modalOpen, setModalOpen] = useState(false);

    // Open modal form function
    const openForm = () => {
        setModalOpen(true);
    }

    // Close modal form function
    const closeForm = () => {
        setModalOpen(false);
    }

    // Submit form from child component
    const submitForm = (employee) => {
        // Additional validation because I somehow can't prevent adding after validation on submitting blank form 
        if(employee.name !== "" && employee.dob !== "" && employee.email !== "" && employee.contactNo !== "" && employee.quickFact !== "") {
            setEmployees([...employees, employee])
            closeForm();
            showEmployee(employee);
        }
    }

    const selectFromTable = (employee) => {
        showEmployee(employee)
    }

    // Show employee on card modal
    const showEmployee = (employee) => {
        setShownEmployee(employee);
        setShowEmployeeModal(true);
    } 

    // Close employee card modal
    const closeShowModal = () => {
        setShowEmployeeModal(false);
    }

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <EmployeeForm submitForm={submitForm} modalOpen={modalOpen} onModalClose={closeForm} />
                <EmployeeDetails modalOpen={showEmployeeModal} onModalClose={closeShowModal} employee={shownEmployee} />

                <div id="employees">
                    <h2>Employees</h2>
                    <p style={{ fontSize:"16px", marginBottom: "40px" }}>This is the table for employees. Add an employee and fill up the form for data to show on the table :D</p>
                    <div className="button-container">
                        <Button onClick={openForm} variant='contained'>Add Employee</Button>
                    </div>
                    <EmployeesTable showEmployeeModal={selectFromTable} employees={employees} />
                </div>
            </ThemeProvider>
        </>
    )
}

export default Employees