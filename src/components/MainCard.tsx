import { Coins, CreditCard, FileX, PieChart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import classNames from "classnames";

type Icon = 'shopingCart' | 'creditCard' | 'file' | 'coin';

const switchIconFromName = (icon: Icon, color: string) => {
  switch (icon) {
    case 'shopingCart' :
      return (
       <ShoppingCart className={classNames(`text-${color}-800 h-8 w-8`)} />
      );
    case 'creditCard' :
      return (
        <CreditCard className={classNames(`text-${color}-800 h-8 w-8`)} />
      );
    case 'file' : 
      return (
        <FileX className={classNames(`text-${color}-800 h-8 w-8`)} />
      );
    case 'coin' :
      return (
        <Coins  className={classNames(`text-${color}-800 h-8 w-8`)} />
      );
  }
}

const getIconFromName = (icon: Icon, color: string) => {
  return (
    <div className={classNames(`bg-${color}-50 h-13 max-w-[52px] p-2 flex justify-center rounded-xl`)}>
      {switchIconFromName(icon, color)}
    </div>
  );
}

interface MainCardProps {
  headerIconName: Icon,
  headerIconColor: string,
  headerDescription: string,
  content: string
}

export const MainCard = (props: MainCardProps) => {

  const { headerIconName, headerIconColor, headerDescription, content } = props;

  return (
    <Card className="rounded-2xl h-[276px] max-w-[371px]">
      <div className="flex flex-col items-start justify-center gap-3">
        <CardHeader className="pb-0">
          <CardTitle className="mb-2">
            {getIconFromName(headerIconName, headerIconColor)}
          </CardTitle>
          <CardDescription className="text-slate-800 text-lg font-semibold">
            {headerDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-slate-600 text-sm leading-6 font-normal pb-1">
          {content}
        </CardContent>
        <CardFooter>
          <Button className="rounded-xl flex flex-row justify-center items-center">
            <PieChart className="h-4 w-4 mr-2" /> Gerar relatório
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}