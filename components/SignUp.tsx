import * as React from "react";
import {Button, Box, Grid, TextField, Typography} from "@mui/material";
import Link from "next/link";

const SignUp = () => {
    return(
        <>
            <Grid container direction="column" justifyContent="center">
                <Grid container justifyContent="center">
                    <Typography color="white" fontWeight="normal" fontSize="xx-large">
                        Register Here
                    </Typography>
                </Grid>
                <Grid item>
                    <Box minWidth={500} style={{backgroundColor: "white"}} className="p-3 pb-2">
                        <Grid container direction="row" spacing={2}>
                            <Grid item className="mb-3">
                                <Typography>First Name</Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    style={{width: 350}}
                                />
                            </Grid>
                            <Grid item className="mb-3">
                                <Typography>Last Name</Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    style={{width: 350}}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={2}>
                            <Grid item className="mb-3">
                                <Typography>Email ID</Typography>
                                <TextField
                                    type="email"
                                    required
                                    id="outlined-required"
                                    label="Email ID"
                                    style={{width: 350}}
                                />
                            </Grid>
                            <Grid item className="mb-3">
                                <Typography>Phone Number</Typography>
                                <TextField
                                    type="number"
                                    required
                                    id="outlined-required"
                                    label="Phone Number"
                                    style={{width: 350}}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={2}>
                            <Grid item>
                                <Typography>Password</Typography>
                                <TextField
                                    type="password"
                                    required
                                    id="outlined-required"
                                    label="Password"
                                    style={{width: 350}}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Confirm Password</Typography>
                                <TextField
                                    type="password"
                                    required
                                    id="outlined-required"
                                    label="Confirm Password"
                                    style={{width: 350}}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained" style={{backgroundColor: "#99c928"}}
                            >Register</Button>
                            <Button
                                className="m-3"
                                variant="contained" style={{backgroundColor: "#0072BA"}}
                            >Cancel</Button>
                        </Grid>
                        <Grid item className="mb-2">
                            <Typography>Already have an account? <Link href="/login"><a>Click here to login</a></Link></Typography>
                        </Grid>
                    </Box>
                    <Grid container justifyContent="center" className="mt-3">
                        <Typography color="white" fontSize="small">Copyright &#169; 2022</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUp;