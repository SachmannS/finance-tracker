import { HStack, Button } from "@chakra-ui/react";

type ToggleOption = "weekly" | "monthly" | "yearly";

interface ToggleBarProps {
  selected: ToggleOption;
  onChange: (value: ToggleOption) => void;
}

const ToggleBar = ({ selected, onChange }: ToggleBarProps) => {
  const options: ToggleOption[] = ["weekly", "monthly", "yearly"];

  return (
    <HStack justify="flex-end">
      {options.map((option) => (
        <Button
          key={option}
          size="sm"
          variant={selected === option ? "solid" : "outline"}
          colorScheme="blue"
          onClick={() => onChange(option)}
          color="black"
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </HStack>
  );
};

export default ToggleBar;
