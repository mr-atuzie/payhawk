import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="py-10 w-full  h-full flex flex-col items-center ">
      <img
        className=" w-[150px] h-[150px] rounded-full object-cover"
        src={currentUser.photoURL}
        alt=""
      />

      <h3 className=" font-semibold text-lg capitalize mt-5">
        {currentUser.displayName}
      </h3>

      <p className=" text-gray-600 text-sm tracking-wide">
        {" "}
        11:54pm in Lagos , Nigeria
      </p>

      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
};

export default Profile;
