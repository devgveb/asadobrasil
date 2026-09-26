import Image from "next/image"
import Link from "next/link"

import banner0 from "@/assets/assa-banner-0.png"

import limpeza from "@/assets/banner_limpeza.png"

import todoit from "@/assets/banner_todoit.png"

import utilidades from "@/assets/banner_utilidades.png"

import cuidados from "@/assets/banner_cuidados.png"

import about from "@/assets/asa_sobre.png"

const homePage = () =>{
  return(
    <main>
      <div className="w-full h-auto">
        <div className="relative">
          <Image src={banner0} alt="Banner apresentação"/>
          <div className="pl-5 absolute top-1/2 -translate-y-1/2">
            <h1 className="text-6xl text-white font-bold">Soluções para <br/>o seu dia a dia</h1>
            <p className="text-2xl text-white">Um mix de produtos pensado para o seu varejo.</p>

            <div className="flex flex-row flex-wrap gap-5 pt-5">
              <Link href="#" className="bg-green-500 text-white text-center p-3 rounded">Conheça nossos produtos</Link>
              <Link href="#" className="border-1 border-white text-white text-center p-3 rounded">Fale com a ASA</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto">
        <div className="containerScreen">
          <section className="flex flex-col pt-5">
            <h3 className="text-center text-4xl font-bold text-blue-900">Nossas Linhas</h3>
            <p className="text-center text-xl font-bold text-blue-900">Soluções para cada rotina.</p>
          </section>

          <div className="flex flex-wrap flex-row">

            <section className="basis-full md:basis-1/2 lg:basis-1/4">
              <div className="p-5 m-5 shadow rounded">
                <Image src={limpeza} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div className="p-5">
                  <h5 className="pb-5 text-2xl font-bold">Limpeza</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

            <section className="basis-full md:basis-1/2 lg:basis-1/4">
              <div className="p-5 m-5 shadow rounded">
                <Image src={todoit} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div className="p-5">
                  <h5 className="pb-5 text-2xl font-bold">Faça você mesmo</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

            <section className="basis-full md:basis-1/2 lg:basis-1/4">
              <div className="p-5 m-5 shadow rounded">
                <Image src={utilidades} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div className="p-5">
                  <h5 className="pb-5 text-2xl font-bold">Utensílios de Cozinha</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

            <section className="basis-full md:basis-1/2 lg:basis-1/4">
              <div className="p-5 m-5 shadow rounded">
                <Image src={cuidados} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div className="p-5">
                  <h5 className="pb-5 text-2xl font-bold">Cuidados Pessoais</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <div className="w-full h-auto">

        <div className="containerScreen">

          <section className="flex flex-row flex-wrap items-center">
          <div className="basis-full lg:basis-1/2 pr-2">
          
          <Image src={about} alt="Sobre Asa do Brasil" className="rounded object-cover"/>
          
          </div>
          <div className="basis-full lg:basis-1/2 pl-5">
          
          <h2 className="text-4xl font-bold text-blue-700">Sobre a Asa do Brasil</h2>

          <p className="pt-2 text-xl">Desde <strong>1997</strong>, a <strong>ASA DO BRASIL</strong> tem se consolidado como referência nacional no fornecimento de <strong>utilidades domésticas e bazar</strong> para o varejo alimentar.</p>
          
          <p className="pt-4 text-xl">Oferecemos <strong>soluções completas</strong> que impulsionam vendas e fortalecem a experiência de compra no ponto de venda.</p>

          <p className="pt-4 text-xl">Com presença em <strong>pequenos, médios e grandes clientes em todo o Brasil</strong>, nossa equipe atua de forma <strong>consultiva e personalizada</strong>, entendendo a realidade de cada parceiro para entregar o mix certo de produtos e resultados consistentes.</p>

          <p className="pt-2 text-xl">A <strong>ASA DO BRASIL</strong> é mais do que uma fornecedora: somos <strong>parceiros de crescimento</strong> para o seu negócio.</p>
          
          </div>
        </section>

        </div>

        

      </div>
    </main>
  )
}
export default homePage
