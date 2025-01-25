import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { createRoot } from "react-dom/client";
import { store } from "./appStore";
import { NewsProvider } from "./providers/NewsProvider";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <NewsProvider store={store}>
      <RouterProvider router={appRouter} />
    </NewsProvider>
  </ThemeProvider>
);
