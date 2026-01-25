import { SidebarLayout } from "@/components/layout/sidebar-layout";
import { AnimatedRoutes } from "@/core/components/ui/animated-routes";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./routes/home/home";
import { NewNetwork } from "./routes/settings/saved-networks/new-network/new-network";
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
              <Route path="saved-networks">
                <Route index Component={SavedNetworks} />
                <Route path="new" Component={NewNetwork} />
              </Route>
            </Route>
          </Route>
        </AnimatedRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
