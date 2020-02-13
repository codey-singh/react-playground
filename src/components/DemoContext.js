import React from "react";

const DemoContext = React.createContext();

const UserProvider = DemoContext.Provider;
const UserConsumer = DemoContext.Consumer;

export { UserConsumer, UserProvider };
