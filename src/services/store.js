import React, { useState } from "react";

export const StoreContext = React.createContext(null);

const StoreProvider = ({ authToken, children, setAuthToken }) => {
  const [activeSession, setActiveSession] = useState(null);
  const [help, setHelp] = useState([]);
  const [pairing, setPairing] = useState([]);
  const [sharing, setSharing] = useState([]);
  const [pollsData, setPollsData] = useState(null);
  const [vimMode, setVimMode] = useState(false);
  const savedName = localStorage.getItem("userName");
  const [userName, setUserName] = useState(savedName);

  const store = {
    activeSession,
    authToken,
    help: [help, setHelp],
    userName,
    pairing: [pairing, setPairing],
    pollsData,
    setActiveSession,
    setAuthToken,
    setUserName,
    setPollsData,
    setVimMode,
    sharing: [sharing, setSharing],
    vimMode
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
