import { ActionRow } from "@/core/components/ui/action-row";
import { Box } from "@/core/components/ui/box";
import { Button } from "@/core/components/ui/button";
import { ButtonRow } from "@/core/components/ui/button-row";
import { EntryRow } from "@/core/components/ui/entry-row";
import { ListBox } from "@/core/components/ui/list-box";
import { modal } from "@/core/components/ui/modal-manager";
import { NavigationPage } from "@/core/components/ui/navigation-page";
import { SelectRow } from "@/core/components/ui/select-row";
import { SwitchRow } from "@/core/components/ui/switch-row";
import { ChevronRight, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Settings() {
  const [isWifiEnabled, setIsWifiEnabled] = useState(true);
  const [isBTEnabled, setIsBTEnabled] = useState(true);
  const [deviceName, setDeviceName] = useState("solus");
  const [theme, setTheme] = useState("dark");

  function showModalDevices() {
    modal.open(
      "Bluetooth devices",
      <>
        <ListBox>
          <ActionRow title="QCY H3" as="button" onClick={() => {}} />
          <ActionRow
            title="Soundcore Liberty 4"
            as="button"
            onClick={() => {}}
          />
        </ListBox>
      </>,
    );
  }

  function handleSchemaChange(value: string) {
    document.documentElement.setAttribute("data-theme", value);
    setTheme(value);
  }

  return (
    <NavigationPage title="Settings">
      <div className="*:mt-4">
        <ListBox>
          <SelectRow
            title="Schema"
            onChange={handleSchemaChange}
            options={[
              { label: "Dark", value: "dark" },
              { label: "Light", value: "light" },
            ]}
            value={theme}
          />
        </ListBox>

        <ListBox title="Wifi">
          <SwitchRow
            title="Enable wifi"
            checked={isWifiEnabled}
            onChange={() => setIsWifiEnabled((prev) => !prev)}
          />
          <ActionRow
            as={Link}
            title="Saved networks"
            to="saved-networks"
            forceHover
          >
            <ChevronRight />
          </ActionRow>
        </ListBox>

        <ListBox title="Bluetooth">
          <SwitchRow
            title="Enable bluetooth"
            checked={isBTEnabled}
            onChange={() => setIsBTEnabled((prev) => !prev)}
          />
          <ActionRow as="button" title="Devices" onClick={showModalDevices}>
            <ChevronRight />
          </ActionRow>
        </ListBox>

        <ListBox.Root title="User">
          <ListBox.Header>
            <ListBox.Title>User</ListBox.Title>
            <ListBox.HeaderAction>
              <Box linked>
                <Button aria-label="Edit user">
                  <Pencil size={16} />
                </Button>
                <Button aria-label="Add user">
                  <Plus size={16} />
                </Button>
              </Box>
            </ListBox.HeaderAction>
          </ListBox.Header>
          <ListBox.Content>
            <ActionRow title="Name" subtitle="Oscar" property />
          </ListBox.Content>
        </ListBox.Root>

        <ListBox title="About" description="System information">
          <EntryRow
            title="Device name"
            value={deviceName}
            onChange={(e) => setDeviceName(e.currentTarget.value)}
          />
          <ActionRow title="SO" subtitle="Solus 4.8" property />
        </ListBox>

        <ListBox>
          <ButtonRow variant="suggested">Donate</ButtonRow>
        </ListBox>
      </div>
    </NavigationPage>
  );
}
