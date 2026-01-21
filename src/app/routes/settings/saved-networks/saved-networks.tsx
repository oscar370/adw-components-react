import { ActionRow } from "@/core/components/ui/action-row";
import { Button } from "@/core/components/ui/button";
import { ListBox } from "@/core/components/ui/list-box";
import { modal } from "@/core/components/ui/modal-manager";
import { NavigationPage } from "@/core/components/ui/navigation-page";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const initialState = ["ALH-21D", "ALH-21D-5"];

export function SavedNetworks() {
  const [networks, setNetwork] = useState(initialState);

  function handleRemove(network: string) {
    const filtered = networks.filter((net) => net !== network);
    setNetwork(filtered);
    modal.close();
  }

  function openConfirmationModal(network: string) {
    modal.open(
      "Forget wifi",
      <>
        <h2>Are you sure you want to forget this network?</h2>

        <div className="mt-2 flex items-center justify-center gap-4">
          <Button onClick={() => modal.close()}>Cancel</Button>
          <Button variant="destructive" onClick={() => handleRemove(network)}>
            Confirm
          </Button>
        </div>
      </>,
    );
  }

  return (
    <NavigationPage title="Saved Networks" isSubPage>
      {networks.length !== 0 ? (
        <ListBox>
          {networks.map((net) => (
            <ActionRow key={net} title={net}>
              <Button onClick={() => openConfirmationModal(net)}>
                <Trash2 />
              </Button>
            </ActionRow>
          ))}
        </ListBox>
      ) : (
        <p>No networks added</p>
      )}
    </NavigationPage>
  );
}
