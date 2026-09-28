import Image from "next/image"
import Link from "next/link"

import banner0 from "@/assets/assa-banner-0.png"

import limpeza from "@/assets/banner_limpeza.png"

import todoit from "@/assets/banner_todoit.png"

import utilidades from "@/assets/banner_utilidades.png"

import cuidados from "@/assets/banner_cuidados.png"

import bannerRede from "@/assets/banner_rede.png"

import bannerFeira from "@/assets/banner_feira.png"

import bannerVenda from "@/assets/banner_ponto.png"

import about from "@/assets/asa_sobre.png"

const homePage = () =>{
  return(
    <main>
      <div className="w-full h-auto">
          <div className="relative">
                  <Image src={banner0} alt="Banner apresentação" className="h-[500px] object-cover lg:h-auto"/>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                    <div className="containerScreen">
                        <h1 className="text-6xl text-white font-bold">Soluções para <br/>o seu dia a dia</h1>
                        <p className="text-2xl text-white">Um mix de produtos pensado para o seu varejo.</p>

                        <div className="flex flex-row flex-wrap gap-5 pt-5">
                          <Link href="#" className="bg-green-500 text-white text-center p-3 rounded">Conheça nossos produtos</Link>
                          <Link href="#" className="border-1 border-white text-white text-center p-3 rounded">Fale com a ASA</Link>
                        </div>
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

      <div className="w-full h-auto bg-blue-950">
        <div className="containerScreen pb-7">
          <section className="py-3">
            <h2 className="text-5xl text-center font-bold text-white">Presente nos melhores verejos do Brasil</h2>
          </section>
          <div className="flex flex-wrap flex-row">
                <section className="basis-1/3">
                  <div className="p-3">
                    <Image src={bannerRede} alt="Banner em grandes redes"/>
                  </div>
                </section>
          
                <section className="basis-1/3">
                  <div className="p-3">
                    <Image src={bannerFeira} alt="Em feiras e eventos"/>
                  </div>
                </section>



                <section className="basis-1/3">
                  <div className="p-3">
                    <Image src={bannerVenda} alt="No ponto de venda"/>
                  </div>
                </section>

          </div>
        </div>
      </div>

      <div className="w-full h-auto pt-5">

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

      <div className="w-full h-auto">

        <div className="containerScreen">
          <section className="flex flex-wrap flex-row">
            <div className="basis-1/2">
            
              <div className="p-3">
                <div className="flex flex-col">
                    <h3 className="text-4xl font-bold text-blue-800">Vamos conversar?</h3>
                    <p className="text-xl font-bold">Encontre o mix ideal para o seu varejo.</p>
                </div>
                <form className="flex  flex-wrap flex-row">
                    <div className="basis-1/2 pr-2">
                      <label>Nome</label>
                      <input type="text" className="w-full h-auto p-3 rounded text-md border-1 border-gray-200" placeholder="Digite seu nome"/>
                    </div>

                    <div className="basis-1/2 pl-2">
                      <label>Cidade</label>
                      <input type="text" className="w-full h-auto p-3 rounded text-md border-1 border-gray-200" placeholder="Digite seu nome"/>
                    </div>

                    <div className="basis-1/2 pr-2">
                      <label>E-mail</label>
                      <input type="text" className="w-full h-auto p-3 rounded text-md border-1 border-gray-200" placeholder="Digite seu nome"/>
                    </div>

                    <div className="basis-1/2 pl-2">
                      <label>Mensagem</label>
                      <textarea type="text" className="w-full h-auto p-3 rounded text-md border-1 border-gray-200" placeholder="Digite seu nome"/>
                    </div>
                </form>
              </div>
            
            </div>
            <address className="basis-1/2">
              <div className="m-5 shadow">
                <iframe className="rounded object-cover w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.792509316114!2d-49.41278532396417!3d-16.536569541669603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e63b5faef201f%3A0x42889d97f827746e!2sAsa%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1790469647929!5m2!1spt-BR!2sbr" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <div className="p-3">
                    <ul>
                      <li><span><a>Via Primária 01 Qd. 04 Lt. 01 a 11 Distrito Industrial, Goianira - Goiás</a></span></li>
                      <li><span><a>(62) 3593-3630</a></span></li>
                      <li><span><a href="sac@asadobrasil.com.br">sac@asadobrasil.com.br</a></span></li>
                    </ul>
                </div>
              </div>
            </address>
          </section>
        </div>

      </div>
    </main>
  )
}
export default homePage
