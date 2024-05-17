import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useEffect } from "react";
const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});
export type SearchForm = z.infer<typeof formSchema>;
type Props = {
  searchQuery?: string;
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
};
function SearchBar({ onSubmit, onReset, placeHolder, searchQuery }: Props) {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });
  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);
  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });
    if (onReset) {
      onReset();
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row rounded-full border-2 p-3 ${
          form.formState.errors.searchQuery && "border-red-600"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-600 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className=" flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0 "
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="button"
          variant="outline"
          className="rounded-full"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  );
}

export default SearchBar;
