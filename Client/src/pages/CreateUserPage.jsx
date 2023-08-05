import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SectorForm } from "../components/SectorForm";
import { baseURL } from "../constant";

export const CreateUserPage = () => {
  let navigate = useNavigate();

  const createUser = async ({ name, sector, isAgreedToTerms }) => {
    if (name === "") {
      alert("Please fill in name");
      return;
    }
    if (sector === null || sector === undefined) {
      alert("Please select a sector");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/user`, {
        name: name,
        sector: sector,
        isAgreedToTerms: isAgreedToTerms,
      });

      alert("User created successfully");

      navigate(`/update/${response.data.data._id}`);
    } catch (error) {
      alert("User creation failed");
    }
  };

  return <SectorForm buttonTitle="Create" onSubmitted={createUser} />;
};
