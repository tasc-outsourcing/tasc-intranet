import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { ProtectedRoute } from "@/app/components/ProtectedRoute";
import { LoginPage } from "@/app/pages/LoginPage";
import { HomePage } from "@/app/pages/HomePage";
import { NewsletterPage } from "@/app/pages/NewsletterPage";
import { WhoWeArePage } from "@/app/pages/WhoWeArePage";
import { WhatsHappeningPage } from "@/app/pages/WhatsHappeningPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "newsletter", element: <NewsletterPage /> },
      { path: "who-we-are", element: <WhoWeArePage /> },
      { path: "whats-happening", element: <WhatsHappeningPage /> },
    ],
  },
]);
