import React, { createContext, useContext, useState } from "react";

const ServiceContext = createContext();

export function ServiceProvider({ children }) {
  const [selectedService, setSelectedService] = useState("");

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  return useContext(ServiceContext);
}
