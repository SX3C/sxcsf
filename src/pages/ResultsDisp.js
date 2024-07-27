import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/firebaseinit";
import BulletLoader from "../components/bulletLoader";
import capitalizeFirstLetter from "../utils/capitalize";

export default function SubjectChoose() {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedTeams, setSelectedTeams] = useState(null);

  const getTeams = async () => {
    const q = query(
      collection(db, "teams"),
      where(
        `roundSelections.round${params.roundid}`,
        "==",
        capitalizeFirstLetter(params.subjectid)
      ),
      where(`advances.round${params.roundid}`, "==", true)
    );

    const docs = (await getDocs(q)).docs;
    console.log(docs);
    console.log(params);

    setSelectedTeams(docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    if (
      params.roundid > 4 ||
      params.roundid < 1 ||
      !["physics", "chemistry", "maths", "computer", "biology"].includes(
        params.subjectid
      )
    ) {
      navigate("/results");
    } else {
      getTeams();
    }
  }, []);

  return (
    <div>
      <Link to="/results">
        <button className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md">
          Back
        </button>
      </Link>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Team Standings
            </h2>
            <div className="text-3xl text-center mt-4">
              For Round {params.roundid}{" "}
              {capitalizeFirstLetter(params.subjectid)}
            </div>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Results for the Event Appear here
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-10">
            <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 ">
                  Latest Standings
                </h3>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {selectedTeams ? (
                    selectedTeams.length !== 0 ? (
                      selectedTeams.map((team) => {
                        return (
                          <li key={team.team_code} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {team.team_code}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  Team Leader: {team.members[0].name}
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                {params.roundid < 4
                                  ? `Proceed to ${
                                      team.roundSelections[
                                        `round${parseInt(params.roundid) + 1}`
                                      ]
                                    }`
                                  : "TO Day 2!"}
                              </div>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <div>
                        {" "}
                        <div className="text-xl">It's too quiet here</div>{" "}
                        <div>This event probably hasn't concluded yet.</div>{" "}
                      </div>
                    )
                  ) : (
                    <BulletLoader />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
