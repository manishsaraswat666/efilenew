export async function middleware (){
    try {
        // // if (!process.env.JWT_SECRET)
        // // throw new Error("JWT_SECRET is not defined");
        // const response = NextResponse.next();
        // let token = req["headers"].get("authorization");
        //
        // if(
        //     typeof token != "undefined" &&
        //     token != null
        // ){
        //     const barerheader = token;
        //     const baerer = barerheader.split(" ");
        //     token = baerer[1];
        // }
        //
        // if (token){
        //     const token_details = jwt.verify(token, process.env.JWT_SECRET);
        //
        //     if (!token_details){
        //         Error("Authentication failed");
        //     } else {
        //         return response;
        //     }
        // } else {
        //     Error("Authentication token required");
        // }
    } catch (error:any){
        // return new Response(error.message, {status: 401});
    }
}