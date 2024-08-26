import { useEffect, useState } from "react";
import {
  useUpdateInsuranceUser,
  useUpdateStepInsuranceCotization,
} from "@/shared/hooks";
import { useGetUserData } from "./use-get-user-data";

export const useFormulario = () => {
  const [document, setDocument] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { fetchUserData } = useGetUserData();
  const { updateInsuranceUser } = useUpdateInsuranceUser();
  const { updateStepInsuranceCotization } = useUpdateStepInsuranceCotization();

  const getUserDataAndUpdate = async () => {
    const userData = await fetchUserData();
    if (userData) {
      const dateBirthDay = new Date(userData.birthDay);
      const date = new Date();
      let age = date.getFullYear() - dateBirthDay.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const monthBirthDay = dateBirthDay.getMonth();
      const dayBirthDay = dateBirthDay.getDate();
      if (
        month < monthBirthDay ||
        (month === monthBirthDay && day < dayBirthDay)
      ) {
        age--;
      }
      updateInsuranceUser({
        name: userData.name,
        lastName: userData.lastName,
        fullName: `${userData.name} ${userData.lastName}`,
        document: Number(document),
        cellphone: Number(cellphone),
        birthDay: userData.birthDay,
        age,
      });
      updateStepInsuranceCotization(1);
    }
  };

  const handleClick = async () => {
    await getUserDataAndUpdate();
  };

  useEffect(() => {
    if (!document || !cellphone || !check1 || !check2) setDisabledButton(true);
    else setDisabledButton(false);
  }, [document, cellphone, check1, check2]);

  return {
    document,
    setDocument,
    cellphone,
    setCellphone,
    check1,
    setCheck1,
    check2,
    setCheck2,
    disabledButton,
    handleClick,
  };
};
