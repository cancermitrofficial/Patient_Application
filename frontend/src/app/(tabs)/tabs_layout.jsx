import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#673ab7",
      }}
    >
      <Tabs.Screen
        name="home" 
        />
    </Tabs>
  );
};

export default _layout;
