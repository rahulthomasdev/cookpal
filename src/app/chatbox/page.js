"use client";
import { ChatWidget } from "@papercups-io/chat-widget";

const ExamplePage = () => {
  return (
    <>
      {/*
        Put <ChatWidget /> at the bottom of whatever pages you would
        like to render the widget on, or in your root/router component
        if you would like it to render on every page
      */}
      <ChatWidget
        // `accountId` is used instead of `token` in older versions
        // of the @papercups-io/chat-widget package (before v1.2.x).
        // You can delete this line if you are on the latest version.
        // accountId="f9e124e6-be56-4e9d-9b12-8ae66b2affc0"
        token="f9e124e6-be56-4e9d-9b12-8ae66b2affc0"
        inbox="00037f6f-931b-4b28-bc18-4cb6c569138e"
        title="Welcome to Cookpal"
        subtitle="How can we help you?"
        primaryColor="#eb144c"
        greeting="Hello! Any questions?"
        awayMessage="Sorry, we're away at the moment..."
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={true}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={true}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
        // Optionally include data about your customer here to identify them
        // customer={{
        //   name: __CUSTOMER__.name,
        //   email: __CUSTOMER__.email,
        //   external_id: __CUSTOMER__.id,
        //   metadata: {
        //     plan: "premium"
        //   }
        // }}
      />
    </>
  );
};
export default ExamplePage;
