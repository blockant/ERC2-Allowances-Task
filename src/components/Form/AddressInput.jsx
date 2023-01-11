import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { connect } from "react-redux";

const AddressInputForm=()=>{
    
    
    return (<>
        <TextField id="outlined-basic" label="Enter Spender Addess" variant="outlined" />
        <Button variant="contained">Check Allowances</Button>
    </>)
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressInputForm)