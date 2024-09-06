import React, { useRef, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseinit";
import toast from "react-hot-toast";
import { Scanner } from "@yudiel/react-qr-scanner";
import Modal from "react-modal";

export default function ScannerResult() {
    const [showModal, setShowModal] = useState(false);
    const [teamDetails, setTeamDetails] = useState(null);
    const itemRef = useRef();
    const roundkeys = {
        'round1': "I",
        'round2': "II",
        'round3': "III",
        'round4': "IV",
    }

    const getTeamByTeamCode = async (team_code) => {
        const docref = doc(db, 'teams', team_code);
        const document = (await getDoc(docref));

        if (!document.exists()) {
            toast.error("No team exists with that team code");
            return;
        }

        setTeamDetails(document.data());
    };

    return (
        <div>
            <Link to="/">
                <button className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md">
                    Home
                </button>
            </Link>

            <section class="py-10 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Result Scanner
                        </h2>
                        <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            Find your result by scanning your QR Code
                        </p>
                    </div>

                    <div class="grid max-w-2xl gap-4 mx-auto grid-cols-2 mt-14">
                        Scanner results appear here
                    </div>

                </div>
                <div className="max-w-2xl mx-auto mt-4 p-4">
                    <input className="outline-1 px-10 py-5" ref={itemRef} placeholder="Enter Team Code" />
                    <button className="px-4 bg-gray-800 py-2 rounded-lg text-white ml-4" onClick={() => getTeamByTeamCode(itemRef.current.value)}> Fetch </button>
                    <button onClick={() => setShowModal(true)} className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mt-4">
                        Use Scanner
                    </button>

                    {teamDetails !== null ?
                        <>
                            <div className="text-2xl font-bold mt-4">{teamDetails.team_code}</div>
                            <div className="text-xl"> Team Details </div>

                            <div className="mt-4 bg-white p-4 rounded-sm">
                                {
                                    teamDetails.members.map((member) => <div className="justify-between flex items-center mt-4">
                                        <div>
                                            <div className="font-bold"> {member.name} </div>
                                            <div> {member.email} </div>
                                        </div>
                                        {member.contact}
                                    </div>)
                                }
                            </div>

                            <div className="mt-4"> Team Advancement Details </div>


                            <div class="grid gap-4 grid-cols-2 mt-4 p-4">
                                {
                                    ['round1', 'round2', 'round3', 'round4'].map((selection) =>
                                        <div class="overflow-hidden rounded-md py-10 text-center"
                                            style={{
                                                backgroundColor:
                                                    !!teamDetails.advances ? (!!teamDetails.advances[selection] ? "#32a85c" : "white")
                                                        : "white"
                                            }}

                                        >
                                            <p class="text-3xl font-medium tracking-tight"> {teamDetails.roundSelections[selection]} </p>
                                            <p> {roundkeys[selection]} </p>
                                            {
                                                !!teamDetails.advances ?
                                                    <div>
                                                        {!!teamDetails.advances[selection] ? "Passed" : "N/A"}
                                                    </div>
                                                    : <> N/A</>
                                            }
                                        </div>
                                    )
                                }
                            </div>

                        </>
                        : <div></div>}
                </div>
            </section>

            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                    },
                }}
                contentLabel="Example Modal"
            >
                <div className="font-lora">
                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                    <div className="flex justify-between">
                        <div className="text-2xl font-bold"> Use Scanner: </div>
                        <button
                            className="bg-gray-800 text-white px-4 py-2 rounded-md"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>

                    <Scanner onScan={(result) => {
                        if (result.length != 0) {
                            getTeamByTeamCode(result[0].rawValue);
                        }
                        setShowModal(false);
                    }} />
                </div>
            </Modal>
        </div>
    );
}