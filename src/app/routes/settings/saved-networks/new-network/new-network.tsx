import { ButtonRow } from "@/core/components/ui/button-row";
import { Entry } from "@/core/components/ui/entry";
import { ListBox } from "@/core/components/ui/list-box";
import { NavigationPage } from "@/core/components/ui/navigation-page";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  name: string;
  password: string;
};

export function NewNetwork() {
  const { control, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <NavigationPage title="New network" isSubPage>
      <form onSubmit={handleSubmit(onSubmit)}></form>
      <div className="flex w-full flex-col gap-1">
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Entry title="Name" {...field} required />}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => <Entry title="Name" {...field} required />}
        />
      </div>

      <ListBox>
        <ButtonRow variant="suggested">Add</ButtonRow>
      </ListBox>
    </NavigationPage>
  );
}
