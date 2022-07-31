import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { InfinitySpin } from "react-loader-spinner";

const Protection = ({ children }) => {
  const auth = useAuth();
  const [isAllowed, setIsAllowed] = useState(null);
  useEffect(() => {
    if (auth.user) {
      setIsAllowed(true);
    } else if (auth.user === false) {
      setIsAllowed(false);
    }
  }, [auth.user]);

  return isAllowed === null ? (
    <InfinitySpin width="200" color="#4fa94d" />
  ) : isAllowed === false ? (
    "Access Denied"
  ) : (
    children
  );
};

export default Protection;
