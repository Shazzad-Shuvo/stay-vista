import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id);
                setRoom(singleRoom);
                setLoading(false);
            });
    }, [id])

    console.log(room);

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            {room && (
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex flex-col gap-6">
                        <Header
                            room={room}></Header>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <RoomInfo room={room}></RoomInfo>
                        <div className="md:col-span-3 order-first md:order-last mb-10">
                            {/* Room Reservation */}
                            <RoomReservation room={room}></RoomReservation>

                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default RoomDetails;