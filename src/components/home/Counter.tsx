import CountUp from "react-countup";
export default function Counter() {
  return (
    <div className="bg-forex py-24 text-white">
      <div className="bg-glass border-y px-10 md:px-20 py-10">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold">
            <span className="glow">Our bots</span> are committed to meeting{" "}
            <br /> your CFD and FX trading needs
          </h3>
          <p className="text-xl my-6">
            Excepteur occaeca cupidata non proident fugiat nulla pariatur quasi
            architecto beatae, sunt in culpa quila officia deserunt mollit anim
            id est aute laborum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div>
            <div className="flex gap-3">
              <div className="stats glow">
                <CountUp start={0} end={250} duration={2} /> K+
              </div>
              <span className="text-lg mt-1 font-bold">daily trades</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              id!
            </p>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="stats glow">
                <CountUp start={0} end={90} duration={2} /> %
              </div>
              <span className="text-lg mt-1 font-bold">accuracy</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              id!
            </p>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="stats glow">
                <CountUp start={0} end={3.7} decimals={1} duration={2} /> K+
              </div>
              <span className="text-lg mt-1 font-bold">customers</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              id!
            </p>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="stats glow">
                <CountUp start={0} end={35} duration={2} />+
              </div>
              <span className="text-lg mt-1 font-bold">products</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              id!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
