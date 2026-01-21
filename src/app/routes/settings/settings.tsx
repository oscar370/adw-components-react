import { ActionRow } from "@/components/ui/action-row";
import { EntryRow } from "@/components/ui/entry-row";
import { ListBox } from "@/components/ui/list-box";
import { modal } from "@/components/ui/modal-manager";
import { NavigationPage } from "@/components/ui/navigation-page";
import { SelectRow } from "@/components/ui/select-row";
import { SwitchRow } from "@/components/ui/switch-row";
import { ChevronRight } from "lucide-react";
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
        <ActionRow as={Link} title="Saved networks" to="saved-networks">
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

      <ListBox title="About" description="System information">
        <EntryRow
          label="Device name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.currentTarget.value)}
        />
        <ActionRow title="SO" subtitle="Solus 4.8" property />
      </ListBox>
    </NavigationPage>
  );
}
