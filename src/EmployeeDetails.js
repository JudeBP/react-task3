import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '95vh',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: 'background.paper',
    overflow: 'auto',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EmployeeDetails = ({ employee, onModalClose, modalOpen }) => {

    const closeForm = () => {
        onModalClose();
    }
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={closeForm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <CardContent>
                        <h2 style={{textAlign: 'center'}}>Employee Details</h2>
                        <p>Name: { employee.name }</p>
                        <p>Date of Birth: { employee.dob }</p>
                        <p>Email: { employee.email }</p>
                        <p>Contact No.: { employee.contactNo }</p>
                        <p>Quick Fact: { employee.quickFact }</p>
                    </CardContent>
                    <CardActions sx={{ flexDirection: 'row-reverse' }}>
                        <Button onClick={closeForm} size="small">Close</Button>
                    </CardActions>
                </Card>
            </Modal>
        </>
    )
}

export default EmployeeDetails