import classNames from "classnames";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { BarChart4, Book, ChevronsLeft, Clock4, Columns3, HomeIcon, LogOut, PanelsLeftBottom, SlidersVertical, Users } from "lucide-react";
import { Button } from "./ui/button";

export const Aside = () => {

  const [switctActive, setSwitctActive] = useState(false);

  return (
    <aside className="flex flex-col max-w-[248px]">
      <Card className={classNames("rounded-2xl m-4", {
        "bg-slate-50": switctActive === false,
        "bg-green-50": switctActive === true
      })}>
        <CardContent className="p-0">
          <p className="px-4 pt-4 text-[12px] font-normal leading-5">
            {switctActive ? 
            <>Você está online, há leads na sua fila de atendimento</> : 
            <>Fique online para receber novos pedidos da fila de atendimento</>}
          </p>
          <div className="flex items-center space-x-2 px-4 py-4">
            <Switch id="switch-online" className="data-[state=checked]:bg-green-600" checked={switctActive} onCheckedChange={() => setSwitctActive(!switctActive)} />
            <Label htmlFor="switch-online"> 
              {switctActive ? 
              <>Online</> : 
              <>Ficar online</>}
            </Label>
          </div>
          {switctActive &&
            (<div>
              <Separator />
              <CardFooter className="p-3 text-green-900">
                <Clock4 id="clock" className="h-4" />
                <Label htmlFor="clock" className="text-sm font-medium">Tempo online: 03:24:30</Label>
              </CardFooter>
            </div>)}
        </CardContent>
      </Card>
      <Separator />
      <div className="m-4 flex flex-col gap-1">
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
          <HomeIcon className="ml-2 mr-3 h-6 w-6" /> Dashboard
        </Button>
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
          <PanelsLeftBottom className="ml-2 mr-3 h-6 w-6" /> Mesa de trabalho
        </Button>
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
          <Columns3 className="ml-2 mr-3 h-6 w-6" /> Kanban
        </Button>
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
          <Book className="ml-2 mr-3 h-6 w-6" /> Agenda
        </Button>
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
          <Users className="ml-2 mr-3 h-6 w-6" /> Meus clientes
        </Button>
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
          <BarChart4 className="ml-2 mr-3 h-6 w-6" /> Relatórios
        </Button>
      </div>
      <div className="flex-1" />
      <Separator />
      <div className="m-4 flex flex-col justify-items-end gap-1">
        <div className="flex items-center relative">
          <Button className="pl-1 h-12 rounded-2xl bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start">
            <SlidersVertical className="ml-2 mr-3 h-6 w-6" /> Ajustes
          </Button>
          <Button className="p-0 h-10 w-10 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-start absolute right-0">
            <ChevronsLeft className="mx-3 h-4 w-4" />
          </Button>
        </div>
        <Button className="pl-1 h-12 rounded-2xl bg-transparent text-red-700 hover:bg-slate-100 hover:text-red-900 flex items-center justify-start">
          <LogOut className="ml-2 mr-3 h-6 w-6" /> Sair
        </Button>
      </div>
      <Separator />
      <footer className="my-3 mx-6 text-slate-400">
        <Label className="text-[10px]/[20px] font-medium">Version: 0.01.10</Label>
      </footer>
    </aside>
  );
}