import RoomCalendar from "./RoomCalendar";
import Button from "../../components/Button/Button"
// import { formatDistance } from "date-fns";
// import { useState } from "react";


const RoomReservation = ({ room }) => {
    console.log(room);
    
    // total days * price
    // const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]);
    // console.log(totalDays);
    
    // total price calculation
    // const totalPrice = totalDays * room?.price;

    // const [value, setValue] = useState({
    //     startDate: new Date(room?.from),
    //     endDate: new Date(room?.to),
    //     key: 'selection',
    // })
    // console.log(value);


    return (
        <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {room?.price}</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <RoomCalendar ></RoomCalendar>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>$ {room?.price}</div>
            </div>
        </div>
    );
};

export default RoomReservation;