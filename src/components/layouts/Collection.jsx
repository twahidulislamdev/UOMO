import Container from "../Container";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import Heading from "../Heading";

const Collection = () => {
  return (
    <>
      <div className="w-[96%] lg:w-full m-auto flex justify-center lg:m-0 mb-10 overflow-hidden">
        <Container>
          <Flex
            className={
              "justify-between flex-wrap lg:no-wrap lg:gap-x-5 gap-y-5"
            }
          >
            <div
              data-aos="fade-right"
              className="w-[96%] lg:w-[49%] m-auto lg:m-0 h-full space-y-5"
            >
              {/* Left Card One Start  */}
              <div className="w-full h-[250px] lg:h-[430px] bg-[url(/src/assets/collectionOne.jpg)] bg-cover bg-center bg-no-repeat relative">
                <div className="p-0 lg:p-5 absolute left-5 bottom-5 ">
                  <p className="text-sm text-mainColor">Basic Collection</p>
                  <Heading
                    className={"text-xl lg:text-3xl font-medium pt-2"}
                    txt={"New Arrivals"}
                    as={"h3"}
                  />
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm group hover:cursor-pointer  ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        SHOP NOW
                      </span>
                      <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0  transition-all duration-300 ease-in-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* Left Card One End  */}

              {/* Left Card Two Start  */}
              <div className="w-full h-[180px] lg:h-[270px] bg-[url(/src/assets/collectionThree.jpg)] bg-cover bg-center bg-no-repeat relative">
                <div className="p-0 lg:p-5 absolute left-5 bottom-5 ">
                  <p className="text-sm text-mainColor">Shop Casual</p>
                  <Heading
                    className={"text-xl lg:text-3xl font-medium pt-2"}
                    txt={"Free Shipping"}
                    as={"h3"}
                  />
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm group hover:cursor-pointer  ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        SHOP NOW
                      </span>
                      <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0  transition-all duration-300 ease-in-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* Left Card Two End  */}
            </div>
            <div className="w-[96%] lg:w-[49%] m-auto lg:m-0 h-full space-y-5">
              {/* Right Card Two Start  */}
              <div className="w-full h-[180px] lg:h-[270px] bg-[url(/src/assets/collectionTwo.jpg)] bg-cover bg-center bg-no-repeat relative">
                <div className="p-0 lg:p-5 absolute left-5 bottom-5 ">
                  <p className="text-sm text-mainColor">Want and Need</p>
                  <Heading
                    className={"text-xl lg:text-3xl font-medium pt-2"}
                    txt={"The Everygirl Wears"}
                    as={"h3"}
                  />
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm  group hover:cursor-pointer  ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        SHOP NOW
                      </span>
                      <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0  transition-all duration-300 ease-in-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* Right Card Two End  */}
              {/* Right Card One Start  */}
              <div className="w-full h-[250px] lg:h-[430px]  bg-[url(/src/assets/collectionFour.jpg)] bg-cover bg-center bg-no-repeat relative">
                <div className="p-0 lg:p-5 absolute left-5 bottom-5 ">
                  <p className="text-sm text-mainColor">Sale off This week</p>
                  <Heading
                    className={"text-xl lg:text-3xl font-medium pt-2"}
                    txt={"Running Shoes"}
                    as={"h3"}
                  />
                  <Link to={"/shop"}>
                    <button className="relative px-0 py-2 text-black text-sm group hover:cursor-pointer  ">
                      <span className="group-hover:text-black transition-colors duration-300 text-left">
                        SHOP NOW
                      </span>
                      <span className="absolute left-0 bottom-0  h-0.5 bg-black transform w-1/3 group-hover:w-full group-hover:left-0 group-hover:translate-x-0  transition-all duration-300 ease-in-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* Right Card One End  */}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Collection;
