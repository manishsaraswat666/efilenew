import * as React from "react";
import {Card,
    CardContent,
    Grid,
    Typography,
    Box,
    Button,
    Autocomplete, TextField} from "@mui/material";
import {BsFillPersonFill} from "react-icons/bs";
import {BiMenu} from "react-icons/bi";

const Page12 = () => {
    const selectOptions = [
        {label: "Test1"},
        {label: "Test2"}
    ];

    return(
        <>
            <Grid direction="column" container className="mt-5 mb-5">
                <Box
                    className="p-2"
                    style={
                        {
                            background: "linear-gradient(90deg, #0072BA , #99c928 100%)",
                            width: "fit-content",
                            position: "relative",
                            margin: "auto",
                            top: 20
                        }
                    }
                >
                    <Typography color="white" noWrap>
                        DASHBOARD | FILING LIST | BUSINESS LIST |
                        <BsFillPersonFill fill="white" />
                        <BiMenu fill="white" />
                    </Typography>
                </Box>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item className="m-3">
                                    <Typography color="#336FBF" fontWeight="bold">
                                        Form 8849 Schedule 6
                                    </Typography>
                                    <Typography fontSize="small">
                                        Claim credits for Stolen/Destroyed/Sold/Overpayment Vehicles/Tax Overpayment Credits.
                                    </Typography>
                                </Grid>
                                <Grid item className="m-3 mt-0" xs={12}>
                                    <Typography fontWeight="bold">
                                        Choose from below to e-file the return:
                                    </Typography>
                                </Grid>
                                <Grid container xs={12} lg={6} className="m-3 mt-0">
                                    <Grid item xs={6}>
                                        <Typography fontWeight="bold" className="d-inline-block">
                                            Loss Event:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Autocomplete
                                            disablePortal
                                            renderInput={
                                                (params) =>
                                                    <TextField {...params} label="Tax Overpayment Credits" />
                                            }
                                            options={selectOptions}
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container justifyContent="center">
                    <Button
                        className="m-3" variant="contained" style={{backgroundColor: "#85Bc3c"}}
                    >
                        Previous Step
                    </Button>
                    <Button
                        className="m-3"
                        variant="contained" style={{backgroundColor: "#336FBF"}}
                    >
                        Next Step
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Page12;