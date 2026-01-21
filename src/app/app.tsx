import { SidebarLayout } from "@/components/layout/sidebar-layout";
import { AnimatedRoutes } from "@/components/ui/animated-routes";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./routes/home/home";
import { SavedNetworks } from "./routes/settings/saved-networks/saved-networks";
import { Settings } from "./routes/settings/settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes>
          <Route Component={SidebarLayout}>
            <Route index Component={Home} />
            <Route path="/settings">
              <Route index Component={Settings} />
              <Route path="saved-networks" Component={SavedNetworks} />
            </Route>
          </Route>
        </AnimatedRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
