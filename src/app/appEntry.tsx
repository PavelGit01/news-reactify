import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { createRoot } from "react-dom/client";
import { store } from "./appStore";
import BaseLayout from "./layouts/BaseLayout";
import { NewsProvider } from "./providers/NewsProvider";
import '@/shared/index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <NewsProvider store={store}>
      <BaseLayout />
    </NewsProvider>
  </ThemeProvider>
);
