/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { SectorForm } from "../components/SectorForm";
import { baseURL } from "../constant";
import { useParams } from "react-router-dom";

export const UpdateUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = async ({ name, sector, isAgreedToTerms }) => {
    if (name === "") {
      alert("Please fill in name");
      return;
    }
    if (sector === null || sector === undefined) {
      alert("Please select a sector");
      return;
    }

    try {
      await axios.patch(`${baseURL}/user/${id}`, {
        name: name,
        sector: sector,
        isAgreedToTerms: isAgreedToTerms,
      });

      alert("User update successfully");
    } catch (_) {
      alert("User update failed");
    }
  };

  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/user/${id}`);
      setUser(response.data.data);
    } catch (error) {
      alert("Failed to fetch user");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (user === null) return <div>No User Found</div>;

  return (
    <SectorForm
      name={user?.name}
      sector={user?.sector}
      isAgreedToTerms={user?.isAgreedToTerms}
      buttonTitle="Update"
      onSubmitted={updateUser}
    />
  );
};
