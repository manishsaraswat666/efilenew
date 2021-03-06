import * as React from "react";
import {Autocomplete,
    Button,
    Card,
    CardContent,
    Checkbox,
    Grid,
    TextareaAutosize,
    TextField,
    Typography} from "@mui/material";
import {AiFillInfoCircle, AiFillQuestionCircle} from "react-icons/ai";
import MenuBox from "./MenuBox";

const Page8 = () => {
    const selectOptions = [
        {label: "Test1"},
        {label: "Test2"}
    ];

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={10} container direction="column" justifyContent="center">
                <Grid item className="mb-5">
                    <MenuBox/>
                </Grid>
                <Grid container justifyContent="center" className="p-2">
                    <Typography style={{textAlign: "center"}} color="#336FBF" fontWeight="bold" fontSize="large">
                        Form 8849 Schedule 6
                        <Typography color="black">
                            Claim credits for Stolen/Destroyed/Sold/Overpayment Vehicles/Tax Overpayment credits
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item className="p-2">
                    <Typography color="#336FBF" fontWeight="bold">
                        Choose from below to e-file the return:
                    </Typography>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Grid container direction="column" className="p-2">
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" noWrap>Loss Event:</Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <TextField id="outlined-basic" label="Loss Event" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <AiFillQuestionCircle fill="#336FBF" fontSize="xx-large"/>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            First used month of the return when you paid the taxes for this vehicle
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <Autocomplete
                                            disablePortal
                                            renderInput={(params) => <TextField {...params} label="Select" />}
                                            options={selectOptions}
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <Autocomplete
                                            disablePortal
                                            renderInput={(params) => <TextField {...params} label="Select" />}
                                            options={selectOptions}
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            VIN
                                            <Typography fontSize="small">Vehicle Identification Number</Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <TextField id="outlined-basic" label="VIN" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Stolen On
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <TextField id="outlined-basic" label="-MM:DD:YYYY-" variant="outlined" size="small" fullWidth />
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Taxable Gross Weight&quot;
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <Autocomplete
                                            disablePortal
                                            renderInput={(params) => <TextField {...params} label="Select" />}
                                            options={selectOptions}
                                            size="small"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <Checkbox />
                                        <Typography className="text-style p-2" fontWeight="bold">
                                            Used for Logging?
                                            <AiFillInfoCircle fontSize="x-large" fill="#336FBF"/>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Explanation to the IRS:
                                            <Typography fontSize="small">
                                                Provide the IRS additional information regarding your Stolen/Destroyed/Sold/ Overpayment
                                                Vehicles/Tax Overpayment Credits in order to process your refund
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid container xs={12} lg={6} className="p-2">
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            minRows={3}
                                            style={{width: "100%"}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className="p-2">
                                    <Grid container xs={12} lg={6} className="text-style p-2">
                                        <Typography fontWeight="bold" style={{display: "inline-block"}}>
                                            <Typography color="#008000" fontSize="large" style={{display: "inline-block"}}>
                                                *
                                            </Typography>
                                            Attach file in support of claim
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="left" xs={12} lg={6} className="p-2">
                                        <TextField
                                            id="outlined-basic"
                                            label="Attachment proof for your sold vehicle"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                        <Typography color="#008000" fontSize="small">
                                            Upload file type: PDF | PNG | JPEG
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="right" direction="row">
                                    <Grid container xs={12} lg={6} className="p-2">
                                        <Typography fontSize="small">
                                            Upload the relevant document of proof in one of the below-mentioned formats,in order
                                            to avoid IRS rejections. For example: If your claim is Sold, submit the transaction
                                            paperwork as a proof.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="right" direction="row" className="p-2">
                                    <Grid container xs={12} lg={3} className="p-2">
                                        <Button
                                            variant="contained" style={{background: "linear-gradient(90deg, #0072BA , #99c928 100%)"}}
                                            fullWidth
                                        >Save this Vehicle</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container className="p-2">
                    <Grid container justifyContent="center" wrap="nowrap">
                        <Button
                            className="m-3" variant="contained" style={{backgroundColor: "#71C12D"}}
                        >Previous Step</Button>
                        <Button
                            className="m-3"
                            variant="contained" style={{backgroundColor: "#2568BB"}}
                        >Next Step</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Page8;