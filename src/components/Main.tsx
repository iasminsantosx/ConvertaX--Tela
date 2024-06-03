import { Aside } from "./Aside";
import { MainCard } from "./MainCard";
import { Separator } from "./ui/separator";

export const Cards = () => {
  return (
    <main className='h-[952px] flex'>
      <Aside />
      <Separator orientation="vertical" />
      <div className="bg-slate-50 w-full p-6">
        <h2 className="text-slate-900 text-2xl font-semibold tracking-[-0.006em] mb-4">
          Relatórios
        </h2>
        <div className="grid gap-x-4 gap-y-4 grid-cols-3">
          <MainCard
            headerIconName="shopingCart"
            headerIconColor="violet"
            headerDescription="Abandono de carrinho"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali..."
          />
          <MainCard
            headerIconName="creditCard"
            headerIconColor="violet"
            headerDescription="Cartão recusado"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali..."
          />
          <MainCard
            headerIconName="file"
            headerIconColor="red"
            headerDescription="Boleto vencido"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali..."
          />
          <MainCard
            headerIconName="coin"
            headerIconColor="green"
            headerDescription="Pix vencido"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali..."
          />
        </div>
      </div>
    </main>
  );
}