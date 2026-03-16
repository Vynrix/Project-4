import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import BootScreen from "./screens/BootScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import LeadPipelineScreen from "./screens/LeadPipelineScreen";
import LeadDetailsScreen from "./screens/LeadDetailsScreen";
import AgentMonitorScreen from "./screens/AgentMonitorScreen";
import AICommandScreen from "./screens/AICommandScreen";
import WebsitePrototypeScreen from "./screens/WebsitePrototypeScreen";
import RevenueScreen from "./screens/RevenueScreen";
import TerminalScreen from "./screens/TerminalScreen";
import MapExplorerScreen from "./screens/MapExplorerScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/boot",
    Component: BootScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/leads",
    Component: LeadPipelineScreen,
  },
  {
    path: "/leads/:id",
    Component: LeadDetailsScreen,
  },
  {
    path: "/agents",
    Component: AgentMonitorScreen,
  },
  {
    path: "/ai",
    Component: AICommandScreen,
  },
  {
    path: "/prototype/:id",
    Component: WebsitePrototypeScreen,
  },
  {
    path: "/revenue",
    Component: RevenueScreen,
  },
  {
    path: "/terminal",
    Component: TerminalScreen,
  },
  {
    path: "/map",
    Component: MapExplorerScreen,
  },
  {
    path: "/notifications",
    Component: NotificationsScreen,
  },
  {
    path: "/settings",
    Component: SettingsScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
]);
