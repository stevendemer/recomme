import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";

interface Props {
  checked: boolean;
  onClick: () => void;
  value: string;
}

export default function RadioCard({ checked, onClick, value }: Props) {
  return (
    <div
      className={cn(
        "rounded-[31px] bg-white flex flex-col items-center justify-center w-full h-full p-2 transition-all duration-300 shadow-sm hover:shadow-lg",
        checked ? "bg-[#65D9BD] text-white" : "bg-white text-black"
      )}
    >
      <Label
        htmlFor={value}
        className="flex flex-col items-center justify-center w-full cursor-pointer"
      >
        <RadioGroupItem
          value={value}
          checked={checked}
          onClick={onClick}
          id={value}
          className={cn(
            "focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 ",
            checked
              ? "border-[#65D9BD] data-[state=checked]:border-white data-[state=checked]:bg-[#65D9BD]"
              : "border-black data-[state=checked]:bg-black"
          )}
        >
          <div className="font-bold text-sm sm:text-xl font-inter text-center p-1">
            {value}
          </div>
        </RadioGroupItem>
      </Label>
    </div>
  );
}
