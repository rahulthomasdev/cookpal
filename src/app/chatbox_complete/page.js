"use client";

import { Layout } from "antd";
import { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

const LocTestPage = () => {
  const hasResponded = store.subscribe(() => store.getState());
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);
  const response = "Hello There..";
  const handleNewUserMessage = (newMessage) => {
    if (!hasResponded) {
      console.log(`New message incoming! ${newMessage}`);
      addResponseMessage(response);
      store.dispatch(hasResponded);
    }
  };
  return (
    <Layout className="text-black">
      <Widget handleNewUserMessage={handleNewUserMessage} />
    </Layout>
  );
};
export default LocTestPage;
