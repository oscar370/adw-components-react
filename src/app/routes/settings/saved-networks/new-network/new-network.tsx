import { Button } from "@/core/components/ui/button";
import { Entry } from "@/core/components/ui/entry";
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

      <Button className="mt-4 w-full bg-(--accent)!" variant="pill">
        Add
      </Button>
    </NavigationPage>
  );
}
