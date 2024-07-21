import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SubjectChoose() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.roundid > 4 || params.roundid < 1) {
      navigate("/results");
    }
  }, []);

  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Choose a Subject
            </h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Results for the Event Appear here
            </p>
          </div>

          <div className="grid max-w-2xl gap-4 mx-auto grid-cols-2 mt-14">
            <Link to={`/results/${params.roundid}/physics`}>
              <div className="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p className="text-4xl font-medium tracking-tight">Physics</p>
              </div>
            </Link>

            <Link to={`/results/${params.roundid}/chemistry`}>
              <div className="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p className="text-4xl font-medium tracking-tight">Chemistry</p>
              </div>
            </Link>

            <Link to={`/results/${params.roundid}/maths`}>
              <div className="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p className="text-4xl font-medium tracking-tight">Maths</p>
              </div>
            </Link>

            <Link to={`/results/${params.roundid}/computer`}>
              <div className="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p className="text-4xl font-medium tracking-tight">Computer</p>
              </div>
            </Link>

            <Link to={`/results/${params.roundid}/biology`}>
              <div className="overflow-hidden bg-white border-2  border-gray-200 rounded-md py-20 text-center">
                <p className="text-4xl font-medium tracking-tight">Biology</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
