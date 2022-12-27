import Image from "next/image";
import img from "../public/1.jpeg";

function pets() {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="pet" width="280" height="420" />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            {/* <Image
              src={`/${path}.jpeg`}
              alt="pet"
              width="280"
              height="420"
            /> */}
            {/* <img src={`/${path}.jpeg`} alt="pet" width="280" height="420" /> */}
          </div>
        );
      })}
    </div>
  );
}

export default pets;
