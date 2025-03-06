import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const TopSellers = () => {
  return (
    <Card className="flex-1/12 border-muted-foreground">
      <CardHeader>
        <CardTitle>Ranking de vendedores</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex items-center gap-4 w-full">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="/avatar.svg" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grow">
            <h3 className="font-sans font-medium text-sm">Tabata Silva</h3>
            <p className="font-sans font-normal text-sm text-muted-foreground">
              tabata.silva@email.com
            </p>
          </div>
          <span className="font-medium font-sans text-base">+R$5530,00</span>
        </div>
        <div className="flex items-center gap-4 w-full">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="/avatar.svg" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grow">
            <h3 className="font-sans font-medium text-sm">Eduardo Moraes</h3>
            <p className="font-sans font-normal text-sm text-muted-foreground">
              eduardo.moraes@email.com
            </p>
          </div>
          <span className="font-medium font-sans text-base">+R$5530,00</span>
        </div>
        <div className="flex items-center gap-4 w-full">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="/avatar.svg" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grow">
            <h3 className="font-sans font-medium text-sm">Isabela Nunes</h3>
            <p className="font-sans font-normal text-sm text-muted-foreground">
              isabela.nunes@email.com
            </p>
          </div>
          <span className="font-medium font-sans text-base">+R$5530,00</span>
        </div>
        <div className="flex items-center gap-4 w-full">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="/avatar.svg" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grow">
            <h3 className="font-sans font-medium text-sm">Willian Gonçalves</h3>
            <p className="font-sans font-normal text-sm text-muted-foreground">
              willian.gonçalves@email.com
            </p>
          </div>
          <span className="font-medium font-sans text-base">+R$5530,00</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSellers;
