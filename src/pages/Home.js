import Header from "../components/Header";
import CountdownWidget from "../components/CountdownWidget";

function Home() {
  return (
    <div className="font-lora">
      <div className="sticky top-0 z-20">
        <div className="w-64 h-64 bg-[#f5f5dc] absolute top-0 right-0 rounded-full z-10 translate-x-[50%] translate-y-[-50%]"></div>
        <img
          src="/logo.png"
          alt=""
          className="absolute top-0 right-0 z-20 rounded-full w-32"
        />
      </div>
      <Header />

      <div className="mt-20 text-center">
        <div className="text-2xl mb-4"> Event Commences: September 7th </div>
        <CountdownWidget />
      </div>

      <div className="mt-20 text-center">
        Contact Details for Immediate Queries.
        <div>
          <i>President, SX3C</i>
          <div className="text-2xl">
            <b> Bipul Kharel </b> +977 9749794884
          </div>
        </div>
        <div>
          <i>President, SXC Physics Club </i>
          <div className="text-2xl">
            <b> Samrat Acharya </b> +977 9748274575
          </div>
        </div>
        <div>
          <i>President, Sodalitas de Mathematica </i>
          <div className="text-2xl">
            <b> Osish Niraula </b> +977 9804395642
          </div>
        </div>
        <div>
          <i>President, Club de Chemia </i>
          <div className="text-2xl">
            <b> Krishna Dev Yadav </b> +977 9817773148
          </div>
        </div>
        <div>
          <i>President, SXC Ecosphere Club </i>
          <div className="text-2xl">
            <b> Aayushma Shrestha </b> +977 9766857475
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              {/* https://sxc.edu.np/uploads/gallery/P1196560-file-20230904091332-557.JPG */}
              <img
                className="w-full rounded-md"
                src="/event-photos/main.JPG"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        🚩
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        Participants From <br />
                        <div className="text-blue-600">
                          All Around the Country{" "}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  className="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                A Celebration of Science and Technology.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                With the collaboration of all clubs from the Departmental Clubs
                of SXC, Science fest adds to the wonderful experience of
                learning and exploring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
