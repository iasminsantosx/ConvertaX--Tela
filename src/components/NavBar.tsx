import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Iasmin from '@/assets/images/iasmin.png';
import AppLogo from '@/assets/images/logo.svg';

export const NavBar = () => {
  return (
    <Menubar className='h-[72px] w-360 rounded-none p-0 border-t-0 border-x-0'>
      <div className='my-4 flex flex-row items-center'>
        <div className='ml-6 flex flex-initial flex-row items-center h-10 w-[938px]'>
          <div className='flex w-56 h-10'>
            <div className='flex flex-inital flex-row items-center '>
              <MenubarMenu>
                <MenubarTrigger disabled className='m-0 p-0'><img src={AppLogo} alt='FoxGreen'/></MenubarTrigger>
              </MenubarMenu>
            </div>
          </div>
          {/* Criar componentes novos botões */}
          <div className='flex flex-inital flex-row items-center gap-3 h-10'>
            <Button className='max-h-8 max-w-[75px] px-3 py-[6px] bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Vendas</Button>
            <Button className='max-h-8 max-w-[75px] px-3 py-[6px] bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Marketing</Button>
            <Button className='max-h-8 max-w-[75px] px-3 py-[6px] bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Afiliados</Button>
            <Button className='max-h-8 max-w-[75px] px-3 py-[6px] bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900'>CRM</Button>
          </div>
        </div>
        <div className='flex flex-row items-center-end justify-end gap-4 h-10 mr-4 '>
          <Input className='h-10 w-[350px] focus-visible:ring-transparent rounded-lg border-slate-300' placeholder='Pesquise Nomes, CPFs ou E-mails'/>
          <Button className='min-h-10 min-w-10 text-slate-600 border-slate-300 rounded-lg relative' variant={'outline'} size={'icon'}>
            <Bell></Bell>
            <Badge className='bg-red-600  h-4 w-4 p-0 absolute top-0 right-0'>
              <span className='text-[12px]/[12px]'>99</span>
            </Badge> 
          </Button>
          <Avatar className='border-2 border-slate-400'>
            <AvatarImage src={Iasmin}/>
            <AvatarFallback>IS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Menubar>
  );
}