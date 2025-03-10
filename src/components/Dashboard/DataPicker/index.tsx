import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const DatePicker = () => {
  const { selectedDate, selectDate } = useAppContext();
  const [date, setDate] = useState<Date>();

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    selectDate(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Button
            variant="outline"
            className={cn(
              "w-[220px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {selectedDate ? selectedDate : <span>Selecione uma data</span>}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
