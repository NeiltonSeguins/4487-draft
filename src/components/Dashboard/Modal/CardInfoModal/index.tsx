import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardInfoModalProps = {
  title: string;
  value: string | number;
};

const CardInfoModal = ({ title, value }: CardInfoModalProps) => (
  <Card className="min-w-[183px] gap-2.5 border-muted-foreground">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <h2 className="font-sans font-semibold text-2xl">{value}</h2>
    </CardContent>
  </Card>
);

export default CardInfoModal;
