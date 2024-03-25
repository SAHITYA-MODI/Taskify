"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard);
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <input
          id="title"
          name="title"
          required
          className="border border-black p-1"
          placeholder="Enter a board title"
        />
        {fieldErrors?.title ? (
          <div>
            {fieldErrors.title.map((error: string) => (
              <p className="text-rose-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
