import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = ()=>{
        const {roomId} = useParams()
        const myMeeting =async(element)=>{
            const appID = 431373082;
            const serverSecret = "6222f11d1d566ddb8a7dde729cc2218b";
            const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString()," ");
            const zc=ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container:element,
                sharedLinks:[
                    {
                        name: 'Copy Link',
                        url:`http://localhost:3000/room/${roomId}`
                    }
                ],
                scenario:{
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton:true,
            });
        };
    return (
        <div>
        <div ref={myMeeting}/>
    </div>
    )
};
export default RoomPage;